import manifest from "../manifest.json" // required for webpack to copy.
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
  addToTableHead,
} from "./functions/table.js"
import { nonGreedyFindMultiLineElementsByAttributeOrText } from "/node_modules/element-scraper/dist/index.js"

// Only global variable in extension space.
let htmlBodyData = ""

// button for triggering data save to chrome local storage.
const getData = document.getElementById("get-data")
getData.addEventListener("click", function () {
  triggerUrlDataCapture()
  getDataCapture()
  return true
})

async function getDataCapture() {
  htmlBodyData = await getBodyDataFromStorage()
}

// Load table input component.
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
  const currentTab = 0
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[currentTab].id,
      { message: "capture" },
      function (response) {}
    )
  })
}

// show message in popup that data has been captured.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const fromUrl = sender.tab.url
  logDataFetchMessage(fromUrl)
  return true
})

// Show the url that data was fetched from.
function logDataFetchMessage(dataFromUrl) {
  const dataFromField = document.getElementById("data-from")
  dataFromField.innerHTML = "Data Captured from: " + dataFromUrl
}

// Make table with parameters.
const getTitles = document.getElementById("get-titles")
getTitles.addEventListener("click", function () {
  openTable()
  addToTableHead(document.querySelector("#table-header").value)
  addToTableHead(document.querySelector("#table-data").value)

  const captureElement = document.querySelector("#element-capture-name").value
  const tableTitles = document.querySelector("#table-title-attribute").value
  const tableData = document.querySelector("#table-data-attribute").value

  const capturedDom = new DOMParser().parseFromString(htmlBodyData, "text/html")
  const caputreContent = capturedDom.getElementsByClassName(captureElement)
  for (const content of caputreContent) {
    const title = parseContent(content, tableTitles)
    const breadText = parseContent(content, tableData)
    addRowToTable(title, breadText)
  }

  closeTable()
  return true
})

function parseContent(content, elementToGet) {
  const innerContent = content.innerHTML
  return nonGreedyFindMultiLineElementsByAttributeOrText(
    innerContent,
    elementToGet
  )
}
