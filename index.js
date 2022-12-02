const Discord = require("discord.js")
require('dotenv').config()



const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

//To know that the bot is ready

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})


//If write ping, bot tell pong
client.on('messageCreate', message => {
   if (message.content=== '!ping'){
        message.reply('pong')   
    }
})



client.login(process.env.TOKEN)

//"node index" to start bot