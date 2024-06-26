const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("LylaNodesStats - Ping")
        .setDescription(
            `Bot Latency: ${Date.now() - message.createdTimestamp}ms\nAPI Latency: ${Math.round(client.ws.ping)}ms`
        )
        .setTimestamp();
    message.reply(embed);
};
