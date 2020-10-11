const Discord = require('discord.js');

let rolid = "JAİL ROL İD"; 
exports.run = async (client, message, args) => {
  if (!message.member.roles.has("JAİL ATABİLCEK ROL İD"))
    return message.channel.send(
      `Bu komutu kullanabilmek için \`Jail Hammer\` yetkisine sahip olmasınız!`
    );
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("Hapishaneye Atılacak Üyeyi Etiketleyin!");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.reply(`:x: Yetkili bir kişiyi jaile atamam \nDoğru Kullanım; \`.jail <@kullanıcı>\``)
    if(rolid.match(/(\d{17,19})/g)) {
        member.roles.forEach(role => member.removeRole(role));
        member.addRole(rolid);
    }
    else member.roles.forEach(role => member.removeRole(role));
  message.react('715135485269245982')
        const embed  = new Discord.RichEmbed()
    .setImage("https://cdntr1.img.sputniknews.com/img/103844/28/1038442832_0:11:1024:564_1000x541_80_0_0_ff3c177f5b052f2b8e08489ae9e1477a.jpg")
    .setAuthor('Jail Operasyonu')
    .setDescription(`Kullanıcının Tüm Rolleri Alındı Ve \`Jail\` Rolü Verildi <a:ashena_evett:715135485269245982>`)
    .setFooter(`Komutu Kullanan (${message.author.username})`)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed) .then(msg => msg.delete(5000));
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["uçur"],
    permLevel: 0
};

exports.help = {
    name: "jail",
    description: 'Birini jaillersiniz.',
    usage: 'jail <kullanıcı>'
};
