'use strict';

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    releaseDate: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    releaseDate: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    releaseDate: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    releaseDate: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    releaseDate: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

let filter = { size: [], color: [], release_date: [] };
const form = document.querySelector('.js-form');
const source = document.querySelector('#laptop-card').innerHTML.trim();
const template = Handlebars.compile(source);
const container = document.querySelector('#container-cards');

form.addEventListener('submit', handelOnSubmit);
form.addEventListener('reset', hanselFormReset);

function matchArray(arr, value) {
  return arr.length === 0 || arr.includes(value);
}

function handelOnSubmit(event) {
  event.preventDefault();

  const chekedCheckbox = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked'),
  );

  filter = chekedCheckbox.reduce(
    (acc, checkbox) => {
      acc[checkbox.name].push(checkbox.value);
      return acc;
    },
    { size: [], color: [], release_date: [] },
  );

  const matchedLaptops = laptops.filter(laptop => {
    const matchSize = matchArray(filter.size, String(laptop.size));
    const matchColor = matchArray(filter.color, laptop.color);
    const matchReleaseDate = matchArray(
      filter.release_date,
      String(laptop.releaseDate),
    );

    return matchSize && matchColor && matchReleaseDate;
  });

  const markup = template({ laptops: matchedLaptops });

  container.innerHTML = markup;

  form.reset();
}

function hanselFormReset(event) {
  resetFilter();
  form.reset();
}

function resetFilter() {
  filter.size = [];
  filter.color = [];
  filter.releaseDate = [];
}