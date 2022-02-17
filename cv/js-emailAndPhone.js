// Entering an email and phone number

var numberPhoneFiled = document.getElementsByClassName('number-phone');
var emailAddressField = document.getElementsByClassName('email-address');
var ageField = document.getElementsByClassName('birth-date');

var numberPhone = '123 456 789';
var emailAddress = {
  emailUserId: 'siemieniukrafal',
  domainServer: 'gmail.com',
};
var dateOfBirth = new Date('Mon, 20 Jul 1992 20:00:00 GMT');

for (var i = 0; i < numberPhoneFiled.length; i++) {
  numberPhoneFiled[i].textContent = '123 456 789';
}
for (var i = 0; i < emailAddressField.length; i++) {
  emailAddressField[i].textContent =
    emailAddress.emailUserId + '@' + emailAddress.domainServer;
}
for (var i = 0; i < ageField.length; i++) {
  ageField[i].textContent = calcAge(dateOfBirth);
}

function calcAge(birthDate) {
  var itTimeStart = 1970;
  var difference = Date.now() - birthDate.getTime();
  var ageDate = new Date(difference);
  var calculatedAge = Math.abs(ageDate.getUTCFullYear() - itTimeStart);
  return calculatedAge.toString();
}
