import { Telegraf, Markup } from 'telegraf'

const token = '8173508430:AAFuIV5r9FotY2aHyILvH-yepaNlQdlNGgQ'

const webAppUrl = 'https://google.com'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello world!',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)])
    )
})

bot.launch()
