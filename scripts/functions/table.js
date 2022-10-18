function initTableFunction() {
  const functionTag = document.querySelector(".loaded-function")
  functionTag.innerHTML =
    `<div class="table-creator">
    </div>`
}

function setHeaderCaptureParameters() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML =
    `<div>
    <p>Header Capture Element</p>
    <input id="table-header">
    </input>
    </div>`
}

function setBodyCaptureParameters() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML +=
    `<div>
    <p>Body capture</p>
    <input id="table-body">
    </input>
    </div>`
}

function setBodyDataSplitParameters() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML +=
    `<div>
    <p>Body Split on</p>
    <input id="table-split">
    </input>
    </div>`
}

function setUpTable() {
  const functionTag = document.querySelector(".capture-table")
  functionTag.innerHTML =
    `<table class="table">
    <thead class="header">
    </thead>
    </table>`
}

export {initTableFunction, 
  setHeaderCaptureParameters, 
  setBodyCaptureParameters,
  setBodyDataSplitParameters,
  setUpTable}
