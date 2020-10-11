const Discord = require('discord.js');

  const cevap = [
  "Seviyorum",
  "Sevmiyorum",
  "Aşığım Sana"
 ]
  
exports.run = function(client, message) {

const seviyorum = cevap[Math.floor(Math.random() * cevap.length)];

message.channel.send(
new Discord.RichEmbed()
  
  
  .setTitle("Deunes - Beni Seviyor musun?")
  .setDescription(seviyorum)
  .setFooter("Deunes Bot - Beni Seviyor musun?")
  .setColor("RANDOM")
  .setTimestamp()
  
  )
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'beniseviyomusun',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Bota, Sizi sevip sevmediğini sorarsınız',//Komutun Açıklaması
  kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-eğlence
  usage: 'beniseviyomusun' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
