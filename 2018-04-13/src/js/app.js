//////////TASK 1//////////

var task1__btn = document.getElementsByClassName('task-1__btn')[0];
var task1__catReaction = document.getElementsByClassName('task-1__cat-reaction')[0];
var task1__input = document.getElementsByClassName('task-1__input')[0];

class Cat {
	constructor() {
		this.lastStroke = null;
		this.body = {
			back: 'po grzbiecie',
			mouth: 'po pyszczku',
			ear: 'za uchem',
		};
	}
	stroke(where) {
		var isPurr = Object.values(this.body).includes(where);
		if (isPurr && this.lastStroke != where) {
			this.lastStroke = where;
			return 'Mrrrrrr';
		}
		this.lastStroke = null;
		return 'Prych';
	}
}

var mruczek = new Cat;

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

class Questionnaire {
	constructor() {
		this.yes = 0;
		this.no = 0;
		this.render();
	}
	render() {
		task2__total.textContent = ' ' + (this.yes + this.no);
		task2__procentYes.textContent = ` ${parseInt((this.yes / (this.yes + this.no)) * 100) || 0} %`;
		task2__procentNo.textContent = ` ${parseInt((this.no / (this.yes + this.no)) * 100) || 0} %`;
	}
	clickYes() {
		this.yes++;
		this.render();
	}
	clickNo() {
		this.no++;
		this.render();
	}
}

var tvSurvey = new Questionnaire;

