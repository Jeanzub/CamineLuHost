const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('📌Pong!');
  }
});

client.login('NzUyMjM1ODQwODk3NTQ4NDU2.X1UsOA.s7z7yYmPw8Wd4rG7y9dncy3svPM');

