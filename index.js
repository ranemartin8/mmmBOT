const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.registry.registerGroups([
	['random', 'Random'],
	['getpi','ChampPI'],
	['group2','saysStuff']	
	]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message',(message) =>{

	if(message.content == 'ping'){
		message.channel.sendMessage('pong');
	}

});

bot.login('MzA4Mzg4NDE1MDY0NTA2MzY5.C-gIpA.lgy8fQIepTrUu-BB7pz-zcJax7U');
