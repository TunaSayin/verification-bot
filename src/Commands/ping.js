module.exports = {
    name: 'ping',
    aliases: [],
    description: 'Simple ping pong command.',
    run(client, message, args) {

        return message.channel.send('Pong!');

    }
}