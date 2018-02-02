var tableSkills = document.getElementById('tableSkills');

var firstRow = ['nr', 'skill', 'level'];
var firstRowLength = firstRow.length;

var skills = [{
  title: 'html',
  stars: 3.5,
}, {
  title: 'CSS',
  stars: 3.5,
}, {
  title: 'Java Script',
  stars: 3,
}, {
  title: 'Adobe Photoshop',
  stars: 2,
}, {
  title: 'AutoCAD',
  stars: 3.5,
}, {
  title: 'EWmapa',
  stars: 4,
}, {
  title: 'TurboMap',
  stars: 4,
}, {
  title: 'MySQL',
  stars: 2,
}, {
  title: 'QGIS',
  stars: 2.5,
}];

var table = document.createElement('table');
var tbody = document.createElement('tbody');
var thead = document.createElement('thead');

var row = thead.insertRow(-1);
for (var k = 0; k < firstRowLength; k++) {
  var th = document.createElement('th');
  thead.appendChild(th);
  th.innerHTML = firstRow[k];
}
table.appendChild(thead);


for (var i = 0; i < skills.length; i += 1) {
  var row = tbody.insertRow(-1);
  row.classList.add('row');
  var cells = [];
  var stars = [];

  for (var j = 0; j < 3; j += 1) {
    var cell = row.insertCell(-1);
    cells.push(cell);
  }

  cells[0].innerHTML = i + 1;
  cells[1].innerHTML = skills[i].title;

  for (var k = 0; k < 5; k += 1) {
    var star = document.createElement('i');
    if (k < (skills[i].stars - 0.5)) {
      star.classList.add('fa', 'fa-star');
    }
    else {
      if (skills[i].stars % 1 !== 0) {
        star.classList.add('fa', 'fa-star-half-o');
        skills[i].stars -= 0.5;
      }
      else {
        star.classList.add('fa', 'fa-star-o');
      }
    }
    cells[2].appendChild(star);
    cells[2].classList.add('table-cell-stars');
    stars.push(star);
  }
}

tableSkills.appendChild(table);
table.appendChild(tbody);

thead.classList.add('table-thead');
table.setAttribute('class', 'table-skills');

