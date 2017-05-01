const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'group2',
            memberName: 'dm',
            description: 'Sends a message to the user you mention.',
            examples: [';dm @User Hi there!'],
            args: [{
                key: 'user',
                prompt: 'Which user do you want to send the DM to?',
                type: 'user'
            },
            {
                key: 'content',
                prompt: 'What would you like the content of the message to be?',
                type: 'string'
            }]
        });    
    }

    run(message, args) {
        const { user, content } = args;
        return user.send(content);
    }
};