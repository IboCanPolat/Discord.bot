client.on(`userUpdate`, (oldUser, newUser) => {
 
  let kişi = client.users.get(oldUser.id)
  let avatar = kişi.avatarURL.split('?')[0]
  let kanal = client.channels.find(ch => ch.id === 'gifsizkanalid')/// Gifsiz Avatar Kanal İd
  let kanal1 = client.channels.find(ch => ch.id === 'giflikanalid')/// Gifli Avatar Kanal İd
if(avatar.endsWith('.png')) {
  const emb = new Discord.RichEmbed()
  .setImage(avatar)
  .setFooter(`${kişi.tag}`)
  .setTimestamp()
  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL})!`)
  kanal.send(emb)
}
if(avatar.endsWith('.gif')) {
  const emb = new Discord.RichEmbed()
  .setImage(avatar)
  .setFooter(`${kişi.tag}`)
  .setTimestamp()
  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL})!`)
  kanal1.send(emb)
}
})

client.login(ayarlar.token);
