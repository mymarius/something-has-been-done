const Discord = require('discord.js');
const Topgg = require('@top-gg/sdk');
const data = require('quick.db')
const talkedRecently = new Set();
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1Mzc0ODYwNzQ5NDkxNDE2OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4MTMzODM0fQ.G9PYTKOB_fwl9HYWMlCBMiWQi3CFWYtFa5UJXxU2Xcc');
exports.run = async (client, message, args) => {   
  

    Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }  
let images = ["https://media.discordapp.net/attachments/939634397487976569/956555021590351952/standard_9.gif?width=374&height=48"] 
api.hasVoted(message.author.id).then(async voted => {
    if(voted) {
 
        const motionEmbed = new Discord.MessageEmbed()

        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor("RED")
      .setThumbnail(message.author.avatarURL()
        
        )
      
        
 .setImage(images.random())
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic: true}))
    
      
        .addField(
      `<a:Roverspanda:954522753950687232> Kayıt Yardım`,
      `
<a:kelbek:954115594951721000> | **.kayıt-log #kanal** | Kayıt log kanalını ayarlarsınız.
<a:kelbek:954115594951721000> | **.hg-kanal #kanal** | Hoşgeldin kanal ayarlarsınız.
<a:kelbek:954115594951721000> | **.erkek-rol @rol** | Erkek rolünü ayarlarsınız.
<a:kelbek:954115594951721000> | **.kız-rol @rol** | Kız rolünü ayarlarsınız.
<a:kelbek:954115594951721000> | **.yetkili-rol @rol** | Yetkili rolünü ayarlarsınız.
<a:kelbek:954115594951721000> | **.erkek** | Erkek olarak kayıt yaparsınız.
<a:kelbek:954115594951721000> | **.kız** | Kız olarak kayıt yaparsınız.
<a:kelbek:954115594951721000> | **.kayıtsız** | Kayıtsız rolünü ayarlarsınız.
<a:kelbek:954115594951721000> | **.say** | Sunucudaki herşeyi sayar.
<a:kelbek:954115594951721000> | **.otorol** | Otorol ayarlar.
<a:kelbek:954115594951721000> | **.oto-tag** | Oto tag ayarlar.
<a:kelbek:954115594951721000> | **.oto-tag-isim** | Oto isim ayarlar.
<a:kelbek:954115594951721000> | **.oto-tag-sıfırla** | Oto tagı sıfırlar.


`)
      

      
        .setFooter(
          `
    ${message.author.username} Tarafından İstendi.`,
          message.author.avatarURL
        );
      return message.channel.send(motionEmbed);



   } else {
const voteEmbed = new Discord.MessageEmbed()
        .setTitle('Hey dur bakalım! <a:kelbek:954115594951721000>')
 .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setImage("https://media.discordapp.net/attachments/953748242720497687/979940129705693234/35CAF4BF-9541-40FF-B351-94A1F350DFF1.gif?width=362&height=204")   
        .setDescription(
            '**Bu komutu kullanabilmek için bana oy vermelisiniz!** \n \n <a:Roversyldz:954517421971079199> **Oy vermek için** <a:Roversyldz:954517421971079199> \n :point_right: [Tıkla!](https://top.gg/bot/953748607494914168/vote) :point_left: '
          
        );
    message.channel.send(voteEmbed);
     
}
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['!yardım'],
 permLevel: 0
};
 
exports.help = {
 name: 'kayıt',
     cooldown: 5 
};
