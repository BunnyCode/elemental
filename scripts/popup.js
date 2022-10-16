
import { updateDataFromField } from "./dataCaptured.js";

async function triggerUrlDataCapture() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message: "capture"}, (response) => {
      console.log("sent");
    })
  })
}

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    const dataFrom = sender.tab.url
    chrome.storage.local.get(['elementalkey'], (result) => {
      updateDataFromField(dataFrom)
      // document.body.innerHTML = result.elementalkey
    });
  }
);

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  triggerUrlDataCapture()  
});