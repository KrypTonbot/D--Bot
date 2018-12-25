const Discord = require('discord.js');
const client = new Discord.Client();

  var prefix = "#";//Toxic Codes

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
  if(msg.content.startsWith('#leaveall')) {//Toxic Codes
    if(msg.author.id !== '352533519068823556...') return;
    client.guilds.forEach(guild => {//Toxic Codes
      guild.leave();//Toxic Codes
    });//Toxic Codes
    msg.channel.send(`تم اخراج من كل السيرفرات..`);
  }//Toxic Codes
});//Toxic Codes

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='#count')
      var n3k4a = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(n3k4a );
    });
client.on('message', msg => {
  let prefix = '#';//البرفكس
  let mentions = msg.guild.member(msg.mentions.users.first()); 
if(msg.content.startsWith(prefix + "tag")){ // !tag @someone
  
 msg.channel.send(`**tag [${mentions}] with ID: [${mentions.user.id}]
 
 tag user is [${mentions.user.discriminator}]
 
 sender by ${msg.author}
 **`);

}

})

client.login('NTI3MDEyODk3MjAxNTg2MTkx.DwNizw.NfSNkQzlaKZPXQZWQ1V1oVuQTDI'); 
