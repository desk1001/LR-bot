const fs = require("fs")


module.exports = async bot => {

    fs.readdirSync("./Commands").filter(f => f.endsWith(".js")).then(async file => {
        let command = require(`../Commands/${file}.js`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`Commands ${file.slice(0, file.length -3)} doesn't have a name!`)
        bot.commands.set(command.name, command)
        console.log(`${bot.user.tag} is online`)
    })
}