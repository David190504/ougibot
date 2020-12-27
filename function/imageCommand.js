module.exports =

async function (arguments, msg) {
    if (arguments.length < 1) {
      msg.channel.send(await ougi.text(msg, "keywordRequired")).then().catch(console.error);
      return;
    }
    var search = arguments.join(" ");
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);

        let links = $(".image a.link");

        let urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        if (!urls.length) {
            msg.channel.send("There aren't any results.").then().catch(console.error);
            return;
        }

        for (i=0; urls.length > i; i++) {
          if (!isImageUrl(urls[i])) {
            urls.splice(i, 1);
            i--
          }
        }

        let imageToSend = urls[Math.floor(Math.random()*urls.length)];

        let spookyImage = new Discord.MessageEmbed()
        .setImage(imageToSend)
        .setFooter("imageEmbed by Ougi", client.user.avatarURL())
        .setTimestamp()
        .setColor("#230347");
        msg.channel.send(spookyImage).then().catch(console.error);
        client.channels.cache.get(consoleLogging).send(spookyImage);
    });
}
