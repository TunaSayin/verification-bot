let msg;
const { MessageEmbed } = require('discord.js');
const embed = new MessageEmbed();

module.exports = {
    name: 'verify',
    aliases: [],
    description: 'Simple verification command.',
    async run(client, message, args) {

        const db = require('quick.db');

        function createVerificationCode(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        const verifNum = createVerificationCode(15);

        db.set(message.author.id, verifNum);

        msg = await message.channel.send(embed.setColor('#2C2F33').setDescription(`Please [click here](http://localhost:${process.env.PORT}/verify?code=${verifNum}) to verify yourself.`));
        
        setTimeout(() => {
            if (msg.embeds[0].description === '✅ Verification successed.') return;
            db.delete(message.author.id);
            msg.edit(embed.setDescription('❌ Verification code has been expired!').setColor('RED'));
        }, 60000);
    }
}

module.exports.success = () => {
    msg.edit(embed.setDescription('✅ Verification successed.').setColor('GREEN'));
}