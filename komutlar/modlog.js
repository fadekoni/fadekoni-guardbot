const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanabilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın !").setColor("RANDOM")) 
if(args[0] === "sıfırla"){
  if(db.has(`modlogkanaly_${message.guild.id}`)){
  db.delete(`modlogkanaly_${message.guild.id}`)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Mod Log Kanalı Sıfırlandı!"))
  }
  else return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Mod Log Kanalı Zaten Ayarlanmamış!"))
};
if(args[0] !== "sıfırla"){
  var kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
  if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir kanal belirtin! Eğer mod-log kanalını sıfırlamak istiyorsanız `mod-log sıfırla`"))
  db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Mod Log Kanalı <#${kanal.id}> olarak ayarlandı!`))
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['modlog'],
  permlvl: 0
}

exports.help = {
  name: "mod-log"
}