var name1 = document.getElementById('name');

name1.addEventListener('keyup', function () {

    if (name1.value.length <= 0 || name1.value.match(/^\s+/) !== null) {   // input is empty
        // name1.setCustomValidity('error');
        name1.reportValidity();
        console.log(name1.setCustomValidity('Fill the field!'));
        formValidation(name1, 'fa-check-circle-o', 'fa-times-circle-o');
        name1.value = '';
    } else {    // input is correct
        name1.setCustomValidity('');
        formValidation(name1, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

var eMail = document.getElementById('e-mail');

eMail.addEventListener('input', function () {

    const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i; //appropriate string of letters
    const errorMailReg1 = /[,;"'}{!#$%&()\*\?\:\/\^\+\\\=\|]+/g; // wrong sign
    const errorMailReg2 = /[A-Z]+/g; //wrong capital letter

    if (eMail.value.length <= 0 || eMail.value.match(/^\s+/) !== null) {   // input is empty
        eMail.reportValidity();
        eMail.value = '';
        console.log(eMail.setCustomValidity('Fill the field!'));
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
        eMail.setAttribute('value', '');
    }
    else if (errorMailReg1.test(eMail.value)) {   // input contains wrong signs
        eMail.reportValidity();
        console.log(eMail.setCustomValidity('Incorrect characters ' + eMail.value.match(errorMailReg1)));
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
    } else if (errorMailReg2.test(eMail.value)) {   // input contains capital letter
        eMail.reportValidity();
        console.log(eMail.setCustomValidity('E-mail address can not contain uppercase letters'));
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
    } else if (!(mailReg.test(eMail.value))) {     // completely wrong input
        eMail.reportValidity();
        console.log(eMail.setCustomValidity(eMail.value + ' it is a wrong email address'));
        formValidation(eMail, 'fa-check-circle-o', 'fa-times-circle-o');
    } else {    // input is correct
        eMail.setCustomValidity('');
        formValidation(eMail, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

var topic = document.getElementById('topic');

topic.addEventListener('input', function () {

    if (topic.value.length <= 0 || topic.value.match(/^\s+/) !== null) {   // input is empty
        // topic.setCustomValidity('error');
        topic.reportValidity();
        console.log(topic.setCustomValidity('Fill the field!'));
        formValidation(topic, 'fa-check-circle-o', 'fa-times-circle-o');
        topic.value = '';
    } else {    // input is correct
        topic.setCustomValidity('');
        formValidation(topic, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

var message = document.getElementById('message');

message.addEventListener('input', function () {

    if (message.value.length <= 0 || message.value.match(/^\s+/) !== null) {   // input is empty
        // message.setCustomValidity('error');
        message.reportValidity();
        console.log(message.setCustomValidity('Fill the field!'));
        formValidation(message, 'fa-check-circle-o', 'fa-times-circle-o');
        message.value = '';
    } else {    // input is correct
        message.setCustomValidity('');
        formValidation(message, 'fa-times-circle-o', 'fa-check-circle-o');
    }
});

function formValidation(topicInput, checkpoint_1, checkpoint_2) {
    topicInput.nextElementSibling.firstElementChild.classList.remove(checkpoint_1);
    topicInput.nextElementSibling.firstElementChild.classList.add(checkpoint_2);
};


var submit = document.getElementsByClassName('form-submit');
var inputTxt = document.getElementsByClassName('input-txt');
submit[0].addEventListener('click', function (event) {
    if (!inputTxt[0].value || !inputTxt[1].value || !inputTxt[2].value || !inputTxt[3].value) {
        for (var i = 0; i < inputTxt.length; i += 1) {
            if (!inputTxt[i].value) {
                formValidation(inputTxt[i], 'fa-check-circle-o', 'fa-times-circle-o');
            }
        }
        alert('Fill in all fields!');
        event.preventDefault()
        return
    }
});
