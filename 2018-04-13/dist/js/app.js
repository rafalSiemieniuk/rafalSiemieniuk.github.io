'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//////////TASK 1//////////

var task1__btn = document.getElementsByClassName('task-1__btn')[0];
var task1__catReaction = document.getElementsByClassName('task-1__cat-reaction')[0];
var task1__input = document.getElementsByClassName('task-1__input')[0];

var Cat = function () {
	function Cat() {
		_classCallCheck(this, Cat);

		this.lastStroke = null;
		this.body = {
			back: 'po grzbiecie',
			mouth: 'po pyszczku',
			ear: 'za uchem'
		};
	}

	_createClass(Cat, [{
		key: 'stroke',
		value: function stroke(where) {
			var isPurr = Object.values(this.body).includes(where);
			if (isPurr && this.lastStroke != where) {
				this.lastStroke = where;
				return 'Mrrrrrr';
			}
			this.lastStroke = null;
			return 'Prych';
		}
	}]);

	return Cat;
}();

var mruczek = new Cat();

task1__btn.addEventListener('click', function () {
	var strokeValue = task1__input.value.toLowerCase();
	var reaction = mruczek.stroke(strokeValue);
	task1__catReaction.innerHTML = reaction;
});

//////////TASK 2//////////

var task2__btn = document.getElementsByClassName('task-2__btn')[0];
var task2__total = document.getElementsByClassName('task-2__total')[0];
var task2__procentYes = document.getElementsByClassName('task-2__procent-yes')[0];
var task2__procentNo = document.getElementsByClassName('task-2__procent-no')[0];
var task2__yes = document.getElementById('task-2__yes');
var task2__no = document.getElementById('task-2__no');

var Questionnaire = function () {
	function Questionnaire() {
		_classCallCheck(this, Questionnaire);

		this.yes = 0;
		this.no = 0;
		this.render();
	}

	_createClass(Questionnaire, [{
		key: 'render',
		value: function render() {
			task2__total.textContent = ' ' + (this.yes + this.no);
			task2__procentYes.textContent = ' ' + (parseInt(this.yes / (this.yes + this.no) * 100) || 0) + ' %';
			task2__procentNo.textContent = ' ' + (parseInt(this.no / (this.yes + this.no) * 100) || 0) + ' %';
		}
	}, {
		key: 'clickYes',
		value: function clickYes() {
			this.yes++;
			this.render();
		}
	}, {
		key: 'clickNo',
		value: function clickNo() {
			this.no++;
			this.render();
		}
	}]);

	return Questionnaire;
}();

var tvSurvey = new Questionnaire();

task2__btn.addEventListener('click', function () {
	if (task2__yes.checked) {
		tvSurvey.clickYes();
	} else if (task2__no.checked) {
		tvSurvey.clickNo();
	} else {
		alert('Zaznacz odpowiedź!');
	}
});

//////////TASK 3//////////

var task3__btnOrder = document.getElementsByClassName('task-3__btn-order')[0];
var task3__btnAdd = document.getElementsByClassName('task-3__btn-add')[0];
var task3__inputOrderMilk = document.getElementsByClassName('task-3__input-order-milk')[0];
var task3__inputOrderSugar = document.getElementsByClassName('task-3__input-order-sugar')[0];

var task3__largeCoffee = document.getElementById('task-3__large-coffee');
var task3__smallCoffee = document.getElementById('task-3__small-coffee');

var task3__results = document.getElementsByClassName('task-3__results')[0];

var task3__data = document.getElementsByClassName('task-3__data');
var task3__add = document.getElementsByClassName('task-3__input-add');

