vconst Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':x: | Uyarı | :x:', 'kick adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply(':x: | Atılacak Kişiyi Etiketleyiniz.').catch(console.error);
    if(!message.member.roles.has("KİCK YETKİSİ İD")) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`);

  if (!message.guild.member(user).kickable) return message.reply(':x: | Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();
  message.channel.send(`${user.tag} Adlı Kullanıcı **${reason}** Sebebiyle ${message.author} Tarafından Sunucudan Atıldı!`)
           message.react('715135505632722987');


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
