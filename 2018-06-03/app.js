'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var popupEdit = document.getElementById('popupEdit');
var editBook = document.getElementById('editBook');
var cancelEditBook = document.getElementById('cancelEditBook');
var editBookTitle = document.getElementById('editBookTitle');
var editBookAuthor = document.getElementById('editBookAuthor');
var editBookUrl = document.getElementById('editBookUrl');
var popupChapterEdit = document.getElementById('popupChapterEdit');
var editChapterName = document.getElementById('editChapterName');
var editChapterPage = document.getElementById('editChapterPage');
var editChapter = document.getElementById('editChapter');
var cancelEditChapter = document.getElementById('cancelEditChapter');
var errorField = document.getElementsByClassName('error-field');

var Book = function () {
    function Book(description) {
        _classCallCheck(this, Book);

        this.booksContainer = document.getElementById('booksContainer');
        this.container = document.createElement('div');
        this.description = new DescriptionBook(description);
        this.actions = new ActionsBook();
        this.chapters = new ChaptersBook();
        this.init();
    }

    _createClass(Book, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.booksContainer.appendChild(this.container);
            this.container.appendChild(this.description.container);
            this.container.appendChild(this.actions.container);
            this.container.appendChild(this.chapters.container);

            this.actions.edit.onclick = function () {
                _this.onEditClick();
            };
            this.actions.delete.onclick = function () {
                _this.onDeleteClick();
            };
            this.container.classList.add('book', 'clear');
        }
    }, {
        key: 'onEditClick',
        value: function onEditClick() {
            var _this2 = this;

            editBookTitle.value = this.description.title;
            editBookAuthor.value = this.description.author;
            editBookUrl.value = this.description.url;
            popupEdit.classList.remove('popup--hide');

            editBook.onclick = function () {
                if (validatePopup(errorField[errorField.length - 2], editBookTitle, editBookAuthor, editBookUrl)) {
                    return;
                }
                _this2.description.title = editBookTitle.value;
                _this2.description.author = editBookAuthor.value;
                _this2.description.url = editBookUrl.value;
                _this2.description.init();
                popupEdit.classList.add('popup--hide');
            };

            cancelEditBook.onclick = function () {
                clearInputValidate(errorField[errorField.length - 2], editBookTitle, editBookAuthor, editBookUrl);
                popupEdit.classList.add('popup--hide');
            };
        }
    }, {
        key: 'onDeleteClick',
        value: function onDeleteClick() {
            this.container.remove();
        }
    }]);

    return Book;
}();

;

var DescriptionBook = function () {
    function DescriptionBook(_ref) {
        var title = _ref.title,
            author = _ref.author,
            url = _ref.url;

        _classCallCheck(this, DescriptionBook);

        this.title = title;
        this.author = author;
        this.url = url;
        this.container = document.createElement('div');
        this.init();
    }

    _createClass(DescriptionBook, [{
        key: 'init',
        value: function init() {
            var template = '\n            <h2>' + this.title + '</2h>\n            <h3>' + this.author + '</h3>\n            <img src="' + this.url + '">\n        ';
            this.container.innerHTML = template;
            this.container.classList.add('left-page');
        }
    }]);

    return DescriptionBook;
}();

var ActionsBook = function () {
    function ActionsBook() {
        _classCallCheck(this, ActionsBook);

        this.container = document.createElement('div');
        this.edit = document.createElement('button');
        this.delete = document.createElement('button');
        this.init();
    }

    _createClass(ActionsBook, [{
        key: 'init',
        value: function init() {
            this.edit.innerHTML = '<i class="fas fa-edit"></i>';
            this.delete.innerHTML = '<i class="fas fa-trash"></i>';
            this.container.appendChild(this.edit);
            this.container.appendChild(this.delete);
            this.container.classList.add('action-buttons');
        }
    }]);

    return ActionsBook;
}();

var ChaptersBook = function () {
    function ChaptersBook() {
        _classCallCheck(this, ChaptersBook);

        this.container = document.createElement('div');
        this.tableContents = document.createElement('h3');
        this.chaptersContainer = document.createElement('ol');
        this.inputName = document.createElement('input');
        this.inputPage = document.createElement('input');
        this.addButton = document.createElement('button');
        this.errorField = document.createElement('div');

        this.chapters = [];
        this.init();
    }

    _createClass(ChaptersBook, [{
        key: 'init',
        value: function init() {
            var _this3 = this;

            this.container.appendChild(this.tableContents);
            this.tableContents.textContent = 'Table of Contents';
            this.container.appendChild(this.chaptersContainer);
            this.container.appendChild(this.inputName);
            this.container.appendChild(this.inputPage);
            this.container.appendChild(this.addButton);
            this.container.appendChild(this.errorField);
            this.errorField.classList.add('error-field');
            this.addButton.innerHTML = '<i class="fas fa-plus"></i>';
            this.inputName.setAttribute('placeholder', 'Add chapter name');
            this.inputPage.setAttribute('placeholder', 'Add chapter page');
            this.addButton.addEventListener('click', function () {
                _this3.addChapter();
            });
            this.container.classList.add('right-page');
        }
    }, {
        key: 'addChapter',
        value: function addChapter() {
            var options = {
                name: this.inputName.value,
                page: this.inputPage.value
            };
            if (validateChapter(this.errorField, this.inputName, this.inputPage)) {
                return;
            }
            var chapter = new Chapter(options);
            this.chapters.push(chapter);
            this.chaptersContainer.appendChild(chapter.container);
        }
    }]);

    return ChaptersBook;
}();

