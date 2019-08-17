const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const PREFIX = '$';
const math = require('math-expression-evaluator');
var version = '1.0.3';

bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('Ret', {type: 'LISTENING'}).catch(console.error);
})
 
bot.on('message', message=>{
    const user = message.mentions.users.first();
    const member = message.guild.member(user);
    let askedQuestion = message.content.split(" ").slice(1).join(" ");
    const answers = [
        'As I see it, Then Yes',
        'Ask again Later',
        'I don\'t know',
        'It is certain',
        'Maybe yes',
        'Maybe not',
        'Very doubtful',
        'No! For sure',
        'Yes! Ofcourse'
    ];
    let result = Math.floor((Math.random() * answers.length));
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
            if(message.member.hasPermission(['MANAGE_MESSAGES'])){
            if(!args[1]) return message.reply('Error, please define the amount of messages')
            message.channel.bulkDelete(args[1]);
            }
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
                               }).catch(err =>{
                           message.reply('I was unable to ban the member');
                           console.log(err);
                        });
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
            case 'av':
                        if(user){
                    
                            if(member){
                        message.reply(user.avatarURL)
                    }else{
                        message.reply('That person isn\'t in this server')
                    }}
                    else{
                        message.reply(message.author.avatarURL)
                    }
                        break;
            case '8ball':
                        if(!askedQuestion) {
                            message.reply("Please ask a question");
                        }
                        else{
                            let embed = new Discord.RichEmbed()
                            .setAuthor(message.author.tag)
                            .setColor("#FF9900")
                            .addField("Your Question:", askedQuestion)
                            .addField("Answer:", answers[result]);
                            message.channel.send({embed}).catch(e => logger.error(e));
                        }
                    break; 
            case 'server':
                        let embed = new Discord.RichEmbed()

                        .setColor('RANDOM')
                  
                        .setThumbnail(message.guild.iconURL)
                  
                        .setTitle(`**Showing Details Of** ${message.guild.name}`)
                  
                        .addField('**Server Region**',`${message.guild.region}`,true)
                  
                        .addField('**Roles Count**',`${message.guild.roles.size}`,true)
                  
                        .addField('**Members Count**',`${message.guild.memberCount}`,true)
                  
                        .addField('**Online Members**',`${message.guild.members.filter(m=>m.presence.status == 'online').size}`,true)
                  
                        .addField('**Text Channels**',`${message.guild.channels.filter(m => m.type === 'text').size}`,true)
                  
                        .addField('**Voice Channels**',`${message.guild.channels.filter(m => m.type === 'voice').size}`,true)
                  
                        .addField('**Server Owner**',`**${message.guild.owner}**`,true)
                  
                        .addField('**Server Id**',`**${message.guild.id}**`,true)
                  
                        .addField('**Server was created in**',message.guild.createdAt.toLocaleString())
                  
                        message.channel.send({embed:embed})
                  
                      break;              
                case 'cal':
                        let args = message.content.split(" ").slice(1);

                        const question = args.join(' ');
                
                    if (args.length < 1) {
                
                        message.reply('Specify a equation, please.');
                
                } else {    let answer;
                
                    try {
                
                        answer = math.eval(question);
                
                    } catch (err) {
                
                        message.reply(`Error: ${err}`);
                
                    }
                
                    
                
                    const embed = new Discord.RichEmbed()
                
                    .addField("**Input**: ",`**${question}**`, true)
                
                    .addField("**Output**: ",`**${answer}**`, true)
                
                    message.channel.send(embed)  .catch(console.error);      
                }    break;
                           
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
