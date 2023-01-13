const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

//--------------------------------- SPONSOR BY KREXY ---------------------------------\\
exports.run = async (client, message, args) => {
   if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)).then(m => m.delete({timeout: 7000}))
let rol = message.mentions.roles.first();
if(!rol) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Lütfen Bir Yetkili Rolü Belirtiniz.`))
//--------------------------------- SPONSOR BY KREXY ---------------------------------\\
const embed = new MessageEmbed()
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setDescription(`Başarılı, kayıt yetkilisi rolü başarıyla ${rol} olarak ayarlandı.`)
message.channel.send(embed)
db.set(`yetkilirole_${message.guild.id}`, rol.id)
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['yetkilirol','yetkilirole','yetkili-role'],
  permLevel: 0 
};

exports.help = {
  name: 'yetkili-rol',
     cooldown: 5 
};