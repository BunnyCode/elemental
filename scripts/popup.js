
import { updateDataFromField } from "./dataCaptured.js"

let caputredData

function triggerUrlDataCapture() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "capture"}, function(response) {
      console.log("sent")
    })
  })
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const dataFrom = sender.tab.url
    caputredData = updateDataFromField(dataFrom)
    return true
  }
)

const getData = document.getElementById("get_data")
getData.addEventListener("click", function() {
  triggerUrlDataCapture()  
})