var CoffeeMachine = function () {
	function CoffeeMachine(priceLargeCoffee, priceSmallCoffee, priceMilk, priceSugar) {
		_classCallCheck(this, CoffeeMachine);

		this.priceLargeCoffee = priceLargeCoffee || 7;
		this.priceSmallCoffee = priceSmallCoffee || 5;
		this.priceMilk = priceMilk || 2;
		this.priceSugar = priceSugar || 1;

		this.coffe = 30;
		this.milk = 5;
		this.sugar = 10;

		this.results();
	}

	_createClass(CoffeeMachine, [{
		key: 'results',
		value: function results() {
			this.ar = [this.coffe, this.milk, this.sugar, this.priceLargeCoffee, this.priceSmallCoffee, this.priceMilk, this.priceSugar];
			for (var i = 0; i < task3__data.length; i++) {
				task3__data[i].textContent = this.ar[i];
			}
		}
	}, {
		key: 'orderCoffee',
		value: function orderCoffee(textSize, priceSize, amountSize) {
			if (this.coffe < amountSize || this.milk < (task3__inputOrderMilk.value || 1) || this.sugar < (task3__inputOrderSugar.value || 1)) {
				return task3__results.textContent = 'Niepowodzenie tranzakcji, za mało składników';
			}
			task3__results.textContent = 'Zam\xF3wiono ' + textSize + ' kaw\u0119, nale\u017Cno\u015B\u0107: ' + (priceSize + this.priceMilk * (task3__inputOrderMilk.value || 1) + this.priceSugar * (task3__inputOrderSugar.value || 1)) + ' z\u0142';
			this.coffe = this.coffe - amountSize;
			this.milk = this.milk - (task3__inputOrderMilk.value || 1);
			this.sugar = this.sugar - (task3__inputOrderSugar.value || 1);
			this.results();
		}
	}, {
		key: 'addComponents',
		value: function addComponents() {
			this.coffe = this.coffe + (isNaN(parseInt(task3__add[0].value)) ? 0 : parseInt(task3__add[0].value));
			this.milk = this.milk + (isNaN(parseInt(task3__add[1].value)) ? 0 : parseInt(task3__add[1].value));
			this.sugar = this.sugar + (isNaN(parseInt(task3__add[2].value)) ? 0 : parseInt(task3__add[2].value));
			this.results();
		}
	}]);

	return CoffeeMachine;
}();

var saecoIncanto = new CoffeeMachine();

task3__btnOrder.addEventListener('click', function () {
	if (task3__largeCoffee.checked) {
		saecoIncanto.orderCoffee('dużą', saecoIncanto.priceLargeCoffee, 15);
	} else if (task3__smallCoffee.checked) {
		saecoIncanto.orderCoffee('małą', saecoIncanto.priceSmallCoffee, 6);
	} else {
		alert('Wybierz kawę!');
	}
});
task3__btnAdd.addEventListener('click', function () {
	saecoIncanto.addComponents();
});

//////////TASK 4//////////

var task4__gradeBookTable = document.getElementsByClassName('task-4__gradeBookTable')[0];
var task4__inputAddSubject = document.getElementsByClassName('task-4__input-add-subject')[0];
var task4__btnAddSubject = document.getElementsByClassName('task-4__btn-add-subject')[0];

var GradeBook = function () {
	function GradeBook(name, surname) {
		_classCallCheck(this, GradeBook);

		this.name = name;
		this.surname = surname;
		this.subjects = [];
	}

	_createClass(GradeBook, [{
		key: 'addSubject',
		value: function addSubject(newSubject) {
			if (newSubject) {
				var subject = new Subject(newSubject);
				this.subjects.push(subject);
			} else {
				alert('To pole nie może być puste');
			}
		}
	}, {
		key: 'createTable',
		value: function createTable() {
			var lenCol = [];
			for (var i = 0, n = this.subjects.length; i < n; i++) {
				lenCol.push(this.subjects[i].grades.length);
			}
			var column = lenCol.sort(function (a, b) {
				return a <= b;
			})[0];
			var table = document.createElement('table');
			var tbody = document.createElement('tbody');
			var thead = document.createElement('thead');
			var th = document.createElement('th');
			thead.appendChild(th);
			table.appendChild(thead);
			table.border = '1';
			task4__gradeBookTable.innerHTML = '';
			th.innerHTML = 'Dziennik ucznia: ' + '<br>' + this.name + ' ' + this.surname;
			for (var j = 0, n = this.subjects.length; j < n; j++) {
				var row = table.insertRow(-1);
				var cells = [];

				for (var k = 0; k < (column + 2 || 1); k++) {
					var cell = row.insertCell(-1);
					cells.push(cell);

					if (k === column + 1) {
						this.createInputs(cell, j);
					}

					var onlyGrade = this.subjects[j].grades[k - 1];
					if (onlyGrade) {
						onlyGrade.newGrade;
						cells[k].textContent = onlyGrade.newGrade;
						cells[k].classList.add('task-4__cell-date');
					}
				}
				cells[0].textContent = this.subjects[j].nameSubject;
			}
			task4__gradeBookTable.appendChild(table);
			table.setAttribute('id', 'table');
		}
	}, {
		key: 'createInputs',
		value: function createInputs(cell, j) {
			var inputText = document.createElement('input');
			inputText.setAttribute('type', 'text');
			inputText.setAttribute('placeholder', 'Wpisz ocenę');
			inputText.classList.add('task-4__input-text');
			cell.appendChild(inputText);
			var inputDate = document.createElement('input');
			inputDate.setAttribute('type', 'date');
			inputDate.classList.add('task-4__input-date');
			cell.appendChild(inputDate);
			var btnAddGrade = document.createElement('button');
			btnAddGrade.classList.add('task-4__btn-add-grade');
			btnAddGrade.setAttribute('id', j);
			btnAddGrade.textContent = '+';
			cell.appendChild(btnAddGrade);
		}
	}]);

	return GradeBook;
}();

