const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
client.user.setGame(`_help`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
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

bot.editChannel("527026652509634572", { name : "✲"});
bot.editChannel("527026652509634572", { name : "✲W"});
bot.editChannel("527026652509634572", { name : "✲We"});
bot.editChannel("527026652509634572", { name : "✲Wel"});
bot.editChannel("527026652509634572", { name : "✲Welc"});
bot.editChannel("527026652509634572", { name : "✲Welco"});
bot.editChannel("527026652509634572", { name : "✲Welcom"});
bot.editChannel("527026652509634572", { name : "✲Welcome"});
bot.editChannel("527026652509634572", { name : "✲Welcome✲"});

client.login('NTI3MDEyODk3MjAxNTg2MTkx.DwNizw.NfSNkQzlaKZPXQZWQ1V1oVuQTDI'); 
