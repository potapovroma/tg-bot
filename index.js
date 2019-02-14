const TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
const token = '774748306:AAE2A9rSYhExCzTH4RoUYD_OUsx66rxBtis';
// Включить опрос сервера
const bot = new TelegramBot(token, {polling: true});

const TRIGGERS = [
    [/^нет$/i, 'Pidora otvet'],
];

const getWords = (text: string): string[] => {
  Az.Tokens(text)
    .tokens
    .filter(({type}) => type === Az.Tokens.WORD)
    .map(({st, length}) => text.substr(st, length).toLowerCase());
}

const getByWordTrigger = function*(text: string): Iterable<string> {
    for (const word of getWords(text)) {
      for (const [regexp, answer] of constants.TRIGGERS) {
        if (word.match(regexp)) {
          yield answer;
        }
      }
    }
  };

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from HEROKU, ${msg.from.first_name}!!`);
})