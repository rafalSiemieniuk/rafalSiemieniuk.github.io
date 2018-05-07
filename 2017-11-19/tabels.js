
/* zad 2a
Kliknięcie w komórkę powinno zmieniać jej kolor.
Tylko jedna komórka naraz powinna być oznaczona innym kolorem, zatem kliknięcie w kolejną powinno czyścić poprzednią. */

var tableWrapper = document.getElementById('table-wrapper');
var table = document.createElement("table");

table.border = "1";

for (var j = 0; j < 3; j++) {
  var row = table.insertRow(-1);
  for (var k = 0; k < 3; k++) {
    var cell = row.insertCell(-1);
    cell.innerHTML = 'Przykladowy <br>teskt';
  }
}
tableWrapper.appendChild(table);

table.addEventListener('click', function (event) {
  var cell = event.target;
  cleanTable();
  cell.setAttribute('class', 'cell');
});

function cleanTable() {
  for (var i = 0; i < (j * k); i += 1) {
    var td = document.getElementsByTagName('td')[i];
    td.removeAttribute('class');
  }
}

/* zad 2b
Kliknięcie w komórkę powinno zmieniać jej kolor.
Wiele komórek może być pokolorowanych jednocześnie, ale kolejne kliknięcie w kolorową powoduje powrót do poprzedniego stanu.*/

var tableWrapper2 = document.getElementById('table-wrapper2');
var table2 = document.createElement("table");
table2.border = "1";

for (var j = 0; j < 3; j++) {
  var row = table2.insertRow(-1);
  for (var k = 0; k < 3; k++) {
    var cell = row.insertCell(-1);
    cell.innerHTML = 'Przykladowy <br>teskt';
  }
}
tableWrapper2.appendChild(table2);

table2.addEventListener('click', function (event) {
  var cell = event.target;
  toggleClass(event, 'cell');
});

function toggleClass(event, className) {
  var element = event.target;
  var hasClass = element.classList.contains(className);
  if (hasClass) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

/* zad 3
Dokładnie jedna komórka jest kolorowa. Naciskanie klawiszy strzałek powinno przemieszczać pokolorowaną komórkę (tylko kolor, nie jej zawartość).*/

var tableWrapper3 = document.getElementById('table-wrapper3');
var table3 = document.createElement("table");
table3.border = "1";
var counter = 0;
for (var j = 0; j < 3; j++) {
  var row = table3.insertRow(-1);
  for (var k = 0; k < 3; k++) {
    var cell = row.insertCell(-1);
    counter += 1;
    cell.innerHTML = counter;
    cell.setAttribute('class', 'newTable');
    cell.setAttribute('id', counter);
    if (j == 1 && k == 1)
      cell.classList.add('cell')
  }
}
tableWrapper3.appendChild(table3);

var td = document.querySelectorAll('td.newTable');
var tdLength = td.length;
var id = 5;

for (var i = 0; i < tdLength; i += 1) {
  window.onkeydown = function (ev) {
    var keyboardKey = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyboardKey == 38) {
      console.log('strzalka gora');
      jumpColor(id - j);
    }
    else if (keyboardKey == 40) {
      console.log('strzalka dół');
      jumpColor(id + j);
    }
    else if (keyboardKey == 37) {
      console.log('strzalka lewo');
      jumpColor(id - 1);
    }
    else if (keyboardKey == 39) {
      console.log('strzalka prawo');
      jumpColor(id + 1);
    }
  }
}

function jumpColor(param) {
  if (param < 1 || param > j * k) {
    return
  }
  else {
    document.getElementById(param).classList.add('cell');
    document.getElementById(id).classList.remove('cell');
    id = param;
  }
}