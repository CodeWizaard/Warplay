
var myDiv = document.getElementById('block_server');

fetch('http://localhost:3000/servers') // Отправка GET-запроса на сервер
  .then(response => response.json())
  .then(data => {
    create_card(data);
    console.log('Создание карточек серверов завершено');
  })
  .catch(error => console.error('Ошибка при получении данных:', error));
 
function create_card(data) {
      // Создаем новый div для каждого свойства объекта data
      for (let indexData in data) {
        if (data.hasOwnProperty(indexData)) {
            create_card(data);
        }
        console.log('Создание карточки №'+ data[indexData]);
    }
}
function create_card(data) {
    // Создаем новый div для каждого свойства объекта data
    for (let indexData in data) {
      if (data.hasOwnProperty(indexData)) {
          let newDiv = document.createElement('div');
          newDiv.classList.add('card_server'); // Выводим ключ и значение свойства
          myDiv.appendChild(newDiv);
          create_server_name(newDiv, indexData); 
          create_max_users(newDiv, indexData);
          create_location(newDiv, indexData);// Добавляем новый div в основной контейнер
      }
      console.log('Создание карточки №'+ data[indexData]);
  }

    function create_server_name(newDiv, indexData) {
        let divServerName = document.createElement('div');
        divServerName.textContent =  ': ' + data[indexData].serverName;
        divServerName.classList.add('name_server'); // Выводим ключ и значение свойства
        newDiv.appendChild(divServerName);
        
    }
    function create_max_users(newDiv, indexData) {
        let divServerName = document.createElement('div');
        divServerName.textContent =  ': ' + data[indexData].maxUsers;
        divServerName.classList.add('max_users_server'); // Выводим ключ и значение свойства
        newDiv.appendChild(divServerName);
    }
    function create_location(newDiv, indexData) {
        let divServerName = document.createElement('div');
        divServerName.textContent =  ': ' + data[indexData].location;
        divServerName.classList.add('location_server'); // Выводим ключ и значение свойства
        newDiv.appendChild(divServerName);
    }
}


