const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  let rklm = db.fetch(`rklmengl_${message.guild.id}`)
  let olumsuzemoji = ("<:off:812662724269178881>")
  let olumluemoji = ("<:on:812662685015474176>")
  let kfr = db.fetch(`kfrengl_${message.guild.id}`)
  let rl = db.fetch(`rlkrm_${message.guild.id}`)
  let emj = db.fetch(`emjkrm_${message.guild.id}`)
  let knl = db.fetch(`kanalkoruma_${message.guild.id}`)
  let caps = db.fetch(`capslock_${message.guild.id}`)
  let modlog = db.fetch(`modlogkanaly_${message.guild.id}`)
  
  let rklmm
  if(!rklm) {
    rklmm = olumsuzemoji
  } else {
    rklmm = olumluemoji
  }
  let kfrr
  if(!kfr) {
    kfrr = olumsuzemoji
  } else {
    kfrr = olumluemoji
  }
  let rll 
  if(!rl) {
    rll = olumsuzemoji
  } else {
    rll = olumluemoji
  }
  let emjj
  if(!emj) {
    emjj = olumsuzemoji
  } else {
    emjj = olumluemoji
  }
  let knll 
  if(!knl) {
    knll = olumsuzemoji
  } else {
    knll = olumluemoji
  }
 let capss
 if(!caps) {
   capss = olumsuzemoji
 } else {
   capss = olumluemoji
 }
 let mod
 if(!modlog) {
   mod = olumsuzemoji
 } else {
   mod = `<#${modlog}>`
 }
  
  const ayarlar = new Discord.MessageEmbed()
  .setTitle(`${message.guild.name} Adlı Sunucunun Guard Ayarları`)
  .setThumbnail(`${message.guild.iconURL({ format: "png", size: 1024 })}`)
  .addField("Reklam Engel;", rklmm, true)
  .addField("Küfür Engel;", kfrr, true)
  .addField("Rol Koruma;", rll, true)
  .addField("Emoji Koruma;", emjj, true)
  .addField("Kanal Koruma;", knll, true)
  .addField("CapsLock Engel;", capss, true)
  .addField("Mod Log Kanalı;", mod, true)
  .setFooter("Fade Code v12 Aşırı Gelişmiş Guard Altyapısı !")
  .setColor("RANDOM")
  message.channel.send(ayarlar)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permlvl: 0
}

exports.help = {
  name: "ayarlar"
}