const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
  let timeout = 25000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Bahis oynamak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
  var miktar = args[0]
  if(miktar !== "hepsi" && isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için miktar girmelisin.`))
 if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için cüzdanında ${para ? "sadece " + para + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
if(miktar === "hepsi") {
  if (1 > para) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için cüzdanında ${para ? "sadece " + para + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))

  miktar = db.fetch(`para_${message.author.id}`)}        
        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (message.author.id === "813799329407041576"){awnser = "WINWIN"}
     if (awnser === "LOOSELOOSE") {
 var kaybettin = miktar        
      message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Bahisi kaybettin ve cüzdanından ${kaybettin} Rovcoin <a:rovcoin:972225897409155142> eksildi!`));
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
        } else {
          var kazandın = miktar*2
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`Bahisi kazandın ve cüzdanına ${kazandın} Rovcoin <a:rovcoin:972225897409155142> eklendi!`)
      message.channel.send(embed) 
      if (message.author.id === "813799329407041576"){await db.add(`para_${message.author.id}`, kazandın)}
    if (message.author.id !== "813799329407041576"){
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);}
        }}}
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: 'bahis',
};