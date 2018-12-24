// Entering an email and phone number

var numberPhoneFiled = document.getElementsByClassName('number-phone');
var emailAddressField = document.getElementsByClassName('email-address');
var emailAddressField = document.getElementsByClassName('email-address');
var numberPhone = '123 456 789';
var emailAddress = {
  emailUserId: 'siemieniukrafal',
  domainServer: 'gmail.com'
}

for (var i = 0; i < numberPhoneFiled.length; i++) {
  numberPhoneFiled[i].textContent = '123 456 789';
}
for (var i = 0; i < emailAddressField.length; i++) {
  emailAddressField[i].textContent = emailAddress.emailUserId + '@' + emailAddress.domainServer;
}

console.log('numberPhoneFiled = ', numberPhoneFiled);
console.log('emailAddressField = ', emailAddressField);