import { getBodyDataFromStorage } from "./dataCapture.js"
import * as elementScraper from 'element-scraper'

// Only global variable in extension space.
let bodyData = ""

// Event listeners

// button for triggering data save to chrome local storage.
const getData = document.getElementById("get-data")
getData.addEventListener("click", function () {
  triggerUrlDataCapture()
  getDataCapture()
  return true
})

// button for manipulating data
const manipulateData = document.getElementById("manipulate-data")
manipulateData.addEventListener("click", function () {
  formatData()
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

export { getBodyDataFromStorage, logDataFetchMessage }

// format data.
async function getDataCapture() {
  bodyData = await getBodyDataFromStorage()
}
