const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`); 

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
  if(!args[0]) {
const mbed = new Discord.RichEmbed()     
.setAuthor("Deunes", client.user.avatarURL)
.setTitle("Deunes")
.setDescription("Tek Yapman Gereken h+güvenlik **#kanal** Yazmak!")
.addField("Ne İşe Yarar?", `Bu Sizin Sunucunuzda Reklam Yapacak Veya Zararlı Üyeleri Tespit Etmeye Yarar. 
Bu Üyeler Genelde Zararlı Üyelerdir.
Açtıktan Sonra Otomatik Aktif Olur. Başka Birşey Yazmanıza Gerek Yok
**Kapatmak için, h+güvenlik sıfırla yazınız.**
`)
.setColor("BLUE")
.setTimestamp()
.setFooter("")
message.channel.send(mbed)
    }
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(` Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`h+güvenlik #kanal\``);
    
   db.delete(`guvenlik${message.guild.id}`)
   message.channel.send(`Güvenlik başarıyla kapatıldı.`);
  
    return
  }
  
  
 

   db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(`Güvenlik başarıyla ${logk} olarak ayarlandı`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlikseviyesi','güvenlik','guvenlik'],
  kategori: "ayarlar",
  permLevel: 0

};

module.exports.help = {
  name: 'güvenlik-seviyesi',
  description: 'Güvenlik log kanalını seçip, sunucunuza gelen kullanıcının şüpheli/güvenli... olduğunu görün!',
  usage: ''
};
