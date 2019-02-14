import * as constants from './constants';

const TelegramBot = require('node-telegram-bot-api');

// Включить опрос сервера
const bot = new TelegramBot(constants.TOKEN, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from HEROKU, ${msg.from.first_name}!!`);
})