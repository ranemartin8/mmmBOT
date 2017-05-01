const commando = require('discord.js-commando');

class GetPICommand extends commando.Command {
	constructor(client){
		super(client, {
			name: 'pi',
			group: 'getpi',
			memberName: 'pi',
			description: 'Returns the PI of champion at a certain Dupe/SigLevel (Options: 0/20/40/60/80/99)',
			args: [{
				key: 'champ',
				prompt: 'Which champion do you want the PI of?',
				type: 'string'
			}]
		});
	}

	async run(message, args){
var champ = args;
message.channel.sendMessage("You rolled a " + champ);


	}

}

module.exports = GetPICommand;