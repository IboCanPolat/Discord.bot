const { RichEmbed } = require('discord.js');
const superagent = require('superagent');


module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get("https://random.dog/woof.json"); 
  
   let dogembed = new RichEmbed()
    .setDescription('Hav Hav :dog:')
    .setColor('#ff6a00')
    .setImage(body.url)
   
   message.channel.send(dogembed)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
  kategori:'eğlence',
};

exports.help = {
 name: 'köpek',
 description: 'Rastgele köpek fotoürafları atar.',
 usage: 'kaslı'
};
