const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
    var guildId = "946065601430974514";
var guild = client.guilds.cache.get(guildId)

if (message.guild.id !== guildId) {
  return message.channel.send("Bu komut yanlızca **"+guild.name+"** sunucusunda kullanabilmektedir. \n Burada kullanabilirsiniz: https://discord.gg/ntSpKmASqr")
}
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://cdn.discordapp.com/attachments/767247105172439042/767262725105254400/giphy.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262735838216232/bf4ac591346c0e44d88beff1c8525a9e.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262731556225034/HkA6mJFP-.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262733212450846/HyPjmytDW.gif",
  "https://cdn.weeb.sh/images/HkJ6-e91z.gif",
  "https://cdn.weeb.sh/images/HkHCm1twZ.gif",
  "https://cdn.weeb.sh/images/SJlkNkFwb.gif",
  "https://cdn.weeb.sh/images/SJdXoVguf.gif",
  "https://cdn.weeb.sh/images/ByHUMRNR-.gif",
  "https://cdn.weeb.sh/images/H16aQJFvb.gif",
  ""
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Kendini tokat atıcaksın olum sakin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine Osmanlı tokatı attı.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tokat'
};