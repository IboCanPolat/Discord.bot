const Discord = require('discord.js');
exports.run = async (client, message, args) => {
     if (!message.member.voiceChannel) { return message.channel.send("Ses kanalında değilsin!"); }
  let channel = args[0];
   let channel2 = client.channels.get(args[0]);
  if (!channel) return message.channel.send('Hangi kanalda bulunan kullanıcıların taşınacağını belirtmelisin. _.topluçek <KanalID> <HedefKanalID>_').then(m =>m.delete(15000))
  let targetchannel = args[1];
  if (!targetchannel) return message.channel.send('Hedef kanalı belirtmelisin. .topluçek <KanalID> <HedefKanalID>_').then(m => m.delete(15000))
 let targetchannel2 = client.channels.get(args[1]);

  if(targetchannel2.full) return message.channel.send("Etiketlenen hedef kanal dolu!").then(message.react(':no_entry:')).then(m => m.delete(15000))

channel2.members.forEach(m => m.setVoiceChannel(targetchannel2));
   message.react(':white_check_mark:')
   const targetchannelname = targetchannel2.name;
  let embed= new Discord.RichEmbed()
    .setColor("006060")
    .setDescription(message.author+` tarafından **${channel2.name}** kanalındaki kullanıcılar **`+targetchannelname+`** sesli kanalına çekildi.`)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
   .setTimestamp()  
    message.channel.send(embed).then(m =>m.delete(15000))
  message.react('emoji id')
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanaldakileritaşı"],
  permLevel: 0
}
exports.help = {
  name: 'topluçek',
  description: " ",
  usage: ' '
}
