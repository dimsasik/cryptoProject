// Подключение модуля CryptoJS
const CryptoJS = require('crypto-js');

// Экспорт объекта с функцией encryptAES
module.exports = {
    // Функция encryptAES принимает текст и секретный ключ и возвращает зашифрованный текст в формате строки
    encryptAES: function(text, secretKey) {
        if (secretKey === '' || text === ''){
            return ''
        }
        // Использование метода AES.encrypt из модуля CryptoJS для шифрования текста с использованием секретного ключа
        // Метод возвращает объект, который преобразуется в строку методом toString
        return CryptoJS.AES.encrypt(text, secretKey).toString();
    },
    decryptAES: function(text, secretKey) {
        if (secretKey === '' || text === ''){
            return ''
        }
        else{
        const decryptedBytes = CryptoJS.AES.decrypt(text, secretKey);
        const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
        return decryptedText;
    }
}
};