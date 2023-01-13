const Discord = require("discord.js");

exports.run = async (client, message) => {
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
let Atahan = client.users.cache.get("813799329407041576")
let sahip = client.users.cache.get(ayarlar.botsahibi)

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`Rovers | Discord bot bilgi tablosu`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/954119214543806515/954788124226113536/roversbanner.jpg?width=842&height=473"    )
    .setDescription(
      `📯 Rovers botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `📗 **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n 📗 **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n 📗 **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Yetkili Bilgi**__",
      `👑 **Bot Sahipleri** ${sahip} (${sahip.tag}) ${Atahan} (${Atahan.tag}) \n\n`
    )
    .addField(
      "__**Sürümler**__",
      `🥽 **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n 🦺  **Node.js sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `🩱 \`${client.ws.ping}\` **MS**`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🎓  \`${prefix}davet\` | Botu sununuya davet edersiniz\n 🎓 \`${prefix}i\` | Botun istatistiklerini görürsünüz.`
    ); 
  
  return message.channel.send(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "i",
  description: "",
  usage: ""
};
