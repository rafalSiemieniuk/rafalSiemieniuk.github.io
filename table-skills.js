// TWORZENIE TABELI

var tableSkills = document.getElementById('tableSkills');

var number = [];
for (var i = 0; i < number.length; i = + 1) {
  number[i] = i;
}

var firstRow = ['nr', 'skill', 'level'];
var firstRowLength = firstRow.length;
var skills = ['html', 'CSS', 'Java Script', 'Adobe Photoshop', 'AutoCAD', 'EWmapa', 'TurboMap', 'MySQL', 'QGIS'];
var skillsLength = skills.length;
var levels = [
  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>',

  '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>'
];

var table = document.createElement("table");
// var caption = document.createElement("caption");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

// caption.textContent = 'Umiejętności';
// table.appendChild(caption);

// table.border = "1";

var row = thead.insertRow(-1);
for (var k = 0; k < firstRowLength; k++) {
  var cell = row.insertCell(-1);
  cell.innerHTML = firstRow[k];
  cell.classList.add('table-cell');
  cell.classList.add('table-thead-cell');
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
    else {
      cell.innerHTML = levels[j];
      cell.classList.add('table-cell-level');
    }
    cell.classList.add('table-cell');
    row.classList.add('table-row');

    cell.addEventListener('mouseover', function (event) {
      mouseOver(event);
    });
    cell.addEventListener('mouseout', function (event) {
      mouseOut(event);
    });
  }
}

tableSkills.appendChild(table);
table.appendChild(tbody);

thead.classList.add('table-thead');
table.setAttribute('class', 'table-skills');


// function spaceStars() {
//   var tableLight = document.getElementsByClassName('table-light');
//   tableLightLength = tableLight.length;
//   for (var i = 0; i < tableLightLength; i += 1) {
//     tableLight[i].lastElementChild.classList.add('table-space-stars');
//   }
// }

function mouseOver(event) {
  var newy = event.target;
  neighborRow = newy.parentNode;
  if (newy.classList.contains('fa')) {
    neighborRow.parentNode.classList.add('table-light');
  }
  else {
    neighborRow.classList.add('table-light');
  }
  var tableLight = document.getElementsByClassName('table-light');
  tableLightLength = tableLight.length;
  for (var i = 0; i < tableLightLength; i += 1) {
    tableLight[i].lastElementChild.classList.add('table-space-stars');
  }
}

function mouseOut(event) {
  var newy = event.target;
  newy.classList.remove('table-light');
  var lightOut = document.getElementsByClassName('table-light');
  lightOutLength = lightOut.length;
  for (var i = 0; i < lightOutLength; i += 1) {
    lightOut[0].classList.remove('table-light');
  }
  var spaceStarsOut = document.getElementsByClassName('table-space-stars');
  spaceStarsOutLength = spaceStarsOut.length;
  for (var i = 0; i < spaceStarsOutLength; i += 1) {
    spaceStarsOut[0].classList.remove('table-space-stars');
  }
}
