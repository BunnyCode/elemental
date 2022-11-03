function initTableFunction() {
  const functionTag = document.querySelector(".loaded-function")
  functionTag.innerHTML = `<div class="table-creator">
    </div>`
}

function setTitleTableHeaderText() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML = `<div>
    <p>Table title header name</p>
    <input id="table-header">
    </input>
    </div>`
}

function setTableDataHeaderText() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML += `<div>
    <p>Table data header name</p>
    <input id="table-data">
    </input>
    </div>`
}

function setBodyCaptureItteratorElement() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML += `<div>
    <p>Get data from elements containg attribute:</p>
    <input id="element-capture-name">
    </input>
    </div>`
}

function setTitleCaptureItteratorElement() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML += `<div>
    <p>Get titles from attribute</p>
    <input id="table-title-attribute">
    </input>
    </div>`
}

function setDataCaptureItteratorElement() {
  const functionTag = document.querySelector(".table-creator")
  functionTag.innerHTML += `<div>
    <p>Get data from attribute</p>
    <input id="table-data-attribute">
    </input>
    </div>`
}

function openTable() {
  const functionTag = document.querySelector(".capture-table")
  functionTag.innerHTML = `<table class="table">
    <thead class="header">
    </thead>
    `
}

function closeTable() {
  const functionTag = document.querySelector(".capture-table")
  functionTag.innerHTML += `</table>`
}

function addToTableHead(headData) {
  const header = document.querySelector(".header")
  const thFragment = document.createElement("th")
  thFragment.innerHTML = headData
  header.appendChild(thFragment)
}

function addRowToTable(title, data) {
  const table = document.querySelector(".table")
  const tableRow = document.createElement("tr")
  const tdTitle = document.createElement("td")
  const tdData = document.createElement("td")
  tdTitle.innerHTML = title
  tdData.innerHTML = data
  tableRow.appendChild(tdTitle)
  tableRow.appendChild(tdData)
  table.appendChild(tableRow)
}

export {
  initTableFunction,
  setTitleTableHeaderText,
  setTableDataHeaderText,
  setBodyCaptureItteratorElement,
  setTitleCaptureItteratorElement,
  setDataCaptureItteratorElement,
  openTable,
  addRowToTable,
  closeTable,
  addToTableHead,
}
