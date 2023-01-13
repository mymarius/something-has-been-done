const Discord = require('discord.js');
const Topgg = require('@top-gg/sdk');
const data = require('quick.db')
const talkedRecently = new Set();
exports.run = async (client, message, args) => {   
  
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                        .setTitle(`__***Rovcoin market bilgi!***__ <a:rovcoin:972225897409155142>`)
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`• | **CraftRise'de herhangi bir oyunda \`1000\` puan kasan kişiye bu \`200k Rovcoin\`<a:rovcoin:972225897409155142>verilecektir.**
• | **Rovers Discord bot'da her \`10\` Level'de bir \`20k Rovcoin\`<a:rovcoin:972225897409155142>vericektir.**
• | **Rovers Discord bot ile owonuzu Rovcoine çevirebilirsiniz.**\n\n**Sınırlı Sayıda:**\n• | **30k OwO Cash 1m Rovcoin <a:rovcoin:972225897409155142>** .market owo-cash\n\n• | **Vuruş Makrosu 150k Rovcoin <a:rovcoin:972225897409155142>** .market andrew-cr\n• | **Blok Makrosu 100k Rovcoin <a:rovcoin:972225897409155142>** .market blok-makro\n• | **Olta Makrosu 120k Rovcoin <a:rovcoin:972225897409155142>** .market olta-makro\n• | **Lav Makrosu 30k Rovcoin <a:rovcoin:972225897409155142>** .market lav-makro\n• | **Sekmeme Reg (CraftRise) 450k Rovcoin <a:rovcoin:972225897409155142>** .market sekmeme-regedit\n• | **Düz Olta Reg (Oltanın düz ve iyi gitmesini sağlar.) 300k Rovcoin <a:rovcoin:972225897409155142>** .market olta-regedit\n• | **Hit Reg 150k Rovcoin <a:rovcoin:972225897409155142>** .market hit-regedit\n• | **TimeTravel Ayarları (CraftRise) 500k Rovcoin <a:rovcoin:972225897409155142>** .market time-travel\n• | **PvP Reg (PvP'de çok iyi) 1m Rovcoin <a:rovcoin:972225897409155142>** .market pvp-regedit\n\n• | **Rovers Discord bot ile Discord oyunlarını kolayca alabilirsiniz her biri 120k Ravcoin <a:rovcoin:972225897409155142> oyunlar şöyle;**\n.market jumplats <a:rovcoin:972225897409155142>\n.market warframe <a:rovcoin:972225897409155142>\n.market zombsroyale-io <a:rovcoin:972225897409155142>\n.market light-from-the-bu <a:rovcoin:972225897409155142>\n.market bloodlines-of-prima <a:rovcoin:972225897409155142>\n.market minion-masters <a:rovcoin:972225897409155142>\n.market forestir <a:rovcoin:972225897409155142>\n.market pickcrafter <a:rovcoin:972225897409155142>\n.market sandboxes <a:rovcoin:972225897409155142>\n.market realm-royale <a:rovcoin:972225897409155142>\n.market it-s-hard-being-a-dog <a:rovcoin:972225897409155142>\n.market scp-secret-laboratory <a:rovcoin:972225897409155142>\n.market heroes-generals-wwii <a:rovcoin:972225897409155142>`)
                                        .setFooter(`Atahan Tarafından Yapıldı.`, message.author.avatarURL({dynamic: true})))

  
