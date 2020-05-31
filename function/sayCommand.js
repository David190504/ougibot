module.exports =

function sayCommand(arguments, msg) {
    if (msg.content.includes("@everyone") || msg.content.includes("@here")) {
      msg.channel.send("Ora ora ora ora! Remove that massive ping.");
      return
    }

    const sayMessage = arguments.join(" ");

    while(sayMessage.startsWith(' ')) {
      sayMessage = sayMessage.substring(1, sayMessage.length)
    }

    if (sayMessage.length <= 0) {
      var options = ["Say what ???", "Can anyone lend me some emptiness? This homie wants some but I ate all of mine yesterday.", "Imagine talking", "Ara ara", "?"];
      var response = options[Math.floor(Math.random()*options.length)];
      msg.channel.send(response).catch(console.error);
      return
    }

    if (sayMessage.includes("<@") && msg.content.includes(">")) {
      msg.channel.send("Avoid pings. What? Isn't that a ping?");
      return
    }

    var finalMessage = sayMessage.toString();
    msg.delete().catch(O_o=>{});
    msg.channel.send(finalMessage).catch(console.error);
}
