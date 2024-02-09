
require("dotenv") .config();
const axios = require("axios");
const {Client, GatewayIntentBits} = require ("discord.js");
const client = new Client({intents:[GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});


client.on("ready",()=>{
    console.log("el bot esta listo");
})

client.on("messageCreate",async(message)=>{
    if(message.content === "hola"){
        message.reply({
            content:"Bienvenido a nuestro canal"
        })
    }else if(message.content === "ping"){
        message.reply({
            content:"pong"
        })
    }else if(message.content === "frase"){
        let response = await axios.get("https://api.quotable.io/random")
        const quote = response.data.content;
        message.reply({
            content:quote
        })
    }else if(message.content === "dolar"){
        
  
        
    }
})

client.login(process.env.DISCORD_BOT);