
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
          create_subsystem_card(newDiv, indexData); // Добавляем новый div в основной контейнер
      }
      console.log('Создание карточки №'+ data[indexData]);
  }

    function create_subsystem_card(newDiv, indexData) {
        let divServerName = document.createElement('div');
        divServerName.textContent = indexData + ': ' + data[indexData].serverName;
        divServerName.classList.add('card_server'); // Выводим ключ и значение свойства
        myDiv.appendChild(divServerName);
    }
}


