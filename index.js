require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberUpdate", function(oldMember, newMember){
    // If user has role added
    if (!oldMember.roles.cache.has(process.env.ROLEID) && 
        newMember.roles.cache.has(process.env.ROLEID)) {

        client.channels.cache.get(process.env.ANNOUNCECHANNELID).send(`Welcome to Legend, High Roller <@${newMember.id}>!`)
    }
});

client.login(process.env.TOKEN);