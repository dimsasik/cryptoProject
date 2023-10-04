// Подключение модуля express
const express = require('express');

// Подключение контроллера cryptoController из файла ./controllers/cryptoController.js
const cryptoController = require('./controllers/cryptoController');

// Подключение модуля для парсинга запросов с телом в формате urlencoded и json
const bodyParser = require('body-parser');

// Создание приложения Express
const app = express();

// Подключение статических файлов из папки public
app.use(express.static('public'));

// Использование модуля bodyParser для парсинга запросов в форматах urlencoded и json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Установка обработчика POST-запросов на корневой путь
// Выполнение функции cryptoController при получении POST-запроса на корневой путь
app.post('/', cryptoController);

// Назначение приложению Express прослушивания порта 3000
app.listen(3000, () => {
    console.log('AES-server app listening on port 3000');
});