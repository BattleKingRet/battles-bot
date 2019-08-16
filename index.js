const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const PREFIX = '$';

var version = '1.0.3';

bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('Ret', {type: 'LISTENING'}).catch(console.error);
})
 
bot.on('message', message=>{
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

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
           /* case 'send':
                const attachment = new Attachment('https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg')
                message.channel.send(message.author, attachment);
                break;
            case 'sendlocal':
                const attachment2 = new Attachment('./pexels-photo-1174122.jpg');
                message.channel.send(message.author, attachment2);
                break;   
            case 'rules':
                const attachment3 = new Attachment('./rules.txt')
                message.channel.send(message.author, attachment3);
                break;   */
            case 'kick':
                
                if(message.member.hasPermission(['KICK_MEMBERS'])){

                if(user){
                    
                    if(member){
                        member.kick('You were kicked!').then(() =>{
                            message.reply(`Successfully kicked ${user.tag}`);
                        }).catch(err =>{
                           message.reply('I was unable to kick the member');
                           console.log(err);
                        });
                    }else{
                        message.reply("That user isn\'t in this server")

                    }
                }else{
                    message.reply('You need to specify a person!')
                }}
                else{
                    message.reply('You fkin noob cant kick someone, useless boi')
                }
                break;
                case 'ban':
                
                    if(message.member.hasPermission(['BAN_MEMBERS'])){
        
                        if(user){
                            
                            if(member){
                               member.ban({reason: 'you were bad!'}).then(() =>{
                                   message.reply(`Player was successfully banned! ${user.tag}`)
                               })
                            }else{
                                message.reply("That user isn\'t in this guild")
        
                            }
                        }else{
                            message.reply('You need to specify a person!')
                        }}
                        else{
                            message.reply('You fkin noob cant ban someone, useless boi')
                        }
                        break;
                           
    }
    if(message.content.startsWith('cool')){
        message.react('😎')
    }
    
    if(message.content.startsWith('creeper')){
        message.channel.send('aww... man')
    }
    if(message.content.startsWith('Creeper')){
        message.channel.send('aww... man')
    }
    if(message.content.startsWith('Cool')){
        message.react('😎')
    }
})

bot.login(token).catch(err => console.log(err));
