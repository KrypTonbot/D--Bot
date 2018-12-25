const Discord = require('discord.js');
const client = new Discord.Client();

// playing
client.on('ready', () => {
client.user.setGame(_help,'https://www.twitch.tv/tarikrs%27);
});
  
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


client.login('NTI3MDEyODk3MjAxNTg2MTkx.DwNizw.NfSNkQzlaKZPXQZWQ1V1oVuQTDI'); 
