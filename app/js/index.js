'use strict';

let log = document.querySelector('.log-validation'),
    sign = document.querySelector('.sign-validation'),
    reset = document.querySelector('.reset-validation'),
    signInput = document.querySelector('.sign-validation__input'),
    signPassword = document.getElementById('signUpPassword'),
    signConfirmPassword = document.getElementById('signUpPasswordConfirm');

import {linksClick} from './modules/links.js';

document.getElementById('notMemberBtn').onclick = function() {
    linksClick(log, sign);
}

document.getElementById('exisitingMemberBtn').onclick = function() {
    let actions = log,
        style = actions.style,
        actions1 = sign,
        style1 = actions1.style;
    actions.classList.remove('invisible');
    actions1.classList.remove('visible');
}

document.getElementById('forgotPasswordBtn').onclick = function() {
    linksClick(log, reset);
}

document.getElementById('notMemberResetBtn').onclick = function() {
    linksClick(reset, sign);
}

document.getElementById('logInBtn').onclick = function() {
    if(document.getElementById('logInEmail').value === '' 
    || document.getElementById('logInPassword').value === '') {
        let actions = document.querySelector('.log-validation__text'),
            style = actions.style;
        actions.classList.remove('invisible');
    } else {
        document.location.reload(true);
    }
}

document.getElementById('signUpBtn').onclick = function() {
    if(signInput.value === '' || signPassword.value != signConfirmPassword.value) {
        let actions = document.querySelector('.sign-validation__text'),
            style = actions.style;
        actions.classList.remove('invisible');
    } else {
        document.location.reload(true);
    }
}

document.getElementById('resetBtn').onclick = function() {
    if(document.getElementById('resetEmail').value === '') {
        let actions = document.querySelector('.reset-validation__text'),
            style = actions.style;
        actions.classList.remove('invisible');
    } else {
        document.location.reload(true);
    }
}
