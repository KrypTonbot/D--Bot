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

client.on('message',async msg => {//Toxic Codes
  var p = "#";//Toxic Codes
  if(msg.content.startsWith(p + "setuser")) {//Toxic Codes
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **ليس لديك صلاحيه**');//Toxic Codes
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');//Toxic Codes
  msg.guild.createChannel(`Members : ◤ → ${client.users.size} ← ◢` , 'voice').then(time => {//Toxic Codes
    });//Toxic Codes

  }
 
});

client.on('message', message => {
    if (message.content === ('#bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@352533519068823556>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

client.login(process.env.BOT_TOKEN);
