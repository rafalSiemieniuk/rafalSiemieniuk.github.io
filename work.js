// TWORZENIE TABELI

var tableSkills = document.getElementById('tableSkills');

var number = [];
for (var i = 0; i < number.length; i = + 1) {
  number[i] = i;
}

var firstRow = ['nr', 'skill', 'level'];
var firstRowLength = firstRow.length;
var skills = ['html', 'CSS', 'Java Script', 'Adobe Photoshop', 'AutoCAD', 'EWmapa', 'TurboMap','MySQL','QGIS'];
var skillsLength = skills.length;
var levels = ['3/5', '3/5', '2/5', '1/5', '3/5', '4/5', '4/5','2/5','2/5'];

var table = document.createElement("table");
// var caption = document.createElement("caption");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

// caption.textContent = 'Umiejętności';
// table.appendChild(caption);

table.border = "1";

var row = thead.insertRow(-1);
for (var k = 0; k < firstRowLength; k++) {
  var cell = row.insertCell(-1);
  cell.innerHTML = firstRow[k];
}

table.appendChild(thead);

for (var j = 0; j < skillsLength; j++) {
  row = tbody.insertRow(-1);
  for (var k = 0; k < firstRowLength; k++) {
    cell = row.insertCell(-1);
    if (k === 0) {
      cell.innerHTML = j + 1;
    }
    else if (k === 1) {
      cell.innerHTML = skills[j];
    }
    else if (k === 2) {
      cell.innerHTML = levels[j];
    }
    else {
      cell.innerHTML = 'button';
    }
  }
}

tableSkills.appendChild(table);
table.appendChild(tbody);

// ODSŁANIANIE FORMULARZA

var invisibilite = document.querySelector('.invisibilite');
var arrow = document.querySelector('.arrow');

console.log(invisibilite);
console.log(arrow);

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