var Subject = function () {
	function Subject(nameSubject) {
		_classCallCheck(this, Subject);

		this.nameSubject = nameSubject;
		this.grades = [];
		this.requiredGrades = [2, 3, 3.5, 4, 4.5, 5];
	}

	_createClass(Subject, [{
		key: 'addGrade',
		value: function addGrade(newGrade, date) {
			var mark = this.requiredGrades.includes(newGrade);
			if (mark && date) {
				this.grades.push({ newGrade: newGrade, date: date });
			} else {
				alert('Niewłaściwa ocena lub data!');
			}
		}
	}]);

	return Subject;
}();

var jan = new GradeBook('Jan', 'Kowalski');

jan.addSubject('Matematyka');
jan.addSubject('Angielski');
jan.addSubject('Polski');

jan.subjects[0].addGrade(2, '2018-05-01');
jan.subjects[0].addGrade(3.5, '2018-05-02');
jan.subjects[0].addGrade(3, '2018-05-03');
jan.subjects[0].addGrade(3.5, '2018-05-04');
jan.subjects[0].addGrade(4.5, '2018-05-05');
jan.subjects[1].addGrade(5, '2018-05-06');
jan.subjects[1].addGrade(4.5, '2018-05-07');
jan.subjects[2].addGrade(2, '2018-05-08');
jan.subjects[2].addGrade(3, '2018-05-09');
jan.subjects[2].addGrade(4, '2018-05-10');
jan.subjects[2].addGrade(5, '2018-05-11');

jan.createTable();

render();

task4__btnAddSubject.addEventListener('click', function () {
	jan.addSubject(task4__inputAddSubject.value);
	jan.createTable();
	render();
});

function render() {
	var task4__inputText = document.getElementsByClassName('task-4__input-text');
	var task4__inputDate = document.getElementsByClassName('task-4__input-date');
	var task4__btnAddGrade = document.getElementsByClassName('task-4__btn-add-grade');
	var task4__cellDate = document.getElementsByClassName('task-4__cell-date');
	var task4__div = document.createElement('div');
	var table = document.getElementById('table'),
	    rIndex,
	    cIndex;

	for (var i = 0, n = task4__btnAddGrade.length; i < n; i++) {
		task4__btnAddGrade[i].addEventListener('click', function () {
			jan.subjects[this.id].addGrade(parseInt(task4__inputText[this.id].value), task4__inputDate[this.id].value);
			jan.createTable();
			render();
		});
	}

	for (var i = 0; i < table.rows.length; i++) {
		for (var j = 0; j < table.rows[i].cells.length; j++) {
			table.rows[i].cells[j].onmouseover = function () {
				rIndex = this.parentElement.rowIndex;
				cIndex = this.cellIndex + 1;
				if (this.classList.contains('task-4__cell-date')) {
					task4__div.classList.add('red-cell');
					task4__div.textContent = 'data: ' + jan.subjects[rIndex].grades[cIndex - 2].date;
					this.appendChild(task4__div);
				}
			};
			table.rows[i].cells[j].addEventListener('mouseout', function () {
				if (this.classList.contains('task-4__cell-date')) {
					task4__div.parentNode.removeChild(task4__div);
				}
			});
		}
	}
}
//# sourceMappingURL=app.js.map