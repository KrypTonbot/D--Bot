const Discord = require('discord.js');
const client = new Discord.Client();

  var prefix = "_";//Toxic Codes

client.on('message', message => {
  let anything = [
    "وعليكم السلام",
    "ياهلا والله",
    "وعليكم السلام ورحمة الله وبركاته",
    "مرحبا بك في السيرفر"
    
    
  ]
  if(message.content === 'السلام عليكم'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('527003552632274944').roles .find("name", "Wow").setColor("RANDOM");
  };
  setInterval(lol, 5000);
});

client.on('message', async msg => {//Toxic Codes
  if(msg.content.startsWith('_leaveall')) {//Toxic Codes
    if(msg.author.id !== 'Your ID here...') return;
    client.guilds.forEach(guild => {//Toxic Codes
      guild.leave();//Toxic Codes
    });//Toxic Codes
    msg.channel.send(`تم اخراج من كل السيرفرات..`);
  }//Toxic Codes
});//Toxic Codes

client.login('NTI3MDEyODk3MjAxNTg2MTkx.DwNizw.NfSNkQzlaKZPXQZWQ1V1oVuQTDI'); 
