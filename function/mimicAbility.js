module.exports =

function mimicAbility(msg) {
  var embed = new Discord.RichEmbed()
  .setTitle("Input for mimicAbility")
  .setColor("#FF008C")
  .setFooter("globalLogEmbed by Ougi", client.user.avatarURL);
  
  var uSaid = msg.content.toLowerCase();
  var iSaid = uSaid
  .replace("ougi", msg.author.username)
  .replace("扇忍野", msg.author.username)
  .replace("扇", msg.author.username)
  .replace("<@!629837958123356172>", msg.author.username)
  .replace("<@629837958123356172>", msg.author.username)
  .replace("i am", "you are not")
  .replace("smart", "dumb")
  .replace("cute", "ugly")
  .replace("funny", "unfunny")
  .replace("@everyone", "no one")
  .replace("@here", "unhere");
  if (uSaid == iSaid) {
    iSaid = randomCase(iSaid);
  }
  if (iSaid == "") {
    return
  }
  msg.channel.send(iSaid);
  embed.addField("Content", uSaid);
  embed.addField("Replied", iSaid);
  client.channels.get(consoleLogging).send({embed});
}
