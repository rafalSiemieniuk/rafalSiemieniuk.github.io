var tableSkills = document.getElementById('tableSkills');

var firstRow = ['nr', 'skill', 'level'];
var firstRowLength = firstRow.length;

var skills = [{
  title: 'html',
  stars: 4.5,
}, {
  title: 'CSS',
  stars: 4.5,
}, {
  title: 'Java Script (ES6)',
  stars: 3.5,
}, {
  title: 'Sass',
  stars: 4,
}, {
  title: 'Less',
  stars: 2.5,
}, {
  title: 'RWD, Bootstrap 4',
  stars: 3,
}, {
  title: 'GiT',
  stars: 3,
}, {
  title: 'Photoshop',
  stars: 2.5,
}, {
  title: 'MySQL',
  stars: 1.5,
}, {
  title: 'jQuery',
  stars: 2,
}, {
  title: 'Angular 2',
  stars: 1,
}];

var table = document.createElement('table');
var tbody = document.createElement('tbody');
var thead = document.createElement('thead');


for (var k = 0; k < firstRowLength; k++) {                 // create thead row
  var th = document.createElement('th');
  thead.appendChild(th);
  th.innerHTML = firstRow[k];
}
table.appendChild(thead);


for (var i = 0; i < skills.length; i += 1, j++) {          // create table
  var row = tbody.insertRow(-1);
  row.classList.add('row');
  var cells = [];

  for (var j = 0; j < 3; j += 1) {
    var cell = row.insertCell(-1);
    cells.push(cell);
  }

  cells[0].innerHTML = i + 1;
  cells[1].innerHTML = skills[i].title;

  /*part of the sorting function */
  var span = document.createElement('span');
  span.classList.add('special');
  span.innerHTML = skills[i].stars;
  cells[2].appendChild(span);
  /* end */

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
  }
}

tableSkills.appendChild(table);
table.appendChild(tbody);

thead.classList.add('table-thead');
table.setAttribute('class', 'table-skills');


// SORT TABLE

var ths = document.getElementsByTagName('th');

for (var i = 0; i < ths.length; i += 1) {
  ths[i].addEventListener('click', function () {
    if (this.textContent === 'nr') {
      sorting(tbody, 0);
    }
    else if (this.textContent === 'skill') {
      sorting(tbody, 1);
    }
    else {
      sorting(tbody, 2);
    }
  });
}

var index;
var toggleBool;
function sorting(tbody, columnNumber) {
  index = columnNumber;
  if (toggleBool) {
    toggleBool = false;
  } else {
    toggleBool = true;
  }

  var datas = [];
  var tbodyLength = tbody.rows.length;
  for (var i = 0; i < tbodyLength; i++) {
    datas[i] = tbody.rows[i];
  }

  datas.sort(compareCells);
  for (var i = 0; i < tbody.rows.length; i++) {
    tbody.appendChild(datas[i]);
  }
}

function compareCells(a, b) {
  var aVal = a.cells[index].innerText;
  var bVal = b.cells[index].innerText;

  aVal = aVal.replace(/\,/g, '');
  bVal = bVal.replace(/\,/g, '');

  if (toggleBool) {
    var temp = aVal;
    aVal = bVal;
    bVal = temp;
  }

  if (aVal.match(/^[0-9]+$/) && bVal.match(/^[0-9]+$/)) {
    return parseFloat(aVal) - parseFloat(bVal);
  }
  else {
    if (aVal < bVal) {
      return -1;
    } else if (aVal > bVal) {
      return 1;
    } else {
      return 0;
    }
  }
}