const updateDataFromField = (dataFromUrl) => {
  const dataFromField = document.getElementById('data-from')
  dataFromField.innerHTML = "Data Captured from: " + dataFromUrl
}

export {updateDataFromField}