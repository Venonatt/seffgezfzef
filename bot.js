const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`System`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


 


client.on('message', message => {
    if (message.content === 'هلا') {
        message.reply('هلا والله نورت سيرفر');
    }
});


  
  
 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` ولكم نورت السيرفر 😘👍 
👤  [ ${member}  ]  👤 
 أنت عضو رقم : ${member.guild.memberCount} `) 
}).catch(console.error)
}) ;

client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 40000 ;	
    var setGame = ['$help','Register'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('message', message => {
  if(message.content.startsWith(prefix + "تقديم")) {
     message.channel.send("**حسنا... قم بكتابه اسمك**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete(); 
     message.channel.send('**رائع... حسنا اكتب بلد وكم عمرك**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('** قلي ايش رح تسوي بالرتبة اداري**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('تم الارسال').then(b => {

var gg = message.guild.channels.find('name', 'rank-support')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
  .setDescription(`** اسم: \n ${lan}\nعمر وبلد :link: :\n ${md} \nبدي رتبة الاداري :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`codycode`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});




client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', message => {
  if(message.content.startsWith("Register")) {
     message.channel.send("**`[Name#0000]` أكتب اسمك مع التاق **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**حسنا اكتب ايمايلك**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**حسنا كلمة سر**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('تم الارسال').then(b => {

var gg = message.guild.channels.find('name', 'registed')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
  .setDescription(`** Name : \n ${lan}\nEmail :\n ${md} \nPassword :\n ${br}  \nid   :/n ${message.author.id} **`)  
          .setFooter(`Desing Server`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})





client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$تقديم** ' ,' **Rank support** ')
.addField('     **Register** ' ,' **للتسجيل في سيرفر** ')
.addField('     **$bc1 ** ' ,' **مع امبد للنشر في سيرفر** ')
.addField('     **$bc2 ** ' ,' ** للكل مع منشن** ')
.addField('     **$bc3 ** ' ,' ** اونلاين مع منشن** ')
.addField('     **$clear ** ' ,' **لمسح شات** ')
.setColor('#9502ac')
  message.channel.sendEmbed(embed);
    }
});




client.login(process.env.BOT_TOKEN);
