
var manipulationTable = document.getElementById('manipulationTable');
var btnInsertRows = document.getElementById('btnInsertRows');
var btnInsertColumns = document.getElementById('btnInsertColumns');
var btnAddArray = document.getElementById('btnAddArray');
var btnAscending = document.getElementById('btnAscending');
var btnDescending = document.getElementById('btnDescending');
var btnEven = document.getElementById('btnEven');
var btnOddEven = document.getElementById('btnOddEven');
var btnAll = document.getElementById('btnAll');
var btnTwoColumns = document.getElementById('btnTwoColumns');
var rowsVal = document.getElementById('rows');
var columnsVal = document.getElementById('columns');
var unorderList = document.getElementById('unorderList');
var inputArrayVal = document.getElementById('array');
var total = document.getElementById('total');
var manipulationTable = document.getElementById('manipulationTable');
var table = null;

var nr = 1;
var inquiry;
var ar = [];

// PRZYCISKI !
// zadanie 1
btnInsertRows.addEventListener('click', function () {
  inquiry = true;
  insertTable();
});

btnInsertColumns.addEventListener('click', function () {
  inquiry = false;
  insertTable();
});
// zadanie 2
btnAddArray.addEventListener('click', addArray);

btnAscending.addEventListener('click', function () {
  var arAscending = ar;
  console.log('ar: ' + ar);
  arAscending.sort(compareNumbersAscending);
  console.log('arAscending.sort(compareNumbers): ' + arAscending);
  console.log('ar: ' + ar);
  drawTable(arAscending);
});

btnDescending.addEventListener('click', function () {
  var arDescending = ar;
  console.log('ar: ' + ar);
  arDescending.sort(compareNumbersDescending);
  console.log('arDescending.sort(compareNumbers): ' + arDescending);
  console.log('ar: ' + ar);
  drawTable(arDescending);
});

btnEven.addEventListener('click', function () {
  drawTable(even(ar));
});

btnOddEven.addEventListener('click', function () {
  drawTable(oddEven(ar));
});

btnAll.addEventListener('click', function () {
  drawTable(ar);
});

btnTwoColumns.addEventListener('click', function () {
  twoColumns(ar);
});

// FUNKCJE !
// zadanie 1
function insertTable() {
  var table = document.createElement('table');
  var list = document.createElement('li');
  table.border = '1';
  unorderList.appendChild(list);

  var tekst = document.createTextNode("Tabela " + nr);
  list.appendChild(tekst);

  var rows = parseInt(rowsVal.value);
  var columns = parseInt(rowsVal.value);
  nr += 1;

  var i = 0;
  for (var j = 1; j <= rows; j += 1) {
    var row = table.insertRow(-1);
    for (var k = 0; k < columns; k += 1) {
      var cell = row.insertCell(-1);
      i += 1;
      if (inquiry) {
        cell.textContent = i;
      }
      else {
        cell.textContent = j + rows * k;
      }
    }
  }
  list.appendChild(table);
}
// zadanie 2
function addArray() {
  var inputArray = inputArrayVal.value;
  ar[ar.length] = inputArray
  console.log('tablica ar = ' + ar);
  console.log(ar.length);
  inputArrayVal.value = '';
}

function compareNumbersAscending(a, b) {
  return a - b
}

function compareNumbersDescending(a, b) {
  return b - a
}

function even(param1) {
  var newArray = [];
  for (var i = 0; i < param1.length; i += 1) {
    if (param1[i] % 2 === 0) {
      newArray.push(param1[i]);
    }
  }
  return newArray
}

function oddEven(param1) {
  var newArray = [];
  for (var i = 0; i < param1.length; i += 1) {
    if (param1[i] % 2 !== 0) {
      newArray.push(param1[i]);
    }
  }
  return newArray
}

function drawTable(param1) {
  manipulationTable.innerHTML = '';
  table = document.createElement('table');
  table.border = '1';
  manipulationTable.appendChild(table);
  for (var j = 0; j < param1.length; j += 1) {
    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.textContent = param1[j];
  }
}

function twoColumns(param1) {
  manipulationTable.innerHTML = '';
  table = document.createElement('table');
  table.border = '1';
  manipulationTable.appendChild(table);
  var counter = 0;
  for (var j = 0; j < (param1.length / 2); j += 1) {
    var row = table.insertRow(-1);
    for (var k = 0; k < 2; k += 1) {
      var cell = row.insertCell(-1);
      cell.textContent = param1[counter];
      counter += 1;
    }
  }
}