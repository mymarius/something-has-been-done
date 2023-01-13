const Discord = require('discord.js');
const Topgg = require('@top-gg/sdk');
const data = require('quick.db')
const talkedRecently = new Set();
exports.run = async (client, message, args) => {   
  

    Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }  
let images = ["https://media.discordapp.net/attachments/939634397487976569/956555021590351952/standard_9.gif?width=374&height=48"] 
 
        const motionEmbed = new Discord.MessageEmbed()

        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor("RED")
      .setThumbnail(message.author.avatarURL()
        
        )
      
        
 .setImage(images.random())
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic: true}))
    
      
        .addField(
      `<a:Roverspanda:954522753950687232> Rovers Ekonomi Menüsüne Hoşgeldin! ||Botu kullanmadan önce rolünü en üste alınız.||`,
      `
<a:kelbek:954115594951721000> | **.çal**   : Etiketlediğin kişinin parasını çalar.
<a:kelbek:954115594951721000> | **.çalış** : Çalışırsın.
<a:kelbek:954115594951721000> | **.çek** : Para çekersin.
<a:kelbek:954115594951721000> | **.gönder** : Para gönderirsin .gönder @adras 7.
<a:kelbek:954115594951721000> | **.günlük** : Günlük rovcoin alırsın.
<a:kelbek:954115594951721000> | **.para** : Parana bakarsın.
<a:kelbek:954115594951721000> | **.soygun** : Heryeri soyarsın.
<a:kelbek:954115594951721000> | **.yatır** : Para yatırırsın.
<a:kelbek:954115594951721000> | **.market** : Marketi açar.

`)
      

      
        .setFooter(
          `
    ${message.author.username} Tarafından İstendi.`,
          message.author.avatarURL
        );
      return message.channel.send(motionEmbed);


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
 permLevel: 0
};
 
exports.help = {
 name: 'eko',
     cooldown: 5 
};
