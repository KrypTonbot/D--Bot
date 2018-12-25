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

client.on('message', message => {
  let anything = [
    ":no_entry_sign: 《1》ممنوع السب او الشتم 
:no_entry_sign: 《2》ممنوع السبام 
:no_entry_sign: 《3》ممنوع الأعلان عن اي سيرفر 
:no_entry_sign: 《4》ممنوع نشر روابط والباتشات 
:no_entry_sign: 《5》ممنوع أستخدام مغير صوت 
:no_entry_sign: 《6》ممنوع استخدام البوتات الا في المكان المخصص لها
:no_entry_sign: 《7》ممنوع طلب الرتب من  الادارة لاي سبب
:no_entry_sign: 《7》ممنوع كتابة الاوامر في روم الغير مخصص لها
:no_entry_sign: 《8》ممنوع استغلال الأخطاء او الثغرات 
:no_entry_sign: 《9》يمنع ازعاج الاعضاء
:no_entry_sign: 《10》اذا احد ازعجك او خالف القوانين اخبر الاونر او الادمن

(:point_left: ونتمنا منكم تعطونا بعض النصايح لمستقبل السيرفر في روم النصايح :point_right: )


:eight_pointed_black_star: أي اسفسار كلم الاداره :eight_pointed_black_star:
"
    
    
  ]
  if(message.content === '#rules'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

client.login('NTI3MDEyODk3MjAxNTg2MTkx.DwNizw.NfSNkQzlaKZPXQZWQ1V1oVuQTDI'); 
