function setBodyData(capturedUrl) {
  const bodyElement = document.body.innerHTML
  chrome.storage.local.set({
    elementalkey: bodyElement,
  })
  console.log("Data saved from: " + capturedUrl)
}

// listener for when to get data.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const currentUrl = window.location.href
  setBodyData(currentUrl)
  chrome.runtime.sendMessage({ elementalkey: currentUrl }, function (response) {
    console.log("Captured URL Body data to local storage key = elementalkey")
  })
  return true
})
