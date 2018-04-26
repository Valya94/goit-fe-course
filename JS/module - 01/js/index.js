"use strict";

const tourTaba = 6;
const tourSharm = 15;
const tourHurgada = 25;


const tourUser = prompt('Введите необходимое количество мест: ');
console.log(tourUser);
console.log(typeof tourUser);

if (typeof Number.parseInt(tourUser) === 'number' && !Number.isNaN(tourUser) && (Number.parseInt(tourUser) > 0)) {
    if (tourUser <= tourTaba) {
       let answerUser = confirm ('Есть места в группе Taba. Вы согласны быть в этой группе?');
       if (answerUser) {
            tourTaba - tourUser;
            alert('Приятного путешествия в группе Taba!');
       } else {
           if (tourUser <= tourSharm) {
                let answerUser = confirm ('Есть места в группе Sharm. Вы согласны быть в этой группе?');
                if (answerUser) {
                    tourSharm - tourUser;
                    alert('Приятного путешествия в группе Sharm!');
                } else {
                    if (tourUser <= tourHurgada) {
                        let tourUser = confirm ('Есть места в группе Hurgada. Вы согласны быть в этой группе?');
                        if (tourUser) {
                            tourHurgada - tourUser;
                            alert('Приятного путешествия в группе Hurgada!');
                        } else {
                            alert('Изините, мест нет.');
                        }
                   }
               }
           }
       }
    } else {
        if (tourUser <= tourSharm) {
            let answerUser = confirm ('Есть места в группе Sharm. Вы согласны быть в этой группе?');
            if (answerUser) {
                tourSharm - tourUser;
                alert('Приятного путешествия в группе Sharm!');
        } else {
            if (tourUser <= tourHurgada) {
                let answerUser = confirm ('Есть места в группе Hurgada. Вы согласны быть в этой группе?');
                if (answerUser) {
                    tourHurgada - tourUser;
                    alert('Приятного путешествия в группе Hurgada!');
             } else {
                 alert('Изините, мест нет.');
                }
            }
        }
    
   } else {
       if (tourUser <= tourHurgada) {
        let answerUser = confirm ('Есть места в группе Hurgada. Вы согласны быть в этой группе?');
        if (answerUser) {
            tourHurgada - tourUser;
            alert('Приятного путешествия в группе Hurgada!');
        } else {
            alert('Изините, мест нет.');
            }
        }
        else {
            alert('Изините, мест нет.');
        }
    }
}
} else {
    alert('Ошибка ввода.');
}
