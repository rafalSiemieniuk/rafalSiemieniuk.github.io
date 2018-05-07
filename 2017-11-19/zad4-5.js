/* zad4 i 4a
W kodzie JS stwórz tablicę dowolnych napisów. W dokumencie stwórz dwa przyciski ("poprzedni" i "następny") oraz pole tekstowe tylko do odczytu (atrybut readonly). Pole tekstowe wyświetla początkowo pierwszą wartość z tablicy. Naciskanie przycisków powoduje przechodzenie do poprzedniego lub następnego elementu. Jeśli nie ma elementu następnego/ poprzedniego (początek/ koniec tablicy), przyciski powinny być wyszarzone (atrybut disabled).

Zmodyfikuj kod, aby pole tekstowe nie było tylko do odczytu, a wprowadzone w nim zmiany był zapamiętywane w tablicy JS.
*/

var textarea = document.getElementById('textarea');
var paragraph = document.getElementById('paragraph');
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var arrayIndex = 0;

var table = ['0', '1', '2', '3', '4', '5', '6'];

paragraph.innerHTML = '[ ' + table + ' ]';
textarea.value = table[arrayIndex];

btnRight.addEventListener('click', function () {
  arrayIndex = getRightIndex(table, arrayIndex);
  textarea.value = table[arrayIndex];
});

btnLeft.addEventListener('click', function () {
  arrayIndex = getLeftIndex(arrayIndex);
  textarea.value = table[arrayIndex];
});


function getRightIndex(array, index) {
  var arrayLength = array.length;
  if (index < arrayLength - 1) {
    return index += 1;
  }
  return index;
}

function getLeftIndex(index) {
  if (index > 0) {
    return index -= 1;
  }
  return index;
}

textarea.addEventListener('blur', function (event) {
  table[arrayIndex] = event.target.value;
  paragraph.innerHTML = '[ ' + table + ' ]';
});

/* Zad 4b
W kodzie JS stwórz tablicę dowolnych napisów. W dokumencie stwórz dwa przyciski ("poprzedni" i "następny") oraz pole tekstowe tylko do odczytu (atrybut readonly). Pole tekstowe wyświetla początkowo pierwszą wartość z tablicy. Naciskanie przycisków powoduje przechodzenie do poprzedniego lub następnego elementu. Jeśli nie ma elementu następnego/ poprzedniego (początek/ koniec tablicy), przyciski powinny być wyszarzone (atrybut disabled).

Zmodyfikuj kod, aby tablica nie zawierała zwykłych tekstów, a adresy obrazków, natomiast pole tekstowe wymień na element img i wyświetlaj w nim kolejne grafiki (zmieniając atrybut src).
*/

var btnImgLeft = document.getElementById('btnImgLeft');
var btnImgRight = document.getElementById('btnImgRight');
var img = document.getElementById('img');
var imgIndex = 0;

var imgArray = ['img/morda_32.png', './img/omg.svg', './img/scary_2.svg'];
img.src = imgArray[imgIndex];

btnImgRight.addEventListener('click', function () {
  imgIndex = getRightIndex(imgArray, imgIndex);
  img.setAttribute('src', imgArray[imgIndex]);
});

btnImgLeft.addEventListener('click', function () {
  imgIndex = getLeftIndex(imgIndex);
  img.setAttribute('src', imgArray[imgIndex]);
});

/* Zad 5a
Dokument powinien zawierać jakiś napis powitalny, przycisk "pokaż" oraz sekcję div z jakąś zawartością (początkowo ukrytą). Kliknięcie w przycisk "pokaż" powinno na przemian odsłaniać i chować jej zawartość (zmieniaj również tekst na przycisku).

Dodaj kilka przycisków oraz kilka sekcji - każdy odsłania lub ukrywa sekcję przypisaną do niego (np. "dane produktu", "opinie klientów", "dostępność").
*/

var paragraph1 = document.getElementById('paragraph1');
var paragraph2 = document.getElementById('paragraph2');
var paragraph3 = document.getElementById('paragraph3');
var btnShow1 = document.getElementById('btnShow1');
var btnShow2 = document.getElementById('btnShow2');
var btnShow3 = document.getElementById('btnShow3');
var message = document.getElementsByClassName('message');

var quantity = document.querySelectorAll('p.message');
var counter = 0;
for (var i = 0; i < quantity.length; i += 1) {
  counter += 1; // zlicza ile jest ukrytych sekcji
}
var ar = [];
ar.length = counter;
for (var i = 0; i < ar.length; i += 1) {
  ar[i] = 1; // tworzy każdej sekcji indywidualny "indeks" kliknięć
}


btnShow1.addEventListener('click', function () {
  btnShow1.innerHTML = show(paragraph1, 0);
});

btnShow2.addEventListener('click', function () {
  btnShow2.innerHTML = show(paragraph2, 1);
});

btnShow3.addEventListener('click', function () {
  btnShow3.innerHTML = show(paragraph3, 2);
});

function show(element, nr) {

  if (element.id && ar[nr]) {
    element.removeAttribute('class');
    ar[nr] = 0;
    return 'Ukryj';
  } else {
    element.setAttribute('class', 'message');
    ar[nr] = 1;
    return 'Pokaż';
  }
}

/* Zad 5b
Dokument powinien zawierać jakiś napis powitalny, przycisk "pokaż" oraz sekcję div z jakąś zawartością (początkowo ukrytą). Kliknięcie w przycisk "pokaż" powinno na przemian odsłaniać i chować jej zawartość (zmieniaj również tekst na przycisku).

Zmodyfikuj poprzedni wariant, aby przyciski i sekcje działały jak karty/zakładki - tylko jedna sekcja może być w danym momencie widoczna, klikanie w przyciski odsłania jedną, ale ukrywa pozostałe.
*/

var allParagraph = document.querySelectorAll('div.contentB > *');
var btnShowB1 = document.getElementById('btnShowB1');
var btnShowB2 = document.getElementById('btnShowB2');
var btnShowB3 = document.getElementById('btnShowB3');
var messageB = document.getElementsByClassName('messageB');

var counterB = allParagraph.length;

var arrayB = [];
for (var i = 0; i < counterB; i += 1) {
  arrayB[i] = true; // tworzy każdej sekcji indywidualny "indeks" kliknięć
}

btnShowB1.addEventListener('click', function () {
  btnShowB1.innerHTML = showB(0);
});

btnShowB2.addEventListener('click', function () {
  btnShowB2.innerHTML = showB(1);
});

btnShowB3.addEventListener('click', function () {
  btnShowB3.innerHTML = showB(2);
});

function showB(nr) {

  if (arrayB[nr]) { // Jeśli jest zgaszony (arrayB[nr] = 1), to
    for (var i = 0; i < counterB; i += 1) {
      allParagraph[i].setAttribute('class', 'messageB');
      arrayB[i] = true;
    };
    allParagraph[nr].removeAttribute('class');
    arrayB[nr] = false;
    return 'Ukryj';
  }
  else { // (arrayB[nr] = 0)
    allParagraph[nr].setAttribute('class', 'messageB');
    arrayB[nr] = true;
    return 'Pokaż';
  }
}
