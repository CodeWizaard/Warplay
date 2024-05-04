/*
DELETE:
Удаляет указанный ресурс.
Например, когда ты удаляешь пост в социальной сети, это DELETE-запрос.
PUT:
Заменяет все текущие представления ресурса данными запроса.
Используется для обновления данных на сервере.
POST:
Используется для отправки сущностей к определенному ресурсу.
Часто вызывает изменение состояния или побочные эффекты на сервере.
Например, когда ты отправляешь форму на сайте, это POST-запрос.
GET:
Запрашивает представление ресурса.
Может только извлекать данные.
Например, когда ты заходишь на веб-страницу, это обычно GET-запрос.
*/



const express = require('express')
const router = express.Router()
const servers = require('../models/serversmodel');

router.get('/',async (req,res)=>{
 try{
  
    const serversData = await servers.find();
    res.json(serversData)
 }catch{
   res.status(500).json({message: err. message } )
 }
})
module.exports = router;
