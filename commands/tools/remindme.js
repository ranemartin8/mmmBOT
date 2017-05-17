const { Command } = require('discord.js-commando');
const moment = require('moment');
const sherlock = require('sherlockjs');
const { stripIndents } = require('common-tags');

module.exports = class RemindMeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'remindme',
			aliases: ['remind'],
			group: 'tools',
			memberName: 'remindme',
			description: 'Reminds you of something.',
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			},

			args: [
				{
					key: 'remind',
					label: 'reminder',
					prompt: 'what would you like me to remind you about?\n',
					type: 'string'
				}
			]
		});
	}

	async run(msg, args) {
		const remind = args.remind;

		const remindTime = sherlock.parse(remind);
		if (!remindTime.startDate) return msg.reply('I could not parse a time for your remind, please be more clear.');
		const time = remindTime.startDate.getTime() - Date.now();

		const preRemind = await msg.say(stripIndents`
			I will remind you '${remindTime.eventTitle}' ${moment().add(time, 'ms').fromNow()}.
		`);
		const remindMessage = await new Promise(resolve => {
			setTimeout(() => resolve(msg.say(stripIndents`
				${msg.author} you wanted me to remind you of: '${remindTime.eventTitle}'
			`)), time);
		});

		return [preRemind, remindMessage];
	}
};