"use strict";

const tourTaba = 6;
const tourSharm = 15;
const tourHurgada = 25;


const tourSelection = Number(prompt('Введите необходимое количество мест: '));
console.log(tourSelection);

if (!Number.isNaN(tourSelection) && tourSelection !== 0) {

    if (tourSelection <= tourTaba) {
        let userСhoice = confirm('Есть место в группе Taba. Вы хотите быть в этой группе?');

        if (userСhoice) {
            let remainingPlaces = tourTaba - tourSelection;
            console.log(remainingPlaces);
            alert('Приятного путешествия в группе Taba!');
        } else {
            alert("Нам очень жаль, приходите еще!");
        }
    } else if (tourSelection <= tourSharm) {
        let userСhoice = confirm('Есть место в группе Sharm. Вы хотите быть в этой группе?');

        if (userСhoice) {
            let remainingPlaces = tourSharm - tourSelection;
            console.log(remainingPlaces);
            alert('Приятного путешествия в группе Sharm!');
        } else {
            alert("Нам очень жаль, приходите еще!");
        }
    } else if (tourSelection <= tourHurgada) {
        let userСhoice = confirm('Есть место в группе Hurgada. Вы хотите быть в этой группе?');

        if (userСhoice) {
            let remainingPlaces = tourHurgada - tourSelection;
            console.log(remainingPlaces);
            alert('Приятного путешествия в группе Hurgada!');
        } else {
            alert("Нам очень жаль, приходите еще!");
        }
    }
} else {
    alert("Ошибка ввода");
}