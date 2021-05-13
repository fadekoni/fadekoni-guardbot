const Discord = require('discord.js');
const db = require('quick.db')
 
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission('ADMINISTATOR')) return message.channel.send(' Bu komutu kullanmak için **YÖNETİCİ** yetkisine sahip olmalısın!')
  
    if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)

  if (args[0] === 'aç') {
  
    db.set(`kanalkoruma_${message.guild.id}`, 'aktif')
  
    message.channel.send(`Kanal koruma açıldı!`)
 
}
  
if (args[0] === 'kapat') {
  
    db.delete(`kanalkoruma_${message.guild.id}`)
   
    message.channel.send(`Kanal koruma kapatıldı!`)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: 'kanal-koruma'
};