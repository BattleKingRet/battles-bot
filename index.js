const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjEwNDA0MTc1MjkzMDU0OTc2.XVE2mA.LO-qItOlXpaLfvm8Io6aTovRUzk';

const PREFIX = '$';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online');
})
 
bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'credits':
            message.channel.sendMessage('Rohan(Ret) only!')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Invalid Command')
            }  
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error, please define the amount of messages')
            message.channel.bulkDelete(args[1]);
            break;
            case 'creatoremail':
                message.channel.sendMessage('rkwal.007@gmail.com')
                break; 
            case 'profile':
                const profile = new Discord.RichEmbed()
                .setTitle('User Information')
                .addField('User Name', message.author.username)
                .addField('Version', version)
                .addField('Current Server', message.guild.name)
                .setColor(0xF1C40F)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Send me some love please, Thnx!')
                message.channel.sendEmbed(profile);
                break;

    }
})

bot.login(token);
