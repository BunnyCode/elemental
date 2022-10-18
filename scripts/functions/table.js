function initTableFunction() {
  const functionTag = document.querySelector(".loaded-function")
  functionTag.innerHTML =
    `<div class="table-creator">
    </div>`
}

function setHeaderCaptureParameters() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML =
    `<input id="table-header">
    </input>`
}

function setBodyCaptureParameters() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML +=
    `<input id="table-body">
    </input>`
}

function setBodyDataSplitParameters() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML +=
    `<input id="table-split">
    </input>`
}

function setUpTable() {
  const functionTag = document.querySelector(".capture-table")
  functionTag.innerHTML =
    `<table class="table">
    <thead class="header">
    </thead></table>`
}

export {initTableFunction, 
  setHeaderCaptureParameters, 
  setBodyCaptureParameters,
  setBodyDataSplitParameters,
  setUpTable}
