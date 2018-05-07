/* Zad 4
Dokument zawiera tabelę (3 wiersze, 4 kolumny) wypełnioną napisami. Po kliknięciu w przycisk, poniżej wyświetli się zawartość losowej komórki tabeli.
*/

var table = document.getElementById('manipulationTable');
var total = document.getElementById('total');
var answer = document.getElementById('answer');
var btnRandomText = document.getElementById('btnRandomText');

var table = document.createElement("table");
table.border = "1";

var cells = [];

for (var j = 0; j < 3; j++) {
  var row = table.insertRow(-1);
  for (var k = 0; k < 4; k++) {
    var cell = row.insertCell(-1);
    cells.push(cell);
    cell.innerHTML = 'tekst nr ' + cells.length;
  }
}
manipulationTable.appendChild(table);

btnRandomText.addEventListener('click', function () {
  var random = Math.floor(Math.random() * cells.length) + 1;
  var text = cells[random - 1].textContent;
  answer.textContent = text
});

/*
Zad 5
Dokument zawiera tabelę (4 wiersze, 3 kolumny) z dowolną zawartością. Po najechaniu wskaźnikiem myszy na komórkę tabeli jest ona kolorowana na czerwono, natomiast cała kolumna na zielono, a cały wiersz na niebiesko.
*/

var tableWork_5 = document.getElementById('tableWork_5');

var table = document.createElement("table");
table.border = "1";

var nr = 0;
var neighborRow;

for (var j = 0; j < 4; j++) {
  var row = table.insertRow(-1);
  for (var k = 0; k < 3; k++) {
    var cell = row.insertCell(-1);
    nr += 1;
    cell.innerHTML = 'tekst nr ' + nr;
    cell.classList.add('row_' + (k + 1));
    cell.addEventListener('mouseover', function (event) {
      mouseOver(event);
    });
    cell.addEventListener('mouseout', function (event) {
      mouseOut(event);
    });
  }
}
tableWork_5.appendChild(table);

function mouseOver(event) {
  var newy = event.target;
  neighborRow = newy.parentNode;
  newy.classList.add('cell');
  neighborRow.classList.add('blue');
  for (var i = 1; i <= k; i += 1) {
    if (newy.classList.contains('row_' + i)) {
      var green = document.querySelectorAll('td.row_' + i);
      for (var n = 0; n < green.length; n += 1) {
        green[n].classList.add('green');
      }
    }
  }
}

function mouseOut(event) {
  var newy = event.target;
  newy.classList.remove('cell');
  var blueOut = document.getElementsByClassName('blue');
  blueOutLength = blueOut.length;
  for (var i = 0; i < blueOutLength; i += 1) {
    blueOut[0].classList.remove('blue');
  }
  var greenOut = document.getElementsByClassName('green');
  greenOutLength = greenOut.length;
  for (var i = 0; i < greenOutLength; i += 1) {
    greenOut[0].classList.remove('green');
  }
}

/*
Dokument zawiera listę napisów. Po kliknięciu w dowolny element, jest on kolorowany na zielono. Następny element listy kolorowany jest na niebiesko, a poprzedni na pomarańczowo. Jeśli kliknięty element był parzysty, zostaje wyświetlony na jasnoszarym tle, a jeśli nieparzysty - na ciemnoszarym. Po kliknięci w inny element, poprzednie wracają do stanu pierwotnego. 
*/

var lists = document.querySelectorAll('li.roster');
var nullparagraph = document.getElementById('nullparagraph');
var listsLength = lists.length;

for (var i = 0; i < listsLength; i++) {
  lists[i].addEventListener('click', function (event) {
    var newy = event.target;

    for (var i = 0; i < listsLength; i++) {
      newy.parentNode.children[i].classList.remove('greenChain', 'orangeChain', 'blueChain', 'darkGrey', 'lightGrey');
    }

    var index = Array.from(newy.parentElement.children).indexOf(newy)
    if ((index + 1) % 2 == 0) { // jesli nieparzysta
      newy.classList.add('darkGrey');
    }
    else { // jesli parzysta
      newy.classList.add('lightGrey');
    }


    newy.classList.add('greenChain');
    if (newy.classList.contains('greenChain')) {
      newy.previousElementSibling ? newy.previousElementSibling.classList.add('orangeChain') : null
      newy.nextElementSibling ? newy.nextElementSibling.classList.add('blueChain') : null
    }
  });
}

