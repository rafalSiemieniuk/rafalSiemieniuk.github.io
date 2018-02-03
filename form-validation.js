var submit = document.getElementsByClassName('form-submit');
var inputTxt = document.getElementsByClassName('input-txt');
var divValidation = document.getElementsByClassName('div-validation');
var name1 = document.getElementById('name');
var eMail = document.getElementById('e-mail');
var topic = document.getElementById('topic');
var message = document.getElementById('message');

name1.addEventListener('keyup', function () {
    if (!inputTxt[0].value || name1.value.match(/^\s+/) !== null) {   // input is empty
        formValidation(name1, 'fa-check-circle-o', 'fa-times-circle-o');
        divValidation[0].innerHTML = 'Fill the field!';
        name1.value = '';
    } else {    // input is correct
        divValidation[0].innerHTML = '';
        formValidation(name1, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

eMail.addEventListener('input', function () {

    const errorMailReg0 = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i; //appropriate string of letters
    const errorMailReg1 = /[,;"'}{!#$%&()\*\?\:\/\^\+\\\=\|]+/g; // wrong sign
    const errorMailReg2 = /[A-Z]+/g; //wrong capital letter

    if (!inputTxt[1].value || eMail.value.match(/^\s+/) !== null) {   // input is empty
        divValidation[1].innerHTML = 'Fill the field!';
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
        eMail.value = '';
        eMail.setAttribute('value', '');
    }
    else if (errorMailReg1.test(eMail.value)) {   // input contains wrong signs
        divValidation[1].innerHTML = 'Incorrect characters ' + eMail.value.match(errorMailReg1);
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
    } else if (errorMailReg2.test(eMail.value)) {   // input contains capital letter
        divValidation[1].innerHTML = 'Use lowercases!';
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
    } else if (!(errorMailReg0.test(eMail.value))) {     // completely wrong input
        divValidation[1].innerHTML = 'Incorrect email address';
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
    } else {    // input is correct
        divValidation[1].innerHTML = '';
        formValidation(eMail, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

topic.addEventListener('input', function () {
    if (!inputTxt[2].value || topic.value.match(/^\s+/) !== null) {   // input is empty
        divValidation[2].innerHTML = 'Fill the field!';
        formValidation(topic, 'fa-check-circle-o', 'fa-times-circle-o');
        topic.value = '';
    } else {    // input is correct
        divValidation[2].innerHTML = '';
        formValidation(topic, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

message.addEventListener('input', function () {
    if (!inputTxt[3].value || message.value.match(/^\s+/) !== null) {   // input is empty
        divValidation[3].innerHTML = 'Fill the field!';
        formValidation(message, 'fa-check-circle-o', 'fa-times-circle-o');
        message.value = '';
    } else {    // input is correct
        divValidation[3].innerHTML = '';
        formValidation(message, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

submit[0].addEventListener('click', function (event) {
    if (!inputTxt[0].value || !inputTxt[1].value || !inputTxt[2].value || !inputTxt[3].value) {
        for (var i = 0; i < inputTxt.length; i += 1) {
            if (!inputTxt[i].value) {
                formValidation(inputTxt[i], 'fa-check-circle-o', 'fa-times-circle-o');
                divValidation[i].innerHTML = 'Fill the field!'
            }
        }
        alert('Fill in all fields!');
        event.preventDefault()
        return
    }
});

function formValidation(topicInput, checkpoint_1, checkpoint_2) {
    topicInput.nextElementSibling.firstElementChild.classList.remove(checkpoint_1);
    topicInput.nextElementSibling.firstElementChild.classList.add(checkpoint_2);
};