var myDiv = document.getElementById('content');

fetch('http://localhost:3000/servers') // Отправка GET-запроса на сервер
  .then(response => response.json())
  .then(data => {
      // Создаем новый div для каждого свойства объекта data
      for (let indexData in data) {
        if (data.hasOwnProperty(indexData)) {
            let newDiv = document.createElement('div');
            newDiv.textContent = indexData + ': ' + data[indexData]; // Выводим ключ и значение свойства
            myDiv.appendChild(newDiv); // Добавляем новый div в основной контейнер
        }
    }
    console.log(data);
  })
  .catch(error => console.error('Ошибка при получении данных:', error));
 



