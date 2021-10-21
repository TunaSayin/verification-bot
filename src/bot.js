require("dotenv").config();

const colors = require("colors");
const Discord = require("discord.js");
const client = new Discord.Client();
const dashboard = require("./Dashboard/server");

client.commands = new Discord.Collection();

function loadCommands(dir) {
  const fs = require("fs");

  dir = `${__dirname}/${dir}`;

  const files = fs.readdirSync(dir, "utf-8");

  files.forEach((x) => {
    const command = require(`${dir}/${x}`);

    client.commands.set(command.name, command);
    command.aliases.forEach((x) => {
      if (x.length === 0) return;
      else {
        client.commands.set(x, command);
      }
    });
  });

  return console.log("Commands has been loaded succesfully!".blue);
}

function formatDB() {
  const db = require("quick.db");
  const database = db.all();

  if (database.length === 0) return;

  let count = 0;
  database.forEach((data) => {
    db.delete(data.ID);
    count++;
  });

  return console.log(
    `All verification links has been removed! (${count})`.blue
  );
}

client.on("ready", async () => {
  await loadCommands("Commands");
  await formatDB();
  await dashboard.start(client);
  console.log("Discord verification bot has been started!".cyan);
});

client.on("message", async (message) => {
  if (message.author.bot || !message.guild) return;

  if (!message.content.startsWith(process.env.PREFIX)) return;

  const args = message.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (client.commands.has(cmd)) {
    const command = client.commands.get(cmd);

    try {
      await command.run(client, message, args);
    } catch (err) {
      console.log(`[${command.name}]: ${err}`.red);
    }
  }
});

client.login(process.env.TOKEN);
