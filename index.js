const discord = require("discord.js");
const client = new discord.Client({intents: [
    discord.Intents.FLAGS.DIRECT_MESSAGES,
    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_MESSAGES,
    discord.Intents.FLAGS.GUILD_MEMBERS
]})

var serverid = "587298320897146888";
var userid = ""

client.once("ready", async () =>{
    console.log("Ready!")
    setInterval(async function(){
        var members = await client.guilds.cache.filter(g => g.id == serverid).first().members.fetch()
        members.forEach(member => {
            if(!member.user.bot){
                member.send("Test").catch(err => {});
            }
        })
    }, 1000)
})
