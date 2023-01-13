const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
  var guildId = "946065601430974514";
var guild = client.guilds.cache.get(guildId)

if (message.guild.id !== guildId) {
  return message.channel.send("Bu komut yanlızca **"+guild.name+"** sunucusunda kullanabilmektedir. \n Burada kullanabilirsiniz: https://discord.gg/ntSpKmASqr")
}
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#18191c').setDescription(`**-skin @Rovers#7095**`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://media.discordapp.net/attachments/946904905661182003/959780905134747689/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959780179025207346/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959780179285274654/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959778651476475994/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959778184767897622/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959778125972119602/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959778126240563300/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959777302294724658/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959777302550556752/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959777174079045682/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/959776968872710155/unknown.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459587449741352/1141tsvavfaf.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459586967404584/boba_123.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459586682175548/Risu.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459439894114304/1131.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459270716850267/97979797.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459273061490728/979797.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459172750524466/242422.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459173027328140/24242.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459070887649320/678678678.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958459071139287110/678678.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958458611644895372/33__33__33__33_eto_vse__2.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958458611909132308/33__33__33__33_eto_vse.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958458515805053018/Bez_nazvania181_20220327101715_1__1.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958458516052529242/kOllAbsKiySkiNS.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958458368907939920/Bez_nazvania62_20220326104252.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958458009321898064/Bez_nazvania32_20220319143634.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457926333390858/Bez_nazvania164_20220317161646.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457785752899724/Bez_nazvania89_20220313205955.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457679892856882/33__33__33__33__33__33__33__33_dau_1.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457679657984050/33__33__33__33__33__33__33__33_dau.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457587454595132/Bez_nazvania483_20220312155403.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457587207123015/Bez_nazvania483_20220312155309.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457282310586448/Bez_nazvania479_20220306173803.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457126903242752/Bez_nazvania473_20220303231144.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958457035677118544/krasnaya_tnya.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/958456846920851466/Bez_nazvania85_20220130165713.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949783697144578129/kdfkf.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949783696867725403/lisa_1.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949783521067667576/leneuka_1.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949783384970887199/080758.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949783311096614992/Bez_nazvania137_20210531183650.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949783244235231393/cykeurd_1__1__1.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949783243975180288/esgeg_ajg_1.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782981864747048/KBVGGLAEI.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782982078627870/SJVGBAELG.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782925979844638/Bez_nazvania166_20210628211444.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782782115213312/Bez_nazvania176_20210703203302.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782182396841984/Bez_nazvania189_20210707101237.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782140185350184/Bez_nazvania194_20210706005524.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782139854008360/Bez_nazvania195_20210706225115.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782065061167205/Bez_nazvania198_20210707150449.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949782025173336114/Bez_nazvania201_20210707171240.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949781970571894804/Bez_nazvania205_20210710144017.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949781916947710002/Bez_nazvania209_20210711133614.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949781854666493973/Bez_nazvania215_20210712202639.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949781596398026762/Bez_nazvania221_20210713155840.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949781571563552858/Bez_nazvania207_20210715203234.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949781471646871563/Bez_nazvania233_20210717131856.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949781412230340678/0092084343.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779763155845140/13920185923.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779812376018994/93486855.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779528115425301/5863947651.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779378882109502/Bez_nazvania416_20210817140204.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779322594553866/Bez_nazvania126_20210825181416.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779223491534948/33_21049.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779124032000020/Bez_nazvania464_20210829011619.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779043593617508/Bez_nazvania301_20210829193931.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949779043283247154/Bez_nazvania306_20210830180338.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778810289676348/33__33__33_1213412.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778760415215647/Bez_nazvania131_20210904100146.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778651459752058/Bez_nazvania128_20210910183709.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778554592301066/zxzxzxzxzxz.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778503342104666/11111122.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778442424049695/utsutsuyv2.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778442226905169/tsutsutsuyf.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778370818875422/novoev.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778371024416768/novoe_3.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778371292848168/novoe_2.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778371510947860/sdsdasd.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778165553823764/malchik3.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778165797122138/malchik2.png?width=819&height=410",
  "https://media.discordapp.net/attachments/946904905661182003/949778165352529990/malchik1.png?width=819&height=410",

];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Sunucuya gel göstereyim').setDescription('https://discord.gg/sdYvecySq4')).then(a => a.delete({timeout: 100000}))
message.channel.send(`> ${message.author} **işte skinin.**`, new Discord.MessageAttachment(resimler)).then(a => a.delete({timeout: 10000}))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'skin'
};