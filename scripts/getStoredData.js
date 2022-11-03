// Get stored data as a string from Chrome storage.
async function getBodyDataFromStorage() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["elementalkey"], function (result) {
      if (result.elementalkey === undefined) {
        reject()
      } else {
        resolve(result.elementalkey)
      }
    })
  })
}

export { getBodyDataFromStorage }
