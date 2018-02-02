// show the form

var invisibilite = document.querySelector('.invisibilite');
var arrow = document.querySelector('.arrow');

arrow.addEventListener('click', function (event) {

  if (event.target.classList.contains('fa-chevron-circle-down')) {
    invisibilite.classList.remove('invisibilite');
    event.target.setAttribute('title','Hide the form');
    event.target.classList.remove('fa-chevron-circle-down');
    event.target.classList.add('fa-chevron-circle-up');
  }
  else {
    invisibilite.classList.add('invisibilite');
    event.target.setAttribute('title','Show the form');
    event.target.classList.remove('fa-chevron-circle-up');
    event.target.classList.add('fa-chevron-circle-down');
  }
});
