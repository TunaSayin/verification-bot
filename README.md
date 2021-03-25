# verifiction-bot
This is simple verification bot for discord. Basically what it does is once you use `vf!verify` command in a channel it will create random code, will link the code with your id and put it into it's database. After that once you go to that link with your discord account it will check your discord id and your search parameter if your search parameter matches with id that is in bot's database it will verify you and change the message that it sent to the discord channel.

# Prerequisites
NodeJS v12 or higher, <br />
Microsoft Visual Studio Tools (your are going to need this to install [quick.db](https://www.npmjs.com/package/quick.db))

# Setup
Install the project and use `npm install` command to install all node modules that bot needs.
Create an `.env` folder inside of the bot's folder and paste the following code and fill the parts.

```
TOKEN=
PREFIX=vf!
PORT=3000
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URL=
```

# Usage
Use `vf!verify` in any channel that bot can see and follow the link that bot sent.
