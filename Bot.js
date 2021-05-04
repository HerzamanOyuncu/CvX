const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Akeyküm Selam Hoşgeldin.');
  }
  if (msg.content.toLowerCase() === 'hoşbulduk') {
    msg.reply('Eeeeee keyifler nasıl?');
  }
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Merhaba hoşgeldin.');
  }
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('Küfür yasak bilmiyomusun 🤬!');
  }
  if (msg.content.toLowerCase() === 'sg') {
    msg.reply('Küfür yasak bilmiyomusun 🤬!');
  }
  if (msg.content.toLowerCase() === 'sie') {
    msg.reply('Küfür yasak bilmiyomusun 🤬!');
  }
  if (msg.content.toLowerCase() === 'y!yardım') {
    msg.reply('💂🏽‍♂️ Help  , 💂🏽‍♂️ Küfürengel  , 💂🏽‍♂️ spawnengel  , Daha fazlası için Discord Adresimizi Ziyaret edin :https://discord.gg/5CwnJku9 !');
  }
  if (msg.content.toLowerCase() === 'y!ins') {
    msg.reply('https://www.instagram.com/yigit_can_y_57/ Takip edin');
  }
  if (msg.content.toLowerCase() === 'y!kurucu') {
    msg.reply('🎮 Yiğit Can Yüksel 🎮!');
  }
  if (msg.content.toLowerCase() === 'y!help') {
    msg.reply('Şikayetinizi "!Şikayetaç" Yazarak Aça bilirsiniz!');
  }
  if (msg.content.toLowerCase() === 'y!şikayetaç') {
    msg.reply('Şikayetiniz Başarıyla ✔️ açıldı " SS Log " Odasına Şikayet kanıtınızı Ve " @everyone " gibi etiket atarak Şikayetinizi Açınız!');
  }
  exports.run = async(client, message, args) => {

    let sunucuikon = message.guild.iconURL({dynamic: true})
    let codemarefizaman = new Date().getTime() - message.guild.createdAt.getTime()


    const kurulus = moment.duration(codemarefizaman).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)

    message.channel.createInvite().then(inv => {
        const codemarefisbilgi = new Discord.MessageEmbed()
        .setDescription(`
            Sunucu İsmi - **${message.guild.name}**
            Sunucu Kurucusu - ${message.guild.owner}
            Sunucudaki Üye Sayısı - **${message.guild.memberCount}**
            Sunucudaki Rol Sayısı - **${message.guild.roles.cache.size || "Rol Yok"}**
            Sunucudaki Kanal Sayısı - **${message.guild.channels.cache.size}**
            Sunucu Açılalı - ${kurulus} Olmuş
            Sunucu İD'si - **${message.guild.id}**
            Sunucunun Avatar Linki - ${sunucuikon}
            Sunucunun Davet Linki - ${inv.url}
        `)
            .setColor('BLACK')
            .setTitle(`**Sunucu Bilgi**`)
            .setFooter("BY YÜKSEL - Discord Bot Kod Paylaşım", "https://cdn.discordapp.com/attachments/804727061519269935/808057354561650708/images.png")
        message.channel.send(codemarefisbilgi)
    })
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['Sunucu bilgi','SUNUCU BİLGİ','sunucu bilgi','Sunucu-bilgi','Sunucu-Bilgi'],
permLevel: 0
}

exports.help = {
name: 'sunucu-bilgi'
}
if (msg.content.toLowerCase() === 'y!dclink') {
  msg.reply(' Sende Aramıza katıl: https://discord.gg/YfAbBme3 ');
}
if (msg.content.toLowerCase() === 'y!şikayetkabul') {
  msg.reply('Başarıyla Şikayeti Kabul ettiniz Lütfen Durumu "ADMİN LOG " odasına belirtin @here atmayı unutmayın!');
}
if (msg.content.toLowerCase() === 'y!şikayetkapat') {
  msg.reply('Başarıyla Şikayetii Kapatınız!');
}
if (msg.content.toLowerCase() === 'yiğit') {
  msg.reply('Rahatsız etme Lütfen!');
}
if (msg.content.toLowerCase() === 'selamun aleyküm') {
  msg.reply('Aleyküm selam Hoşgeldin.');
}
if (msg.content.toLowerCase() === 'hb') {
  msg.reply('Hoşgeldin Ses Kanalarında durmayı unutma!');
}
if (msg.content.toLowerCase() === 'y!botlink') {
  msg.reply('Sunucuna ekleyip yiğite destek vermeyi Unutma : https://discord.com/oauth2/authorize?client_id=837707751383498792&scope=bot&permissions=8589934591!');
}
});
client.login('ODM3NzA3NzUxMzgzNDk4Nzky.YIweIw.M2N6bf6BMmP6YVk-zbPp4IyinXg');
