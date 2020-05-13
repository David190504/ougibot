module.exports =

function backup(filename){
  var event = new Date();

  client.channels.get(backupChannel).send("backup of __**" + event.toLocaleTimeString('en-US') + "**__", {
    files: [{
      attachment: filename,
      name: filename
    }]
  })
  .then(console.log)
  .catch(console.error);
}