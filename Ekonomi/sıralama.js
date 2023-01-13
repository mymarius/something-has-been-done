const { Discord, MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let sayı = args[0]
  let herkes = args[1]
  
  if (!sayı) {sayı = 5}
  if (isNaN(sayı) && sayı && sayı !== "global") return message.channel.send(new MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Sıralama için bir sayı girmelisin.`))

if (herkes !== "global" & !herkes & sayı !== "global") {
let top = message.guild.members.cache.filter(uye => db.get(`para_${uye.id}`)+db.get(`bankapara_${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`para_${uye2.id}`)+db.get(`bankapara_${uye2.id}`))-Number(db.get(`para_${uye1.id}`)+db.get(`bankapara_${uye1.id}`))).slice(0, sayı).map((uye, index) => (index+1)+" • "+ `\`${uye.user.tag}\`` +" üyesi **" + `${db.get(`para_${uye.id}`) + db.get(`bankapara_${uye.id}`)}` +"** Rovcoine sahip.").join('\n');  
message.react('<a:Roverstik:960136753639993365>')
message.channel.send(new MessageEmbed()
                     .setTitle(`Sunucu Rovcoin Sıralaması`)
                     .setDescription(top)
                     .setFooter(`Atahan Tarafından Yapıldı.`, message.author.avatarURL({dynanic: true})))}

if (sayı && herkes === "global") {
//let top2 = client.users.cache.filter(uye => db.get(`para_${uye.id}`)+db.get(`bankapara_${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`para_${uye2.id}`)+db.get(`bankapara_${uye2.id}`))-Number(db.get(`para_${uye1.id}`)+db.get(`bankapara_${uye1.id}`))).slice(0, sayı).map((uye, index) => (index+1)+" • "+ `\`${uye.tag}\`` +" üyesi **" + `${db.get(`para_${uye.id}`) + db.get(`bankapara_${uye.id}`)}` +"** Rovcoine sahip.").join('\n');  
message.react('<a:Roverstik:960136753639993365>')
message.channel.send(new MessageEmbed().setTitle(`Global Rovcoin Sıralaması`).setDescription('1 dakika bekleyiniz hesaplanıyor...').setFooter(`Atahan Tarafından Yapıldı.`, message.author.avatarURL({dynamic: true}))).then(mesaj => mesaj.edit(new MessageEmbed()
                     .setTitle(`Global Rovcoin Sıralaması`)
                     .setDescription(client.users.cache.filter(uye => db.get(`para_${uye.id}`)+db.get(`bankapara_${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`para_${uye2.id}`)+db.get(`bankapara_${uye2.id}`))-Number(db.get(`para_${uye1.id}`)+db.get(`bankapara_${uye1.id}`))).slice(0, sayı).map((uye, index) => (index+1)+" • "+ `\`${uye.tag}\`` +" üyesi **" + `${db.get(`para_${uye.id}`) + db.get(`bankapara_${uye.id}`)}` +"** Rovcoine sahip.").join('\n'))
                     .setFooter(`Atahan Tarafından Yapıldı.`, message.author.avatarURL({dynanic: true}))))}

if (sayı === "global" && !herkes) {
//let top3 = client.users.cache.filter(uye => db.get(`para_${uye.id}`)+db.get(`bankapara_${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`para_${uye2.id}`)+db.get(`bankapara_${uye2.id}`))-Number(db.get(`para_${uye1.id}`)+db.get(`bankapara_${uye1.id}`))).slice(0, 5).map((uye, index) => (index+1)+" • "+ `\`${uye.tag}\`` +" üyesi **" + `${db.get(`para_${uye.id}`) + db.get(`bankapara_${uye.id}`)}` +"** Rovcoine sahip.").join('\n');  
message.react('<a:Roverstik:960136753639993365>')
message.channel.send(new MessageEmbed().setTitle(`Global Rovcoin Sıralaması`).setDescription('1 dakika bekleyiniz hesaplanıyor...').setFooter(`Atahan Tarafından Yapıldı.`, message.author.avatarURL({dynamic: true}))).then(mesaj => mesaj.edit(new MessageEmbed()
                     .setTitle(`Global Rovcoin Sıralaması`)
                     .setDescription(client.users.cache.filter(uye => db.get(`para_${uye.id}`)+db.get(`bankapara_${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`para_${uye2.id}`)+db.get(`bankapara_${uye2.id}`))-Number(db.get(`para_${uye1.id}`)+db.get(`bankapara_${uye1.id}`))).slice(0, 5).map((uye, index) => (index+1)+" • "+ `\`${uye.tag}\`` +" üyesi **" + `${db.get(`para_${uye.id}`) + db.get(`bankapara_${uye.id}`)}` +"** Rovcoine sahip.").join('\n'))
                     .setFooter(`Atahan Tarafından Yapıldı.`, message.author.avatarURL({dynanic: true}))))}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
}

exports.help = {
name: "top",
}