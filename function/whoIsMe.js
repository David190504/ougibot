module.exports =

function whoIsMe(arguments, msg) {
  var embed = new Discord.RichEmbed()
  .setTitle("by " + client.users.get("265257341967007758").tag)
  .setAuthor("Ougi [BOT]", client.user.avatarURL)
  .setColor("#000000")
  .setDescription("A simple chat bot with an undefined personality: If you had to describe it on the shortest phrase, it would be \"Oshino Ougi is Oshino Ougi\", even a whole encyclopedia about Ougi would just require that sentence.")
  .setFooter("HauntedEmbed by Ougi", client.user.avatarURL)
  .setImage()
  .setThumbnail(client.users.get("265257341967007758").avatarURL)
  .setURL("https://discordapp.com/users/265257341967007758")
  .addField("Who's Ougi?", "Ougi.")
  .addField("What's Ougi's prefix?", "`ougi`")
  .addField("What does Ougi do?", "Ask Ougi.")
  .addField("What does Ougi know?", "Ougi doesn't know anything, it is you who knows.")
  .addField("What does Ougi log in it's console?", "Ougi only logs commands containing it's prefix with their respective arguments, plus any erors that might be useful for further debugging.")
  .addField("Can I invite Ougi to my server?", "Of course! Here's Ougi's page link \nhttps://top.gg/bot/629837958123356172")
  .addField("Does Ougi have a GitHub repository?", "Yes, it does. \nGitHub: https://github.com/HakkinDavid/OugiBot")
  .addField("Do you have any feedback?", "David, the developer of Ougi, is always glad to receive it. Feel free to DM him, just click that huge hypermarked blue text from the top (or you could also type his Discord tag).");

  msg.channel.send({embed}).catch(console.error);
}