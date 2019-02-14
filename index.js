const TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
const token = '774748306:AAE2A9rSYhExCzTH4RoUYD_OUsx66rxBtis';
// Включить опрос сервера
const bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from HEROKU, ${msg.from.first_name}!!`);
})