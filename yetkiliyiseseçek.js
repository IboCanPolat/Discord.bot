const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  let rol = message.guild.roles.get('YETKİLİ ROL ID');
  if (message.member.voiceChannel) rol.members.filter(uye => uye.voiceChannel).forEach(uye => uye.setVoiceChannel(message.member.voiceChannel.id))
  const embed = new Discord.RichEmbed()
  .setColor("RED")
  .setTimestamp()
  .setDescription("**" + `${rol.members.filter(d => !d.bot).size}` + "**" + ` adet yetkiliden, ses kanalında bulunan ` + "**" + `${rol.members.filter(b => b.voiceChannel).size}` + "**" + ` adet kişiyi çektim`)
  .setAuthor("Bot", message.author.displayAvatarURL)
  message.channel.send(embed)
  message.guild.owner.send(`Hey Sahip! Az önce ` + "`" + `!yetkilicek`+ "`" + ` komutu kullanıldı ve bu yüzden ` + "**" + `${rol.members.filter(b => b.voiceChannel).size}` + "**" + ` adet yetkiliyi komutu kullanan kişinin olduğu ses kanalına taşıdım. Aktif olmayan ve ya herhangi bir ses kanalında olmadığı için çekemediğim kullanıcıların listesi burada:`)
  message.guild.owner.send(`--------------------------------------------`)
  message.guild.owner.send("`" + `${rol.members.filter(c => !c.voiceChannel).map(x => x.user.tag).join('\n')}` + "`")
};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yetkilicek'],
  permLevel: 0
};

exports.help = { 
  name: 'yetkilicek', 
  description: 'Yetkilileri Çeker',
  usage: 'yetkilicek',
  kategori: 'yetkili'
};
