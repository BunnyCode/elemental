import manifest from '../manifest.json' // required for webpack to copy.
import { getBodyDataFromStorage } from "./dataCapture.js"
import {
  initTableFunction,
  setHeaderCaptureParameters,
  setBodyCaptureParameters,
  setBodyDataSplitParameters,
  setUpTable,
} from "./functions/table.js"
// import * as elementScraper from '/node_modules/element-scraper/dist/index.js'

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

// export { getBodyDataFromStorage, logDataFetchMessage }

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
  setHeaderCaptureParameters()
  setBodyCaptureParameters()
  setBodyDataSplitParameters()
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
