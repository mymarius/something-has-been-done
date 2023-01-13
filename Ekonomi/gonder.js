const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`);
  let etiket = message.mentions.users.first();

  let alsınır = db.fetch(`almasınırı_${etiket.id}`)
  let atsınır = db.fetch(`atmasınırı_${message.author.id}`)
  
  let miktar = args[1];

  if (!etiket)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        )
        .setDescription(`Para göndermek için bir kullanıcı etiketlemelisin!`)
    );
  if (!miktar)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        ).setDescription(`Göndermek istediğin Rovcoin miktarını girmelisin!
                     \`.gönder <miktar || hepsi>\``)
    );
  if (miktar < 0 || miktar.startsWith("0"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        )
        .setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`)
    );
      if (etiket.id === message.author.id)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setDescription(`⛔ Kendine Rovcoin gönderemezsin!`)
      );
    
    if (miktar > 40000 - alsınır) return message.channel.send(`${etiket} bu gün sadece ${40000 - alsınır} alabilir.`)
    if (miktar > 50000 - atsınır) return message.channel.send(`${message.author}, Bu günlük sadece ${50000 - atsınır} gönderebilirsin`)
    if (alsınır === 40000) return message.channel.send(`${etiket} bu gün Rovcoin alamaz.`)
    if (atsınır === 50000) return message.channel.send(`${message.author}, Bu gün Rovcoin gönderemezsiniz.`)
    
    if (miktar > para)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setDescription(
            `⛔ Şuan elinde ${
              para
                ? "sadece " +
                  para +
                  " Rovcoin <a:rovcoin:972225897409155142> var!"
                : "hiç para yok!"
            } `
          )
      );
    if (miktar === "all" || miktar === "hepsi") {
      return;
    } else {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setDescription(
            `✅ Başarılı,${etiket}'a ${miktar} Rovcoin <a:rovcoin:972225897409155142> gönderdin!`
          )
      );
      db.add(`para_${etiket.id}`, miktar);
      db.add(`para_${message.author.id}`, -miktar);
      db.add(`atmasınırı_${message.author.id}`, miktar)
      db.add(`almasınırı_${etiket.id}`, miktar)

    }
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gonder"],
  permLevel: 0,
};

exports.help = {
  name: "gönder",
};
