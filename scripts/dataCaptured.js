function updateDataFromField(dataFromUrl) {
  chrome.storage.local.get(['elementalkey'], function(result) {
    logDataFetchMessage(dataFromUrl)
    return result.elementalkey
  })
}

function logDataFetchMessage(dataFromUrl) {
  const dataFromField = document.getElementById('data-from')
  dataFromField.innerHTML = "Data Captured from: " + dataFromUrl

}

export {updateDataFromField}