import manifest from '../manifest.json' // required for webpack to copy.
import { getBodyDataFromStorage } from "./getStoredData.js"
import {
  initTableFunction,
  setTitleTableHeaderText, 
  setTableDataHeaderText,
  setBodyCaptureItteratorElement,
  setTitleCaptureItteratorElement,
  setDataCaptureItteratorElement,
  openTable,
  addRowToTable,
  closeTable,
  addToTableHead
} from "./functions/table.js"
import {nonGreedyFindMultiLineElementsByAttributeOrText} from '/node_modules/element-scraper/dist/index.js'

// Only global variable in extension space.
let htmlBodyData = ""

// Event listeners

// button for triggering data save to chrome local storage.
const getData = document.getElementById("get-data")
getData.addEventListener("click", function () {
  triggerUrlDataCapture()
  getDataCapture()
  return true
})



// format data.
async function getDataCapture() {
  htmlBodyData = await getBodyDataFromStorage()
}

/**
 * Loads the table function.
 */
const manipulateData = document.getElementById("function-table")
manipulateData.addEventListener("click", function () {
  initTableFunction()
  setTitleTableHeaderText() 
  setTableDataHeaderText()
  setBodyCaptureItteratorElement()
  setTitleCaptureItteratorElement()
  setDataCaptureItteratorElement()
  return true
})

// Call capture function on client side.
function triggerUrlDataCapture() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: "capture" },
      function (response) {}
    )
  })
}

// show message that data has been captured, from specific url.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const fromUrl = sender.tab.url
  logDataFetchMessage(fromUrl)
  return true
})

/**
 * Show the url that data was fetched from.
 *
 * @param {string} dataFromUrl URL string
 */
function logDataFetchMessage(dataFromUrl) {
  const dataFromField = document.getElementById("data-from")
  dataFromField.innerHTML = "Data Captured from: " + dataFromUrl
}

// test thingy
const getTitles = document.getElementById("get-titles")
getTitles.addEventListener("click", function () {
  openTable()
  const capturedDom = new DOMParser().parseFromString(htmlBodyData, "text/html")
  const titles = capturedDom.getElementsByClassName("card-body")[0].innerHTML
  const titlesElement = document.querySelector(".titles")
  const tableTitleHeader = document.querySelector("#table-header").value
  const tableDataHeader = document.querySelector("#table-data").value
  const captureElement = document.querySelector("#element-capture-name").value
  const tableTitles = document.querySelector("#table-title-attribute").value
  const tableData = document.querySelector("#table-data-attribute").value

  const caputreContent = capturedDom.getElementsByClassName(captureElement)

  titlesElement.innerHTML = ""
  addToTableHead(tableTitleHeader)
  addToTableHead(tableDataHeader)
  for (const content of caputreContent){

    const title = getElementPart(content, tableTitles)
    const breadText = getElementPart(content, tableData)
    addRowToTable(title, breadText)
  }
  closeTable()
  return true
})



function getElementPart(content, searchParam) {
  const innerContent = content.innerHTML;
  return nonGreedyFindMultiLineElementsByAttributeOrText(innerContent, searchParam)
}