if(args[0] == "time-travel") {
try{   
if(500000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 500000)
message.author.send(`**işte time travelin güle güle kullan**`, new Discord.MessageAttachment('https://images-ext-2.discordapp.net/external/dGJ6omf5OotCf2-tTa-9u01v74yGcZgfw9tV4LSifzA/https/media.discordapp.net/attachments/944711999571492894/975081318197104800/time_Travel.PNG'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
if(args[0] == "lav-makro") {
try{   
if(30000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 30000)
message.author.send(`**iştelav makron güle güle kullan**`, new Discord.MessageAttachment('https://images-ext-1.discordapp.net/external/QY5r7V2C4GoPoaKmy5G2Vzo1KmYdtOEDTYb2cjd2SaE/https/media.discordapp.net/attachments/944711999571492894/975081318595575828/3.PNG'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}

if(args[0] == "andrew-cr") {
try{   
if(150000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 150000)
message.author.send(`**işte vuruş makron güle güle kullan**`, new Discord.MessageAttachment('https://images-ext-2.discordapp.net/external/BLie6x4a11BhVIMk2WOViI_o3yHLioMUiGd-NpXa-GA/https/media.discordapp.net/attachments/944711999571492894/975081318826258493/5.PNG'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
if(args[0] == "blok-makro") {
try{   
if(100000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 100000)
message.author.send(`**işte blok makron güle güle kullan**`, new Discord.MessageAttachment('https://images-ext-1.discordapp.net/external/gSyswqgjar4dMeBoFZphDWv03cSmbqijr_O5Sq1T6gA/https/media.discordapp.net/attachments/944711999571492894/975081319140819005/7.PNG'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
 
 if(args[0] == "olta-regedit") {
try{   
if(300000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 300000)
message.author.send(`**işte olta regeditin güle güle kullan**`, new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/954829396466884678/979374966137049098/HzlOlta.reg'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
 
  
 if(args[0] == "olta-makro") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte olta makron güle güle kullan**`, new Discord.MessageAttachment('https://media.discordapp.net/attachments/944711999571492894/975081319438618664/ag.PNG?width=291&height=400'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
    
 if(args[0] == "sekmeme-regedit") {
try{   
if(450000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 450000)
message.author.send(`**işte sekmeme regeditin güle güle kullan**`, new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/954829396466884678/979406034126913606/0_kb_regedits.reg'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
 
   if(args[0] == "pvp-regedit") {
try{   
if(1000000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 1000000)
message.author.send(`https://www.dosya.tc/server36/ic5yi4/rovers.rar.html`, new Discord.MessageAttachment('https://frpnet.net/wp-content/uploads/2016/02/deadpool-gif.gif'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
 

     if(args[0] == "hit-regedit") {
try{   
if(150000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 150000)
message.author.send(`**işte hit regeditin güle güle kullan**`, new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/954829396466884678/979405930666025000/elqse_kb__reach__hit_detection_reg.reg'))
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}  

       if(args[0] == "jumplats") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte jumplats oyunun iyi oyunlar**\nhttps://discord.com/store/skus/618864578545319956/jumplats`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
         if(args[0] == "warframe") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte warframe  oyunun iyi oyunlar**\nhttps://discordapp.com/store/skus/494959992483348480/warframe`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
           if(args[0] == "zombsroyale-io") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte zombsroyale-io  oyunun iyi oyunlar**\nhttps://discord.com/store/skus/519338998791929866/zombsroyale-io`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
             if(args[0] == "light-from-the-bu") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte light-from-the-bu oyunun iyi oyunlar**\nhttps://discord.com/store/skus/594073512906588179/light-from-the-bu`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
               if(args[0] == "bloodlines-of-prima") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte bloodlines-of-prima oyunun iyi oyunlar**\nhttps://discord.com/store/skus/417068114480726017/bloodlines-of-prima`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                if(args[0] == "minion-masters") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte minion-masters oyunun iyi oyunlar**\nhttps://discordapp.com/store/skus/488607666231443456/minion-masters`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                  if(args[0] == "forestir") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte forestir oyunun iyi oyunlar**\nhttps://discord.com/store/skus/554072621000556584/forestir`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                    if(args[0] == "pickcrafter") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte pickcrafter oyunun iyi oyunlar**\nhttps://discordapp.com/store/skus/560643262424285194/pickcrafter`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                      if(args[0] == "sandboxes") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte sandboxes oyunun iyi oyunlar**\nhttps://discord.com/store/skus/519249930611589141/sandboxes`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                        if(args[0] == "realm-royale") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte realm-royale oyunun iyi oyunlar**\nhttps://discordapp.com/store/skus/518088627234930688/realm-royale`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                          if(args[0] == "it-s-hard-being-a-dog") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte it-s-hard-being-a-dog oyunun iyi oyunlar**\nhttps://discord.com/store/skus/565994833953554432/it-s-hard-being-a-dog`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                            if(args[0] == "scp-secret-laboratory") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte scp-secret-laboratory oyunun iyi oyunlar**\nhttps://discord.com/store/skus/420676877766623232/scp-secret-laboratory`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
                              if(args[0] == "heroes-generals-wwii") {
try{   
if(120000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 120000)
message.author.send(`**işte heroes-generals-wwii oyunun iyi oyunlar**\nhttps://discordapp.com/store/skus/550277544025522176/heroes-generals-wwii`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}
  
if(args[0] == "owo-cash") {
try{   
if(1000000 > await data.fetch(`para_${message.author.id}`)) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bu öğeyi satın almak için cüzdanında ${await data.fetch(`para_${message.author.id}`) ? "sadece " + await data.fetch(`para_${message.author.id}`) + ' Rovcoin <a:rovcoin:972225897409155142> var!' : 'hiç rovcoinin yok!'}`))
await data.add(`para_${message.author.id}`,- 1000000)
message.author.send(`OwO Cash isteğin kuruculara bildirildi tahmini teslim süresi 15dk!`)
let Atahan = client.users.cache.get("813799329407041576")
Atahan.send(`${Atahan} Reis ${message.author} (${message.author.tag}) (${message.author.id}), owo isteğinde bulundu.`)
client.channels.cache.get("954829396466884678").send(`${Atahan} Reis ${message.author} (${message.author.tag}) (${message.author.id}), owo isteğinde bulundu.`)
message.react('<a:Roverstik:960136753639993365>')
}catch{message.channel.send('bir hata oluştu')
}}  

  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'market',
     cooldown: 5 
};
