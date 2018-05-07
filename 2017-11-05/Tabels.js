// Zadania 1 - 3

var inputRow_Val = document.getElementById('inputRow');
var inputCol_Val = document.getElementById('inputCol');
var inputNumberA_Val = document.getElementById('inputNumberA');
var inputNumberB_Val = document.getElementById('inputNumberB');
var btnCreateTableWork_1 = document.getElementById('btnCreateTableWork_1');
var btnCreateTableWork_2 = document.getElementById('btnCreateTableWork_2');
var btnCreateTableWork_3 = document.getElementById('btnCreateTableWork_3');
var total = document.getElementById('total');


btnCreateTableWork_1.addEventListener('click', function () {
  declarations();
  createTable('work_1', inputRow, inputCol, inputNumberA, inputNumberB);
});

btnCreateTableWork_2.addEventListener('click', function () {
  declarations();
  createTable('work_2', inputRow, inputCol, inputNumberA, inputNumberB);
});

btnCreateTableWork_3.addEventListener('click', function () {
  declarations();
  createTable('work_3', inputRow, inputCol, inputNumberA, inputNumberB);
});

// Funkcje !

function declarations() {
  inputRow = parseInt(inputRow_Val.value);
  inputCol = parseInt(inputCol_Val.value);
  inputNumberA = inputNumberA_Val.value;
  inputNumberB = inputNumberB_Val.value;
}

function createTable(type, parRow, parCol, parA, parB) {
  total.innerHTML = '';
  table = document.createElement('table');
  table.border = '1';
  total.appendChild(table);
  if (type === 'work_1') {
    for (var j = 0; j < parRow; j += 1) {
      var myRow = document.createElement('tr');
      for (var k = 0; k < parCol; k += 1) {
        var myCol = document.createElement('td');
        if (j % 2 === 0) {
          myCol.setAttribute('class', 'red');
          var textNode = document.createTextNode(parA);
          myCol.appendChild(textNode);
        }
        else {
          myCol.setAttribute('class', 'green');
          var textNode = document.createTextNode(parB);
          myCol.appendChild(textNode);
        }
        myRow.appendChild(myCol);
      }
      table.appendChild(myRow);
    }
    return
  }
  else if (type === 'work_2') {
    for (var j = 0; j < parRow; j += 1) {
      var row = table.insertRow(-1);
      for (var k = 0; k < parCol; k += 1) {
        var cell = row.insertCell(-1);
        if (k % 2 === 0) {
          cell.textContent = parA;
          cell.setAttribute('class', 'red');
        }
        else {
          cell.textContent = parB;
          cell.setAttribute('class', 'green');
        }
      }
    }
    return
  }
  else if (type === 'work_3') {
    for (var j = 0; j < parRow; j += 1) {
      var row = table.insertRow(-1);
      for (var k = 0; k < parCol; k += 1) {
        var cell = row.insertCell(-1);
        if (j % 2 === 0 && k % 2 === 0 || j % 2 !== 0 && k % 2 !== 0) {
          cell.textContent = parA;
          cell.setAttribute('class', 'red');
        }
        else {
          cell.textContent = parB;
          cell.setAttribute('class', 'green');
        }
      }
    }
    return
  }
}

// Zadanie 5

var inputRow_Val = document.getElementById('inputRow');
var inputCol_Val = document.getElementById('inputCol');
var btnCreateTableWork_5 = document.getElementById('btnCreateTableWork_5');
var total2 = document.getElementById('total2');

btnCreateTableWork_5.addEventListener('click', function () {
  inputRow = parseInt(inputRow_Val.value);
  inputCol = parseInt(inputCol_Val.value);
  createTable_5_6('work_5', inputRow, inputCol);
});

function createTable_5_6(type, parRow, parCol) {
  total2.innerHTML = '';
  table = document.createElement('table');
  table.border = '1';
  total2.appendChild(table);
  if (type === 'work_5') {
    var counter = 0;
    for (var j = 0; j < parRow; j += 1) {
      var row = table.insertRow(-1);
      if (j % 2 === 0) {
        for (var k = 0; k < (parCol / 2); k += 1) {
          var cell = row.insertCell(-1);
          counter += 1;
          cell.colSpan = 2;
          cell.setAttribute('class', 'cell');
        }
      }
      else {
        var cell = row.insertCell(-1);
        counter += 1;
        cell.setAttribute('class', 'cell');
        for (var k = 1; k < (parCol / 2); k += 1) {
          cell = row.insertCell(-1);
          counter += 1;
          cell.colSpan = 2;
          cell.setAttribute('class', 'cell');
        }
        cell = row.insertCell(-1);
        counter += 1;
        cell.setAttribute('class', 'cell');
      }
    }
    return
  }
  else if (type === 'work_6') {
    return
  }
}

function setColSpan() {
  var myTable = document.getElementById('myTable');
  var cell2html = myTable.rows[0].cells[1].innerHTML;
  myTable.rows[0].deleteCell(1);
  myTable.rows[0].cells[0].innerHTML = myTable.rows[0].cells[0].innerHTML + ' ' + cell2html;
  myTable.rows[0].cells[0].colSpan = 2;
}