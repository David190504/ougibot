module.exports =

function rootCommands(msg) {
  if (msg.author.id == "504307125653078027") {
    var options = ["Ara ara, onii-chan. You already know only David can access root commands.", "N-nani? Stop it, onii-chan, what are you doing?!", "Nani? Nani? Nani? What's going on? Why is onii-chan calling me out, using my root commands prefix and trying to peek at them?", "Aquí no, chikistrikis.", "あらあら、Gus、何度も何度も言って来ましたがそこで私に触れるのをやめる。"];
    var response = options[Math.floor(Math.random()*options.length)];
    msg.channel.send(response).then().catch(console.error);
    return
  } else if (msg.author.id !== "265257341967007758") {
    var options = ["Ara ara! Only David-senpai is allowed to access my root commands", "N-nani? Stop it, my senpai. What are you doing?", "Nani? Nani? Nani? What's going on? Why is my senpai calling me out, using my root commands prefix and trying to peek at them?"];
    var response = options[Math.floor(Math.random()*options.length)];
    msg.channel.send(response).then().catch(console.error);
    return
  } else if (msg.author.id == "265257341967007758") {
    while (msg.content.includes('  ')) {
      msg.content = msg.content.replace('  ', ' ')
    }
    var fullCommand = msg.content.substr(4)
    var splitCommand = fullCommand.split(" ")
    var primaryCommand = splitCommand[1]
    var arguments = splitCommand.slice(2)

    var event = new Date();
    console.log("__**" + event.toLocaleTimeString('en-US') + "**__\n:warning: [ROOT] Command received: " + primaryCommand + "\nArguments: " + arguments + "\nExecuted by: `" + msg.author.tag + "`");
    console.log("\n")

    if (primaryCommand == "help") {
        ougi.helpRootCommand(arguments, msg)
    } else if (primaryCommand == "do") {
        ougi.doRootCommand(arguments, msg)
    } else if (primaryCommand == "status") {
        ougi.statusRootCommand(arguments, msg)
    } else if (primaryCommand == "log") {
        ougi.logRootCommand(arguments, msg)
    } else if (primaryCommand == "vibe_check") {
        ougi.vibeCheckReallyHard(arguments, msg)
    } else if (primaryCommand == "haunt") {
        ougi.hauntRootCommand(arguments, msg)
    } else if (primaryCommand == "learn") {
        ougi.talkLearn(arguments, msg)
    } else if (primaryCommand == "plsTweet") {
        ougi.plsTweet(arguments, msg)
    } else {
        ougi.undefinedCommand(arguments, msg)
    }
  }
}
