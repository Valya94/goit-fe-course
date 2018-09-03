(() => {
    
    'use strict';
  
    const getBtn = document.querySelector('.js-get');
    const resultGetAll = document.querySelector('.js-result-all');
    const addUserBtn = document.querySelector('.js-submit-add');
    const resultID = document.querySelector('.js-result-id');
    const input = document.querySelector('input');
    const searchBtn = document.querySelector('.js-submit-search');
    const apiUrl = 'https://test-users-api.herokuapp.com/users/';
    const inputAddName = document.querySelector('.name-user');
    const inputAddAge = document.querySelector('.age-user');
    const removeIdBtn = document.querySelector('.js-submit-remove');
    const inputRemove = document.querySelector('.js-remove');
    const inputUpdateId = document.querySelector('.js-user-id');
    const inputUpdateName = document.querySelector('.js-user-name');
    const inputUpdateAge = document.querySelector('.js-user-age');
    const updateBtn = document.querySelector('.js-submit-update');
  
    getBtn.addEventListener('click', getAllUsers);
    searchBtn.addEventListener('click', getUserById);
    addUserBtn.addEventListener('click', addUser);
    removeIdBtn.addEventListener('click', removeUser);
    updateBtn.addEventListener('click', updateUser);
  
    function updateUser(user) {
      user.preventDefault();
  
      const newUser = {
        name: inputUpdateName.value,
        age: inputUpdateAge.value,
      };
  
      fetch(apiUrl + inputUpdateId.value, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log('ERROR' + error));
    }
    function removeUser(id) {
      id.preventDefault();
      console.log(inputRemove.value);
      fetch(apiUrl + inputRemove.value, {
        method: 'DELETE',
      })
        .then(() => {
          console.log('success');
        })
        .catch(error => console.log('ERROR' + error));
    }
  
    function addUser(user) {
      user.preventDefault();
      const newUser = {
        name: inputAddName.value,
        age: inputAddAge.value,
      };
  
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Error fetching data');
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    function getUserById(id) {
      id.preventDefault();
      console.log(input.value);
  
      fetch(apiUrl + input.value)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Error fetching data');
        })
        .then(data => {
          renderingGetUserById(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    function renderingGetUserById(data) {
      resultID.innerHTML = `<div class = "result-user"><p>ID: ${data.data.id}</p>
                 <p>Name: ${data.data.name}</p> 
                 <p>Age: ${data.data.age}</p></div>`;
    }
    /*
    @param {FormEvent} evt
  */
    function getAllUsers(evt) {
      evt.preventDefault();
  
      fetch(apiUrl)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Error fetching data');
        })
        .then(data => {
          rendering(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    function rendering(data) {
      const table = document.createElement('table');
      const headerCol = document.createElement('tr');
      const headerCel1 = document.createElement('th');
      headerCel1.textContent = 'ID';
  
      const headerCel2 = document.createElement('th');
      headerCel2.textContent = 'NAME';
  
      const headerCel3 = document.createElement('th');
      headerCel3.textContent = 'AGE';
      headerCol.append(headerCel1, headerCel2, headerCel3);
  
      data.data.forEach(item => {
        const column = document.createElement('tr');
        const cells1 = document.createElement('td');
        cells1.textContent = `${item.id}`;
  
        const cells2 = document.createElement('td');
        cells2.textContent = `${item.name}`;
  
        const cells3 = document.createElement('td');
        cells3.textContent = `${item.age}`;
        column.append(cells1, cells2, cells3);
        table.prepend(headerCol);
        table.append(column);
        resultGetAll.append(table);
      });
    }
  })();