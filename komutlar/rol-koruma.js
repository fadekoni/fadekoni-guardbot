const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanabilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın !").setColor("RANDOM"))
  
  if(args[0] === "aç") {
    db.set(`rlkrm_${message.guild.id}`, true)
    message.channel.send(new Discord.MessageEmbed().setDescription("**Rol koruma sistemi başarıyla açıldı!**").setColor("RANDOM"))
  }
  
  if(args[0] === "kapat") {
    db.delete(`rlkrm_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription("**Rol koruma sistemi başarıyla kapatıldı!**").setColor("RANDOM"))
  }
  
  if(!args[0]) {
    message.channel.send(new Discord.MessageEmbed().setDescription("**\`aç\` veya \`kapat\` yazmalısın! Örnek Kullanım: !rol-koruma aç / kapat**").setColor("RANDOM"))
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permlvl: 0
}

exports.help = {
  name: "rol-koruma"
}
