const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const emailaddress = document.getElementById('emailaddress');
const emailaddress2 = document.getElementById('emailaddress2');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}


function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, password, emailaddress, emailaddress2, firstname, surname,]);
    checkLength(username, 6, 30);
    checkLength(password, 8, 30);
    checkEmail(emailaddress);
    checkEmail(emailaddress2);
});