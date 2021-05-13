const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async(client, message, args) => {
if(!message.member.permissions.has("MANAGE_GUİLD")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için sunucuyu yönet iznine sahip olmalısın."))
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Lütfen bir seçenek belirtin **aç / kapat**"))
if(args[0] === "aç"){
db.set(`capslock_${message.guild.id}`, true)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Capslock engel başarıyla açıldı!").setFooter("Fadeaway & CCD"))
};
if(args[0] === "kapat"){
  db.delete(`capslock_${message.guild.id}`)
  return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Capslock Engel Başarıyla Kapatıldı !").setFooter("Fadeaway & CCD")) 
};
};
module.exports.conf = {aliases: [], permLevel: 3};
module.exports.help = {name: "caps-engel"} 