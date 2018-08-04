'use strict'

const users = [{
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    phone: '+1 (848) 556-2344',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    phone: '+1 (855) 582-2464',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    phone: '+1 (814) 593-3825',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    phone: '+1 (909) 547-2687',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    phone: '+1 (956) 512-2693',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    phone: '+1 (876) 411-2433',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    phone: '+1 (979) 504-2554',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getAllNames = arr => arr.map(user => user.name);
console.log('All names:', getAllNames(users));

const getUsersByEyeColor = (arr, color) => arr.filter(user => user.eyeColor === color);
console.log('sort by color of eyes:', getUsersByEyeColor(users, 'blue')); 

const getUsersByGender = (arr, gender) => arr.filter(user => user.gender === gender);
console.log('sort by gender', getUsersByGender(users, 'male'));

const getInactiveUsers = arr => arr.filter(user => !user.isActive);
console.log('Not active users', getInactiveUsers(users)); 

const getUserByEmail = (arr, email) => arr.find(user => user.email === email);
console.log('find by Email 1', getUserByEmail(users, 'shereeanthony@kog.com'));
console.log('find by Email 2', getUserByEmail(users, 'elmahead@omatom.com')); 

const getUsersWithAge = (arr, min, max) => arr.filter(user => user.age >= min && user.age <= max);

console.log('Users between 20 and 30', getUsersWithAge(users, 20, 30)); 

console.log('Users between 30 and 40', getUsersWithAge(users, 30, 40));

const getTotalBalance = arr => arr.reduce((acc, value) => acc + value.balance, 0);
console.log('total baalance', getTotalBalance(users)); 

const getUsersByFriend = (arr, name) => arr.filter(user => user.friends.includes(name));
console.log('Friends of Briana Decker', getUsersByFriend(users, 'Briana Decker')); 
console.log('Friends of Goldie Gentry', getUsersByFriend(users, 'Goldie Gentry')); 