task2__btn.addEventListener('click', function () {
	if (task2__yes.checked) {
		tvSurvey.clickYes();
	}
	else if (task2__no.checked) {
		tvSurvey.clickNo();
	}
	else {
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

class CoffeeMachine {
	constructor(priceLargeCoffee, priceSmallCoffee, priceMilk, priceSugar) {
		this.priceLargeCoffee = priceLargeCoffee || 7;
		this.priceSmallCoffee = priceSmallCoffee || 5;
		this.priceMilk = priceMilk || 2;
		this.priceSugar = priceSugar || 1;

		this.coffe = 30;
		this.milk = 5;
		this.sugar = 10;

		this.results();
	}
	results() {
		this.ar = [this.coffe, this.milk, this.sugar, this.priceLargeCoffee, this.priceSmallCoffee, this.priceMilk, this.priceSugar];
		for (var i = 0; i < task3__data.length; i++) {
			task3__data[i].textContent = this.ar[i];
		}
	}
	orderCoffee(textSize, priceSize, amountSize) {
		if (this.coffe < amountSize || this.milk < (task3__inputOrderMilk.value || 1) || this.sugar < (task3__inputOrderSugar.value || 1)) {
			return task3__results.textContent = 'Niepowodzenie tranzakcji, za mało składników';
		}
		task3__results.textContent = `Zamówiono ${textSize} kawę, należność: ${priceSize + this.priceMilk * (task3__inputOrderMilk.value || 1) + this.priceSugar * (task3__inputOrderSugar.value || 1)} zł`;
		this.coffe = this.coffe - amountSize;
		this.milk = this.milk - (task3__inputOrderMilk.value || 1);
		this.sugar = this.sugar - (task3__inputOrderSugar.value || 1);
		this.results();
	}
	addComponents() {
		this.coffe = this.coffe + (isNaN(parseInt(task3__add[0].value)) ? 0 : parseInt(task3__add[0].value));
		this.milk = this.milk + (isNaN(parseInt(task3__add[1].value)) ? 0 : parseInt(task3__add[1].value));
		this.sugar = this.sugar + (isNaN(parseInt(task3__add[2].value)) ? 0 : parseInt(task3__add[2].value));
		this.results();
	}
}

var saecoIncanto = new CoffeeMachine;

task3__btnOrder.addEventListener('click', function () {
	if (task3__largeCoffee.checked) {
		saecoIncanto.orderCoffee('dużą', saecoIncanto.priceLargeCoffee, 15);
	}
	else if (task3__smallCoffee.checked) {
		saecoIncanto.orderCoffee('małą', saecoIncanto.priceSmallCoffee, 6);
	}
	else {
		alert('Wybierz kawę!');
	}
});
task3__btnAdd.addEventListener('click', function () {
	saecoIncanto.addComponents()
});


//////////TASK 4//////////

const task4__gradeBookTable = document.getElementsByClassName('task-4__gradeBookTable')[0]
const task4__inputAddSubject = document.getElementsByClassName('task-4__input-add-subject')[0]
const task4__btnAddSubject = document.getElementsByClassName('task-4__btn-add-subject')[0]

class GradeBook {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
		this.subjects = [];
	}
	addSubject(newSubject) {
		if (newSubject) {
			const subject = new Subject(newSubject)
			this.subjects.push(subject);
		}	
		else {
			alert('To pole nie może być puste');
		}

	}
	createTable() {
		const lenCol = [];
		for (var i = 0, n = this.subjects.length; i < n; i++) {
			lenCol.push(this.subjects[i].grades.length);
		}
		const column = lenCol.sort((a, b) => a <= b)[0];
		const table = document.createElement('table');
		const tbody = document.createElement('tbody');
		const thead = document.createElement('thead');
		const th = document.createElement('th');
		thead.appendChild(th);
		table.appendChild(thead);
		table.border = '1';
		task4__gradeBookTable.innerHTML = '';
		th.innerHTML = 'Dziennik ucznia: ' + '<br>' + this.name + ' ' + this.surname;
		for (var j = 0, n = this.subjects.length; j < n; j++) {
			const row = table.insertRow(-1);
			const cells = [];

			for (var k = 0; k < ((column + 2) || 1); k++) {
				const cell = row.insertCell(-1);
				cells.push(cell);

				if (k === column + 1) {
					this.createInputs(cell, j);
				}

				const onlyGrade = this.subjects[j].grades[k - 1];
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

	createInputs(cell, j) {
		const inputText = document.createElement('input');
		inputText.setAttribute('type', 'text');
		inputText.setAttribute('placeholder', 'Wpisz ocenę');
		inputText.classList.add('task-4__input-text');
		cell.appendChild(inputText);
		const inputDate = document.createElement('input');
		inputDate.setAttribute('type', 'date');
		inputDate.classList.add('task-4__input-date');
		cell.appendChild(inputDate);
		const btnAddGrade = document.createElement('button');
		btnAddGrade.classList.add('task-4__btn-add-grade');
		btnAddGrade.setAttribute('id', j);
		btnAddGrade.textContent = '+';
		cell.appendChild(btnAddGrade);
	}
}

class Subject {
	constructor(nameSubject) {
		this.nameSubject = nameSubject;
		this.grades = [];
		this.requiredGrades = [2, 3, 3.5, 4, 4.5, 5];
	}
	addGrade(newGrade, date) {
		const mark = this.requiredGrades.includes(newGrade);
		if (mark && date) {
			this.grades.push({ newGrade, date });
		}
		else {
			alert('Niewłaściwa ocena lub data!');
		}
	}
}

const rafal = new GradeBook('Rafal', 'Siemieniuk');

rafal.addSubject('Matematyka');
rafal.addSubject('Angielski');
rafal.addSubject('Polski');

rafal.subjects[0].addGrade(2, '2018-05-01');
rafal.subjects[0].addGrade(3.5, '2018-05-02');
rafal.subjects[0].addGrade(3, '2018-05-03');
rafal.subjects[0].addGrade(3.5, '2018-05-04');
rafal.subjects[0].addGrade(4.5, '2018-05-05');
rafal.subjects[1].addGrade(5, '2018-05-06');
rafal.subjects[1].addGrade(4.5, '2018-05-07');
rafal.subjects[2].addGrade(2, '2018-05-08');
rafal.subjects[2].addGrade(3, '2018-05-09');
rafal.subjects[2].addGrade(4, '2018-05-10');
rafal.subjects[2].addGrade(5, '2018-05-11');

rafal.createTable();

render();

task4__btnAddSubject.addEventListener('click', function () {
	rafal.addSubject(task4__inputAddSubject.value);
	rafal.createTable();
	render();
});

function render() {
	const task4__inputText = document.getElementsByClassName('task-4__input-text');
	const task4__inputDate = document.getElementsByClassName('task-4__input-date');
	const task4__btnAddGrade = document.getElementsByClassName('task-4__btn-add-grade');
	const task4__cellDate = document.getElementsByClassName('task-4__cell-date');
	const task4__div = document.createElement('div');
	var table = document.getElementById('table'), rIndex, cIndex;

	for (var i = 0, n = task4__btnAddGrade.length; i < n; i++) {
		task4__btnAddGrade[i].addEventListener('click', function () {
			rafal.subjects[this.id].addGrade(parseInt(task4__inputText[this.id].value), task4__inputDate[this.id].value);
			rafal.createTable();
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
					task4__div.textContent = 'data: ' + rafal.subjects[rIndex].grades[cIndex - 2].date;
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

