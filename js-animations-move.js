// Animations move

var menuHome = document.querySelector('.menu-home');
var menuExperience = document.querySelector('.menu-experience');
var menuSkills = document.querySelector('.menu-skills');
var menuHobby = document.querySelector('.menu-hobby');
var menuContact = document.querySelector('.menu-contact');

var rightPage = document.querySelector('.right-page');
var rightPageAll = document.querySelectorAll('.right-page');


var firstPage = document.querySelector('.first-page');
var leftPage = document.querySelector('.left-page');
var menuButtons = document.querySelector('.menu-buttons');
var menuButton = document.querySelectorAll('.menu-buttons-ul li button');

var arrayRightPage = Array.from(rightPageAll);
var arrayMenuButton = Array.from(menuButton);
var index

function removeAllActive(all) {
  return all.classList.remove('right-page-active');
}
function removeAllHidden(all) {
  return all.classList.remove('right-page-hidden');
}
function addAllHidden(all) {
  return all.classList.add('right-page-hidden');
}

function removeAllId(all) {
  return all.removeAttribute('id');
}

for (var i = 0; i < menuButton.length; ++i) {
  menuButton[i].addEventListener('click', function (event) {
    arrayMenuButton.map(removeAllId);
    event.target.setAttribute('id', 'join__button');
    menuHome.removeAttribute('id');
  });
}

function rightPageBtn(index) {
  arrayRightPage.map(removeAllActive);
  arrayRightPage.map(removeAllHidden);
  rightPageAll[index].classList.add('right-page-active');
  for (var i = 0; i < rightPageAll.length; i++) {
    if (i !== index) {
      arrayRightPage[i].classList.add('right-page-hidden');
    }
  }
  firstPage.classList.remove('first-page-active');
  firstPage.classList.add('first-page-hidden');
  leftPage.classList.add('left-page-active');
  leftPage.classList.remove('left-page-hidden');
  menuButtons.classList.add('menu-buttons-two-page');
  menuButtons.classList.remove('menu-buttons-one-page');

};

menuHome.addEventListener('click', function () {
  arrayRightPage.map(removeAllActive);
  arrayRightPage.map(addAllHidden);

  firstPage.classList.add('first-page-active');
  firstPage.classList.remove('first-page-hidden');

  leftPage.classList.remove('left-page-active');
  leftPage.classList.add('left-page-hidden');

  menuButtons.classList.remove('menu-buttons-two-page');
  menuButtons.classList.add('menu-buttons-one-page');
});

menuExperience.addEventListener('click', function () {
  rightPageBtn(0);
});

menuSkills.addEventListener('click', function () {
  rightPageBtn(1);
});

menuHobby.addEventListener('click', function () {
  rightPageBtn(2);
});

menuContact.addEventListener('click', function () {
  rightPageBtn(3);
});


console.log(window.innerWidth);
