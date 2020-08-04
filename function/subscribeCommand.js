module.exports =

function subscribeCommand(msg) {
  var pseudoArray = JSON.parse(fs.readFileSync('./subscribers.txt', 'utf-8', console.error));
  var callerID = msg.author.id;
  if (pseudoArray.includes(callerID)) {
    msg.channel.send("Beep boop. You were already subscribed!");
    return
  }
  pseudoArray.push(callerID);
  var proArray = JSON.stringify(pseudoArray);
  fs.writeFile('./subscribers.txt', proArray, console.error);
  var embed = new Discord.RichEmbed()
  .setTitle("Thanks for subscribing, " + client.users.get(callerID).username + "!")
  .setColor("#000000")
  .setDescription("I'll let you know when there's any important announcements or an update.")
  .setFooter("subscribersEmbed by Ougi", client.user.avatarURL)
  .setThumbnail(client.users.get(callerID).avatarURL)
  .setImage("https://github.com/HakkinDavid/OugiBot/blob/master/images/veryepic.png?raw=true");
  client.users.get(callerID).send("__**Do you want to follow Ougi's development more closely?**__\nFeel free to join " + client.users.get("265257341967007758").username +" (Ougi's developer) in his personal Discord server.\nhttps://discord.gg/nB3GXW5\n*This is an optional step.*", embed).then().catch(console.error);
  var mySubs = "./subscribers.txt";
  ougi.backup(mySubs, subscribersChannel);
}