var Chapter = function () {
    function Chapter(_ref2) {
        var name = _ref2.name,
            page = _ref2.page;

        _classCallCheck(this, Chapter);

        this.container = document.createElement('li');
        this.nameChapter = document.createElement('span');
        this.pageChapter = document.createElement('span');
        this.edit = document.createElement('button');
        this.delate = document.createElement('button');
        this.name = name;
        this.page = page;
        this.init();
    }

    _createClass(Chapter, [{
        key: 'init',
        value: function init() {
            var _this4 = this;

            this.container.appendChild(this.delate);
            this.container.appendChild(this.edit);
            this.container.appendChild(this.nameChapter);
            this.container.appendChild(this.pageChapter);
            this.nameChapter.classList.add('nameChapter');
            this.pageChapter.classList.add('pageChapter');
            this.edit.innerHTML = '<i class="fas fa-edit"></i>';
            this.delate.innerHTML = '<i class="fas fa-trash"></i>';
            this.renderDescription();

            this.edit.onclick = function () {
                _this4.onEditClick();
            };
            this.delate.onclick = function () {
                _this4.onDeleteClick();
            };
        }
    }, {
        key: 'renderDescription',
        value: function renderDescription() {
            var templateName = '' + this.name;
            var templatePage = '' + this.page;
            this.nameChapter.innerHTML = templateName;
            this.pageChapter.innerHTML = templatePage;
        }
    }, {
        key: 'onEditClick',
        value: function onEditClick() {
            var _this5 = this;

            editChapterName.value = this.name;
            editChapterPage.value = this.page;
            popupChapterEdit.classList.remove('popup--hide');

            editChapter.onclick = function () {
                if (validateChapter(errorField[errorField.length - 1], editChapterName, editChapterPage)) {
                    return;
                }
                _this5.name = editChapterName.value;
                _this5.page = editChapterPage.value;
                _this5.init();
                popupChapterEdit.classList.add('popup--hide');
            };

            cancelEditChapter.onclick = function () {
                clearInputValidate(errorField[errorField.length - 1], editChapterName, editChapterPage);
                popupChapterEdit.classList.add('popup--hide');
            };
        }
    }, {
        key: 'onDeleteClick',
        value: function onDeleteClick() {
            this.container.remove();
        }
    }]);

    return Chapter;
}();

function validateChapter(handle, name, page) {
    if (name.value == 0 && isNaN(parseInt(page.value))) {
        name.style.background = 'Red';
        page.style.background = 'Red';
        handle.textContent = 'The required field has not been filled in';
        return true;
    } else if (name.value == 0) {
        page.style.background = 'White';
        name.style.background = 'Red';
        handle.textContent = 'The required field has not been filled in';
        return true;
    } else if (isNaN(parseInt(page.value))) {
        name.style.background = 'White';
        page.style.background = 'Red';
        handle.textContent = 'Please enter a page number';
        return true;
    } else {
        name.style.background = 'White';
        page.style.background = 'White';
        handle.textContent = '';
        return false;
    }
}

function validatePopup(handle, field1, field2, field3) {
    var arrayField = [field1, field2, field3];
    var arrayEmptyField = [];
    arrayField.forEach(function (field, index, array) {
        if (field.value == 0) {
            field.style.background = 'Red';
            arrayEmptyField.push(field);
            handle.textContent = 'The required field has not been filled in';
        } else {
            field.style.background = 'white';
        }
    });
    if (!arrayEmptyField.length) {
        handle.textContent = '';
        return false;
    }
    return true;
}

function clearInputValidate(handle, field1, field2, field3) {
    Array.from(arguments, function (e) {
        if (e.value == 0) {
            e.style.background = 'white';
            handle.textContent = '';
        }
    });
}

var booksContainer = document.getElementById('booksContainer');
var openAddPopup = document.getElementById('openAddPopup');
var popupAdd = document.getElementById('popupAdd');
var addBook = document.getElementById('addBook');
var cancelAddBook = document.getElementById('cancelAddBook');

var description = {
    title: 'Lord of the Ring',
    author: 'J. R. R. Tolkien',
    url: 'https://i.imgur.com/lAHqtnz.jpg'
};
new Book(description);

openAddPopup.addEventListener('click', function () {
    popupAdd.classList.remove('popup--hide');
});

addBook.addEventListener('click', function () {

    var title = document.getElementById('bookTitle');
    var author = document.getElementById('bookAuthor');
    var url = document.getElementById('bookUrl');
    if (validatePopup(errorField[errorField.length - 3], title, author, url)) {
        return;
    }
    popupAdd.classList.add('popup--hide');
    new Book({ title: title.value, author: author.value, url: url.value });
});

cancelAddBook.addEventListener('click', function () {
    popupAdd.classList.add('popup--hide');
});
//# sourceMappingURL=app.js.map