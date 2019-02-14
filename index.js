const TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
const token = '774748306:AAE2A9rSYhExCzTH4RoUYD_OUsx66rxBtis';
// Включить опрос сервера
const bot = new TelegramBot(token, {polling: true});

var notes = [];

bot.onText(/напомни (.+) в (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];

    notes.push({ 'uid': userId, 'time': time, 'text': text });

    bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
});