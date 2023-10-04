// Подключение модели cryptoModel
const cryptoModel = require('../models/cryptoModel');

// Создание функции createEncryptMessage, которая принимает запрос и ответ
const createEncryptMessage = (req, res) => {
    // Извлечение текста и ключа из запроса
    const text = req.body['input-text'];
    const key = req.body['input-key'];
    // Использование функции encryptAES из модели cryptoModel для шифрования текста
    const encrypt = req.body['encrypt'];
    const decrypt = req.body['decrypt'];
    if (encrypt === true) {
        const cryptoText = cryptoModel.encryptAES(text, key);
        res.json({'output-text': cryptoText});
    }
    if (decrypt === true) {
        const decryptoText = cryptoModel.decryptAES(text, key);
        res.json({'output-text': decryptoText});
    }

};

// Экспорт функции createEncryptMessage
module.exports = createEncryptMessage;
