const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(new Discord.MesageEmbed().setDescription("Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın!").setColor("RANDOM"))
  
  if(args[0] === "aç") {
    db.set(`emjkrm_${message.guild.id}`, true)
    message.channel.send(new Discord.MesageEmbed().setDescription("**Emoji koruma sistemi başarıyla açıldı!**").setColor("RANDOM"))
  }
  
  if(args[0] === "kapat") {
    db.delete(`emjkrm_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription("**Emoji koruma sistemi başarılıyla kapatıldı!**").setColor("RANDOM"))
  }
  
  if(!args[0]) {
    message.channel.send(new Discord.MessageEmbed().setDescription("**\`aç\` veya \`kapat\` yazmalısın! Örnek Kullanım: !reklam-engel aç / kapat**").setColor("RANDOM"))
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permlvl: 0
}

exports.help = {
  name: "emoji-koruma"
}
