const discord = require('discord.js');
const fs = require('fs');

const http = require('http');
const db = require('quick.db');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN)


client.on('ready', async () => {
  
 client.user.setActivity(`Hello, I'm Ria.`, { type:'WATCHING' })
  
  console.log(`Rovers!!!`)})

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.on("ready", async () => {
setInterval(() => {

client.users.cache.filter(uye => db.get(`para_${uye.id}`)+db.get(`bankapara_${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`para_${uye2.id}`)+db.get(`bankapara_${uye2.id}`))-Number(db.get(`para_${uye1.id}`)+db.get(`bankapara_${uye1.id}`))).slice(0, 3).map((uye, index) => {
 
db.add(`bankapara_${uye.id}`, 25000)})

}, 1000 * 60 * 60 * 12)//1 ay olmuyo amk

setInterval(() => {

client.users.cache.filter(uye => db.get(`almasınırı_${uye.id}`)+db.get(`atmasınırı_${uye.id}`)).forEach(x => db.delete(`atmasınırı_${x.id}`)+db.delete(`almasınırı_${x.id}`))

}, 1000 * 60 * 60 * 24)//1 ay olmuyo amk
})
//===============================================================================\\
 client.on("guildMemberAdd", async member => {
  let tag = await db.fetch(`ototag_${member.guild.id}`);
  let kanal = await db.fetch(`ototagk_${member.guild.id}`);
  let msj = await db.fetch(`ototagmsj_${member.guild.id}`);
  if (!tag) return;
  if (!kanal) return;

  if (!msj) {
    member.setNickname(`${tag} | ${member.user.username}`)
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `<a:tik:627830420070727690> - :loudspeaker: **@${member.user.tag}** adlı şahsa tag verildi!`
      );
    client.channels.get(kanal).send(embed);
    return;
  } else {
    var msj2 = msj
      .replace(`-uye-`, `${member.user.username}`)
      .replace(`-tag-`, `${tag}`)
    member.setNickname(msj2)
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`<a:tik:627830420070727690> - :loudspeaker: **@${member.user.tag}** adlı şahsa tag verildi!`);
    client.channels.get(kanal).send(embed);
    return;
  }
});
//===============================================================================\\
client.on("message", (msg) => {
  const westrabumbe = new Discord.MessageEmbed()
    .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
    .setColor("#18191c")
    .setTitle("<a:Roverspanda:954522753950687232> Yardım Mesajım \n ")
    .addField(
      "\n**Galiba benden yardım istiyorsun? O zaman sana yardım edeyim.**\n",
      "**\n`.yardım` yazarak benim `Tüm komutlarımı Görebilirsin` ve Aşşağıdaki `Destek sunucusuna gelerek botun sahibinden yardım alabilirsin.`**"
    )
    .addField("**➥ Link**", "[ Destek Sunucu](https://discord.gg/aGNq3FHKpt)")
    .setImage(
      "https://media.discordapp.net/attachments/939634397487976569/956555021590351952/standard_9.gif?width=374&height=48"
    )
    .setFooter(
      `${msg.author.username} Yardım edebildiysem çok mutluyum.`,
      msg.author.avatarURL()
    );
  if (
    msg.content.includes(`<@${client.user.id}>`) ||
    msg.content.includes(`<@!${client.user.id}>`)
  ) {
    msg.channel.send(westrabumbe).then(a => a.delete({timeout: 600000}))
  }
});

//===============================================================================\\
 const backup = () => {
    fs.copyFile('./json.sqlite', `./backups/yedekleme • ${moment().format('D-M-YYYY • H.mm.ss')} • laura.sqlite`, err => {
        if (err) return console.log(err);
        console.log('Veritabanını yedekledim.');
    });
};

client.on('ready', () => {
    setInterval(() => backup(), 1000 * 60 * 60 * 24); // Günde bir kere yedekler.
});
//===============================================================================\\


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Destek/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Destek komutu Yükleniyor...`);
    files.forEach(f => {

        let props = require(`./Destek/${f}`);
        log(`Destek Komutu Yüklendi: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Destek/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


//===============================================================================\\

//===============================================================================\\

client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.db = require("quick.db");
client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // XP
    exp(message);
function exp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || (Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let exp = client.db.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);
            message.channel.send(`:tada: ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`).then(a => a.delete({timeout: 6000}))
        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
  
}
});

//===============================================================================\\
// EKLENİNCE MESAJ // Ufqzyn#0147
client.on("guildCreate", async guild => {
  guild.owner.send("<@" + guild.owner.id + "> **Rovers** Botu eklemeniz bizi sevindirdi altta yazanlarla botu kullanabilir VEYA sorularınızı bize sorabilirsiniz! \n- Botun prefixi(.) `.yardım` ya da <@953748607494914168> \n- Bize birşey bildirmek için `.bildir` \n- Bağlantılar: https://discord.gg/NRKPfKHfY5 \n- Bağlantılar: https://discord.gg/ZAEGbCvty8");
});
// EKLENİNCE MESAJ // Ufqzyn#0147
// ATILINCA MESAJ // Ufqzyn#0147
client.on("guildDelete", async guild => {
  guild.owner.send("<@" + guild.owner.id + "> **Rovers** botu atmanız bizi üzdü alttaki bağlantılardan bize ulaşarak sıkıntını sorabilirsin! \n- Bağlantılar: https://discord.gg/NRKPfKHfY5 \n- Bağlantılar: https://discord.gg/ZAEGbCvty8");
});
// ATILINCA MESAJ // Ufqzyn#0147
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Ekonomi/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Ekonomi komutu Yükleniyor...`);
    files.forEach(f => {//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

        let props = require(`./Ekonomi/${f}`);
        log(`Ekonomi Komutu Yüklendi: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\


client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Ekonomi/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//===============================================================================\\

client.on("guildMemberAdd", async member => {
  if (db.has(`otorol_${member.guild.id}`)) {
    var rol = db.fetch(`otorol_${member.guild.id}`);

    member.roles.add(rol);
  } else {
    return;
  }

  if (db.has(`logkanal_${member.guild.id}`)) {
    var kanal = client.channels.cache.get(db.fetch(`logkanal_${member.guild.id}`));
    let kisi = `${member.user.username}`
    let roll = `<@&${rol}>`
    const embed = new Discord.MessageEmbed()
     .setTitle("✔️ Başarıyla Rol Verildi")
     .addField("🏷️ Rol Verilen Kişi: ", member.user.tag)
    .addField("🗂️ Verilen Rol: ", roll)
    .setColor("RANDOM")
    .setTimestamp()
      //.setFooter(`Anka | 2021`);

    kanal.send(embed);
  } else {
    return;
  }
});

//===============================================================================\\
const DBL = require('dblapi.js');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1Mzc0ODYwNzQ5NDkxNDE2OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4MTMzODM0fQ.G9PYTKOB_fwl9HYWMlCBMiWQi3CFWYtFa5UJXxU2Xcc', { webhookPort: 5000, webhookAuth: 'DBLWEBHOOKŞIFRE' });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook: http://${hook.hostname}:${hook.port}${hook.path}`);
})
dbl.webhook.on('vote', vote => {
      client.channels.get('974782701297086534').createWebhook(vote.user.username)
    .then(webhook => webhook.edit(vote.user.username)
        .then(wb => {
            const hook = new Discord.WebhookClient('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1Mzc0ODYwNzQ5NDkxNDE2OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4MTMzODM0fQ.G9PYTKOB_fwl9HYWMlCBMiWQi3CFWYtFa5UJXxU2Xcc', wb.id, wb.token);
  
  hook.send(`\`${vote.user}\` Oy verdi!`);
  hook.delete()
}))
          });
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Oyunlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Oyun komutu Yükleniyor...`);
    files.forEach(f => {
        let props = require(`./Oyunlar/${f}`);
        log(`Oyun Komutu Yüklendi: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\


client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Oyunlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\


//--------------------------------- SPONSOR BY KREXY ---------------------------------\\

client.on("guildMemberAdd", async (member) => {
  let kanal = await db.fetch(`hgkanal_${member.guild.id}`);
  if (!kanal || !kanal) return;
  let sonuç = kanal - member.guild.memberCount;
  let user = client.users.cache.get(member.id);
  let yetkilirole = db.fetch(`yetkilirole_${member.guild.id}`);
  require("moment-duration-format");
  let kurulus = new Date().getTime() - user.createdAt.getTime();
  var kontrol;
  if (kurulus < 1296000000)
    kontrol = "**Güvenilir Değil!** <a:Roverdkkat:954520247409467403> ";
  if (kurulus > 1296000000)
    kontrol = "**Güvenilir!** <a:Roversevet:954517423036452914> ";
  moment.locale("tr");
  const embed = new Discord.MessageEmbed()
    .setTitle(member.guild.name + ` ** Sunucusuna Hoş Geldin!**  `)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setImage(
      `https://media.discordapp.net/attachments/608711485849337856/974297534774251530/cad35d085f5738746021e5b7fd7f855d.gif?width=375&height=211`
    )
    .setDescription(`<a:Roversuu:954517422214377472> ${member} **Bizde Seni Bekliyorduk.. 👋 **
  \n** <a:Rovers:954517410088632400> Seninle Birlikte** \`${
    member.guild.memberCount
  }\` **Kişiyiz!**
  \n <a:Roversyuklenyor:954517429034311760> ** Kayıt olmak için yetkilileri beklemen yeterlidir.** 
  \n <a:Roversyldz:954517421971079199> **Hesap Durumu** ${moment(member.user.createdAt).format(
    "**`DD MMMM YYYY dddd (hh:mm:ss)`**"
  )} - ${kontrol}`);
  client.channels.cache
    .get(kanal)
    .send(`<@&${yetkilirole}>**,** ${member} **Sunucuya giriş yaptı.**`);
  client.channels.cache.get(kanal).send(embed);

  return;
});
