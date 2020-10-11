const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(" **Lütfen Silinicek Mesaj Miktarını Yazın!** :x:") .then(msg => msg.delete(5000));
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Başarılı! Toplamda **${args[0]}** Adet Mesajı Uzaya Fırlattım :white_check_mark:`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle','clear','sil'],
  permLevel: 2,
  kategori: "moderasyon"
};

exports.help = {
  komut: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
