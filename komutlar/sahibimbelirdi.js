client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000//süresini dilediğiniz gibi kısaltabilirsiniz.
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = ayarlar.sahip
          if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setDescription(`<a:deunes_tac:715145456564306001> **İşte Benim Sahibim Burada Aç Yolu!** <@${msg.author.id}>`)
  .setColor("RANDOM")
   msg.channel.send(embed) .then(m => m.delete(6000))
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});
