/* Zad 1
Dokument zawiera listę napisów. Po kliknięciu w dowolny z elementów listy, poniżej wyświetli się liczba jego znaków.
*/

var list = document.getElementsByClassName('list');
var total = document.getElementById('total');

for (var i = 0; i < list.length; i += 1) {
  list[i].onclick = subtitleCounter;
}

function subtitleCounter(event) {
  var str = event.target;
  total.innerHTML = 'Długość napisu jest równa: ' + str.textContent.length;
}

/* Zad 2
Dokument zawiera pewną liczbę paragrafów. Do każdego z nich dodaj atrybut title zawierający liczbę jego słów.
*/

var paragraph = document.getElementsByClassName('paragraph');
var btnTitle = document.getElementById('btnTitle');

btnTitle.addEventListener('click', function () {
  for (var i = 0; i < paragraph.length; i += 1) {
    addTitle(paragraph[i]);
  }
});

function addTitle(paramiter) {
  paramiter.setAttribute('title', 'Ilość wyrazów = ' + paramiter.textContent.trim().split(' ').length);
}

/* Zad 3
Dokument zawiera pewną liczbę paragrafów z tekstem, każdy poprzedzony osobnym nagłówkiem. Początkowo paragrafy są niewidoczne, a odsłaniają się dopiero po kliknięciu w odpowiedni nagłówek.
*/

var header = document.getElementsByClassName('header');
var para = document.getElementsByClassName('para');

for (var i = 0; i < header.length; i += 1) {
  header[i].onclick = uncover;
}

function uncover(event) {
  var uncoverPara = event.target;
  uncoverPara.nextElementSibling.removeAttribute('class');
}
