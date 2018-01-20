// show the form

var invisibilite = document.querySelector('.invisibilite');
var arrow = document.querySelector('.arrow');

arrow.addEventListener('click', function () {

  if (event.target.classList.contains('fa-arrow-circle-down')) {
    invisibilite.removeAttribute('class');
    event.target.setAttribute('title','Ukryj formularz');
    event.target.classList.remove('fa-arrow-circle-down');
    event.target.classList.add('fa-arrow-circle-up');
  }
  else {
    invisibilite.classList.add('invisibilite');
    event.target.setAttribute('title','Pokaż formularz');
    event.target.classList.remove('fa-arrow-circle-up');
    event.target.classList.add('fa-arrow-circle-down');
  }
});
