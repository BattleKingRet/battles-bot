const Discord = require('discord.js');
const { promptMessage } = require ("./functions.js");
const bot = new Discord.Client();
const ms = require("ms");
const token = process.env.token;
const chooseArr = ["⛰️","📰","✂️"];

const PREFIX = '';
const math = require('math-expression-evaluator');
var version = '1.0.4';

function emoji (id)
{
    return bot.emojis.get(id).toString();
}

bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('Ret', {type: 'LISTENING'}).catch(console.error);
})
 
bot.on('message', async message=>{
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
    var year = message.author.createdAt.getFullYear()
    var month = message.author.createdAt.getMonth()
    var day = message.author.createdAt.getDate()
    let MRole = message.content.split(" ").slice(2).join(" ");
    let uptime = bot.uptime;



    let days = 0;

    let hours = 0;

    let minutes = 0;

    let seconds = 0;

    let notCompleted = true;

    switch(args[0]){
        case '$ping':
            message.channel.sendMessage('pong!')
            break;
        case '$credits':
            message.channel.sendMessage('Rohan(Ret) only!')
            break;
        case '$info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Invalid Command')
            }  
            break;
      /*  case '$clear':
            if(message.member.hasPermission(['MANAGE_MESSAGES'])){
            if(!args[1]) return message.reply('Error, please define the amount of messages')
            message.channel.bulkDelete(args[1]);
            }
            break;*/
            case '$creatoremail':
                message.channel.sendMessage('rkwal.007@gmail.com')
                break; 
             case '$profile':
                const profile = new Discord.RichEmbed()
                .setTitle('User Information')
                .addField('User Name', message.author.username)
                .addField('Version', version)
                .addField('Current Server', message.guild.name)
                .addField('Your Account Created On', month + "/"+ day + "/"+ year)
                .addField("Entered The Server On", message.member.joinedAt.toLocaleString())    
                .addField("Last Message", message.author.lastMessage)
                .setColor(0xF1C40F)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Send me some love please, Thnx!')
                message.channel.sendEmbed(profile);
                break;
           /* case '$send':
                const attachment = new Attachment('https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg')
                message.channel.send(message.author, attachment);
                break;
            case '$sendlocal':
                const attachment2 = new Attachment('./pexels-photo-1174122.jpg');
                message.channel.send(message.author, attachment2);
                break;   
            case '$rules':
                const attachment3 = new Attachment('./rules.txt')
                message.channel.send(message.author, attachment3);
                break;   */
            case '$kick':
                
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
                case '$ban':
                
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
            case '$av':
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
            case '$8ball':
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
            case '$server':
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
            case '$perms':
                    if(message.member.hasPermission(['ADMINISTRATOR'])){
                        
                    if(!message.channel.guild) return;

                    var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
           
                    var zPeRms = new Discord.RichEmbed()
           
                    .setColor('RANDOM')
           
                    .setTitle(':tools: Permissions')
           
                    .addField('Your Permissions:',perms)
           
           
           
                             message.channel.send({embed:zPeRms});  
                    }  
                            break;
            case '$members':
                    const embed2 = new Discord.RichEmbed()



                    .setDescription(`**Members info 
                
                :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
                
                :heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
                
                :yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
                
                :diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
                
                :bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
                .setColor('RANDOM')
                         message.channel.send({embed:embed2});       
                       break;
                         
            case '$role':
                   // if (message.author.boss) return;
                   // if (!message.content.startsWith(PREFIX)) return;
                   // if (command == "role") {
                    if (!message.channel.guild) return;

                    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You don\'t have permission**").then(msg => msg.delete(5000));;
                
                    if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("I don\'t have permission").then(msg => msg.delete(5000));;
                
                    if (message.mentions.users.size < 1) return message.reply('**uhh! Error, Please mention a user**').then(msg => {msg.delete(5000)});   
                    if(!MRole)return message.reply("could not find the role").then(msg => {msg.delete(5000)});
                 //   if(!role1) return message.reply(`This Role is not in the server`).then(msg => {msg.delete(5000)});

                    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));

                    message.reply('** Done ? **').then(msg => {msg.delete(10000)});   
                                    
                    break;    
            
            case '$removerole':
                    if (!message.channel.guild) return;

                    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign: You don\'t have permission**").then(msg => msg.delete(5000));;
                
                    if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("I don\'t have permission").then(msg => msg.delete(5000));;
                    if (message.mentions.users.size < 1) return message.reply('**uhh! Error, Please mention a user**').then(msg => {msg.delete(5000)});

                    if(!MRole)return message.reply("Please mention the role").then(msg => {msg.delete(5000)});
                   // if(!role1) return message.reply(`This Role is not in the server`).then(msg => {msg.delete(5000)});
                    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));

                    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
                    break;

                case '$uptime':    

                    while (notCompleted) {



                        if (uptime >= 8.64e+7) {
                
                
                
                            days++;
                
                            uptime -= 8.64e+7;
                
                
                
                        } else if (uptime >= 3.6e+6) {
                
                
                
                            hours++;
                
                            uptime -= 3.6e+6;
                
                
                
                        } else if (uptime >= 60000) {
                
                
                
                            minutes++;
                
                            uptime -= 60000;
                
                
                
                        } else if (uptime >= 1000) {
                
                            seconds++;
                
                            uptime -= 1000;
                
                
                
                        }
                
                
                
                        if (uptime < 1000)  notCompleted = false;
                
                
                
                    }
                
                
                
                    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec` + "`");
                
                break;
            
             /* case '$drag':
                if (message.member.hasPermission("MOVE_MEMBERS")) {

                    if (message.mentions.users.size === 0) {
                   
                    return message.channel.send("``Use the command like: " +PREFIX+ "drag [USER]``")
                   
                   }
                   
                   if (message.member.voiceChannel != null) {
                   
                    if (message.mentions.members.first().voiceChannel != null) {
                   
                    var authorchannel = message.member.voiceChannelID;
                   
                    var usermentioned = message.mentions.members.first().id;
                   
                   var embed4 = new Discord.RichEmbed()
                   
                    .setTitle("Succes!")
                   
                    .setColor("#000000")
                   
                    .setDescription(`Successfully dragged <@${usermentioned}>  `)
                   
                   var embed5 = new Discord.RichEmbed()
                   
                   .setTitle(`You are Moved in ${message.guild.name}`)
                   
                    .setColor("RANDOM")
                   
                   .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
                   
                    message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed4))
                   
                   message.guild.members.get(usermentioned).send(embed5)
                   
                   } else {
                   
                   message.channel.send("You can\'t drag "+ message.mentions.members.first() +" `This member must be in my voice room`")
                   
                   }
                   
                   } else {
                   
                    message.channel.send("**``You have to be in a voice room to pull the member to you.``**")
                   
                   }
                   
                   } else {
                   
                   message.react("❌")
                   
                    };
            break; */
                case '$cal':
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
            case '$bot':
                

                   let embed3 = new Discord.RichEmbed()
            
                        .setAuthor(bot.user.username,bot.user.avatarURL)
            
                        .setThumbnail(bot.user.avatarURL)
            
                        .setColor('RANDOM')
            
                        .setTitle('INFO Ret\'s Cop ')
            
                        .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            
                        .addField('**RAM Usage**', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            
                        .addField('**Servers**', bot.guilds.size, true)
            
                        .addField('**Channels**' , ` ${bot.channels.size} ` , true)
            
                        .addField('**Users**' ,` ${bot.users.size} ` , true)
            
                        .addField('**My Name**' , ` ${bot.user.tag} ` , true)
            
                        .addField('**My ID**' , ` ${bot.user.id} ` , true)
            
                              .addField('**My Prefix**' , ` $ ` , true)
            
                              .addField('**My Language**' , ` JavaScript ` , true)
            
                              .setFooter('By | Ret')
            
                              message.channel.send({embed:embed3})      
                              break;
            case '$serverbans':
                message.guild.fetchBans()

                .then(bans => message.channel.send(`Number of banned persons **${bans.size}** `))      
                break;
            
        
            case '$mute':
               
        if(!message.member.hasPermission('MANAGE_ROLES')) return

                        if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
                        
                      //  var mute = message.content.split(" ")[0];
                        
                       // mute = mute.slice(PREFIX.length);
                        
                        var args1 = message.content.split(" ").slice(1);  
                        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args1[0]));

                //    let tomute = message.guild.member(message.mentions.first() || message.guild.members.get(args[0]));
                    if(!tomute) return message.reply("No user specified");

                  //  let reaason = args1.slice(1).join(' ');
                  //   if(!reaason) reaason = "No reason provided";

                    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them");
                    let muterole = message.guild.roles.find(r => r.name === "muted");
                    tomute.addRole(muterole).then(() => {
                        message.delete()

                      /*  let muteping = new Discord.RichEmbed()
                        .setAuthor(`Muted`, message.guild.iconURL)
                        .setColor(0x421C52)
                        .addField("Time", mutetime)
                        //.addField("Reason", reaason)
                        .setDescription(tomute.user.tag);
                        tomute.send(muteping)*/
                    })
                    if(!muterole){
                        try{
                          muterole = await message.guild.createRole({
                              name: "muted",
                              color: "#000000",
                              permissions:[]
                          })
                          message.guild.channels.forEach(async (channel, id) => {
                              await channel.overwritePermissions(muterole, {
                                  SEND_MESSAGES: false,
                                  ADD_REACTIONS: false
                              });
                          });
                        }catch(e){
                            console.log(e.stack);
                        }
                    }
                    let mutetime = args1[1]
                    if(!mutetime) return message.reply("You didn't specify a time");
                
                    await(tomute.addRole(muterole.id));
                    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
                    setTimeout(function(){
                      tomute.removeRole(muterole.id);
                      message.channel.send(`<@${tomute.id}> has been unmuted`);
                    }, ms(mutetime));
                
                    break;
            
            
            case '$unmute':
            if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**You don\'t have permission**:x: ").then(m => m.delete(5000));

            if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
            
            
            
              let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            
              if(!toMute) return message.channel.sendMessage("**That person is not muted**:x: ");
            
            
            
              let role = message.guild.roles.find (r => r.name === "muted");
            
              
            
              if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**That person is not muted**:x:")
            
            
            
              await toMute.removeRole(role)
            
              message.channel.sendMessage("**Successfully unmuted**:white_check_mark:");
            
            
            
              
          
            break;    
            
       case '$rps': 
            
            const embed69 = new Discord.RichEmbed()
                .setColor("#ffffff")
                .setFooter(message.guild.me.displayName, message.author.avatarURL)
                .setDescription("Add a reaction to one of these to play the game")
                .setTimestamp();
                
                const m = await message.channel.send(embed69);
                const reacted = await promptMessage(m, message.author, 30, chooseArr);

                const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

                const result5 = await getResult(reacted, botChoice);
                await m.clearReactions();

                    embed69
                    .setDescription("")
                    .addField(result5, `${reacted} vs ${botChoice}`);

                    m.edit(embed69);

                function getResult(me, clientChosen) {
                    if((me === "⛰️" && clientChosen === "✂️") ||
                        (me ==="📰" && clientChosen === "⛰️") ||
                        (me === "✂️" && clientChosen === "📰")) {
                            return "You won!";
                        } else if(me === clientChosen){
                            return "Its a tie";
                        } else {
                            return "You lost!";

                        }
                }
                break;   
            
            case '$rat':
            message.channel.send(emoji("645635631988604969"));
            break;
            
            case '$pplit':
            message.channel.send(emoji("727905963746525214"));
            break;
            
            case '$hammer':
            message.channel.send(emoji("717232359400800298"));
            break;
            
            case '$ricass':
            message.channel.send(emoji("717232493975175219"));
            break;
            
            case '$wink':
            message.channel.send(emoji("723523331965583451"));
            break;
            
            case '$smoochies':
            message.channel.send(emoji("720464723669417984"));
            break;
            
            case '$vibecheck':
            message.channel.send(emoji("720471876593385474"));
            break;
                           
    }
    if(message.content.startsWith('cool')){
        message.react('😎')
    }
    
    if(message.content.startsWith('creeper')){
        message.channel.send('aww... man')
    }

    if(message.content.startsWith('Creeper')){
        message.channel.send('Aww... Man')
    }

    if(message.content.startsWith('saffy is amazing')){
        message.channel.send('No! Saffy is 💩')
    }

    if(message.content.startsWith('Saffy is amazing')){
        message.channel.send('No! Saffy is 💩')
    }

    if(message.content.startsWith('Saffy is 💩')){
        message.channel.send('Ofc! No doubt in that!!')
    }

    if(message.content.startsWith('saffy is 💩')){
        message.channel.send('Ofc! No doubt in that!!')
    }

    if(message.content.startsWith('Cool')){
        message.react('😎')
    }

    if(message.content.startsWith('Saffy')){
        message.react('💩')
    }

    if(message.content.startsWith('saffy')){
        message.react('💩')
    }

    if(message.content.startsWith('SAFFY')){
        message.react('💩')
    }

    if(message.content.startsWith('Lofe')){
        message.react('👑')
    }

    if(message.content.startsWith('lofe')){
        message.react('👑')
    }

    if(message.content.startsWith('LOFE')){
        message.react('👑')
    }

   if(message.content.startsWith('$clear')){
  if(message.member.hasPermission(['MANAGE_MESSAGES'])){
            if(!args[1]) return message.reply('Error, please define the amount of messages')
            message.channel.bulkDelete(args[1]);
            }  
}
})

bot.login(token).catch(err => console.log(err));
