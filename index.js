const TOKEN = '774748306:AAE2A9rSYhExCzTH4RoUYD_OUsx66rxBtis';

const TelegramBot = require('node-telegram-bot-api');

// Включить опрос сервера
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from HEROKU, ${msg.from.first_name}!!`);
});