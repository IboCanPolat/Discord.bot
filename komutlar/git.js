const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voiceChannel)
    return message.channel.send("**İlk Önce Sesli Bir Kanala Bağlan!**") .then(msg => msg.delete(5000));
  const kisi = message.mentions.members.first();
  if (!kisi)
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Yanına Gitmek İstediğin Kişiyi Etiketlemelisin!")
    );
  const filter = (reaction, user) => {
    return ["✅", "❌"].includes(reaction.emoji.name) && user.id === kisi.id;
  };
  if (kisi.user.bot)
    return message.channel.send(`**<@${message.author.id}> Bir Botun Yanına Gidemezsin!**`) .then(msg => msg.delete(8000));
  if (message.member.voiceChannel.id === kisi.voiceChannel.id)
    return message.channel.send(
      `<@${message.author.id}> Zaten Belirttiğin Kişi ile Aynı Kanaldasınız!`
    );
  if (!kisi.voiceChannel)
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Bu Kişi Bir Ses Kanalına Bağlı Değil!")
        .setColor("RANDOM")
    );

  message.channel
    .send(
      `**<@${kisi.id}>, <@${message.author.id}> Senin Yanına Gelmek İstiyor Onaylıyormusun?**`
    )
    .then(m =>
      m
        .react("✅")
        .then(a => m.react("❌"))
        .then(s =>
          m
            .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
            .then(collected => {
              const reaction = collected.first();

              if (reaction.emoji.name === "✅") {
                message.channel.send(
                  "**<@" +
                    message.author.id +
                    "> Belirttiğin Kişinin Yanına Taşındın!**"
                );
                message.member.setVoiceChannel(kisi.voiceChannel.id);
              } else {
                message.channel.send(
                  "**<@" +
                    message.author.id +
                    "> Belirttiğin Kişi Yanına Gelmeni İstemiyor!**" 
                );
              }
            })
        )
    );
};
