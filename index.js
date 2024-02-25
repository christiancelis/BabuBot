import { Client, IntentsBitField } from 'discord.js';

import {config} from 'dotenv'

import express from "express"


const app = express()

//settings
const port = process.env.PORT || 3000

app.set("port",port)

//run server
app.listen(app.get("port"),()=>{
    console.log(`server up on port ${app.get("port")}`)
})


config();



const client = new Client({ intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,

]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on("messageCreate",(message)=>{

    if(message.author.bot){
        return
    }

    let Mensaje = message.content.toLowerCase()

    if(Mensaje.includes("hello")){
        message.reply(`hey bitch ${message.author.username}`)
    }

    if(Mensaje==="ping"){
        message.reply("pong bitch")
    }

    if(Mensaje.includes("ja") || message.content.includes("ja")){
        message.reply("No te rias perra")
    }

    if(Mensaje.includes("amito")){
        message.reply("Amito bb")
    }

    if(Mensaje.includes("bubu")){
        message.reply("bb estoy en clase amito")
    }

    if(Mensaje.includes("bitch")){
        message.reply("Mas bitch seras tu")
    }

    if(Mensaje.includes("llegue")){
        message.reply("nadie te estaba esperando.")
    }

    if(Mensaje.includes("pupu")){
        message.reply("Cuidado tapa el baño Puerca!")
    }

    if(Mensaje.includes("pandita")){
        message.reply("Todo esta en tu mente, cansona")
    }
    if(Mensaje.includes("perra")){
        message.reply("Mas perra sera usted.")
    }

    if(Mensaje.includes("tesis")){
        message.reply("Y es que no se piensa Graduar?")
    }
   
})

client.login(process.env.TOKEN);
