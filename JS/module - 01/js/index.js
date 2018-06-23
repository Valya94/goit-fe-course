'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const cancel = 'Отменено пользователем!';
const ban = 'Доступ запрещен!';
const welcome = 'Добро пожаловать!';


const log = prompt('Введите ваш логин');

if (log === null) {
    alert(cancel);
} else if (log !== ADMIN_LOGIN) {
    alert(ban);
} else {
    let pass = prompt('Введите пароль');

    if (pass === null) {
        alert(cancel);
    } else if (pass !== ADMIN_PASSWORD) {
        alert(ban);
    } else {
        alert(welcome);
    }
}