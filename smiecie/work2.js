// Animations move

var menuHome = document.querySelector('.menu-home');
var menuExperience = document.querySelector('.menu-experience');
var menuSkills = document.querySelector('.menu-skills');
var menuHobby = document.querySelector('.menu-hobby');
var menuContact = document.querySelector('.menu-contact');

var rightPageHidden = document.querySelector('.right-page-hidden');
var rightPageHiddenAll = document.querySelectorAll('.right-page-hidden');


var firstPage = document.querySelector('.first-page');
var leftPageHidden = document.querySelector('.left-page-hidden');
var menuButtons = document.querySelector('.menu-buttons');
// var menuButtonsOne = document.querySelector('.menu-buttons-one-page');
var menuButtonsTwo = document.querySelector('.menu-buttons-two-page');

var arrayRightPage = Array.from(rightPageHiddenAll);
var index

function removeAllClass(all) {
  return all.removeAttribute('class');
}
function addHiddenClass(all) {
  return all.classList.add('right-page-hidden');
}

menuHome.addEventListener('click', function () {
  arrayRightPage.map(removeAllClass);
  arrayRightPage.map(addHiddenClass);

  firstPage.classList.add('active-right');

  leftPageHidden.removeAttribute('class');
  leftPageHidden.classList.add('left-page-hidden');

  menuButtons.classList.remove('menu-buttons-two-page');
  menuButtons.classList.add('active-right');
});

menuExperience.addEventListener('click', function () {
  index = 0;
  arrayRightPage.map(removeAllClass);
  for (var i = 0; i < rightPageHiddenAll.length; i++) {
    if (i !== index) {
      arrayRightPage[i].classList.add('right-page-hidden');
    }
  }
  firstPage.classList.remove('active-right');

  rightPageHiddenAll[index].classList.add('right-page-experience');

  leftPageHidden.removeAttribute('class');
  leftPageHidden.classList.add('left-page-active');

  menuButtons.classList.add('menu-buttons-two-page');
  menuButtons.classList.remove('active-right');

});

menuSkills.addEventListener('click', function () {
  index = 1;
  arrayRightPage.map(removeAllClass);
  for (var i = 0; i < rightPageHiddenAll.length; i++) {
    if (i !== index) {
      arrayRightPage[i].classList.add('right-page-hidden');
    }
  }
  firstPage.classList.remove('active-right');

  rightPageHiddenAll[index].classList.add('right-page-skills');

  leftPageHidden.removeAttribute('class');
  leftPageHidden.classList.add('left-page-active');

  menuButtons.classList.add('menu-buttons-two-page');
  menuButtons.classList.remove('active-right');
});

menuHobby.addEventListener('click', function () {
  index = 2;
  arrayRightPage.map(removeAllClass);
  for (var i = 0; i < rightPageHiddenAll.length; i++) {
    if (i !== index) {
      arrayRightPage[i].classList.add('right-page-hidden');
    }
  }
  firstPage.classList.remove('active-right');

  rightPageHiddenAll[index].classList.add('right-page-hobby');

  leftPageHidden.removeAttribute('class');
  leftPageHidden.classList.add('left-page-active');

  menuButtons.classList.add('menu-buttons-two-page');
  menuButtons.classList.remove('active-right');
});

menuContact.addEventListener('click', function () {
  index = 3;
  arrayRightPage.map(removeAllClass);
  for (var i = 0; i < rightPageHiddenAll.length; i++) {
    if (i !== index) {
      arrayRightPage[i].classList.add('right-page-hidden');
    }
  }
  firstPage.classList.remove('active-right');

  rightPageHiddenAll[index].classList.add('right-page-contact');

  leftPageHidden.removeAttribute('class');
  leftPageHidden.classList.add('left-page-active');

  menuButtons.classList.add('menu-buttons-two-page');
  menuButtons.classList.remove('active-right');
});



