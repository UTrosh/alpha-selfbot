// Partie Selfbot
const Discord = require('discord.js');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} }); // Enlever tout la ligne apres "Discord.Client" si vous ne voulez pas que votre bot s'affiche en mode mobile
   disable_everyone: true
const calculUptime = require("pretty-ms");
const a = require('chalk')
var myArgs = process.argv.slice(2);
console.log('TOKEN: ', myArgs);
// Config Token
const prefix = `-`

client.on("ready", () => { 
 console.log('TOKEN : ' + myArgs + 'connecté')
  });



client.login(`${myArgs}`)

client.on("message", async message => {
   if (message.content.includes(prefix + "help")) {
   if (message.author.id === client.user.id) {
   if (message.deletable) message.delete();
       message.channel.send("▬▬▬▬▬▬▬▬ \n COMMANDES \n ▬▬▬▬▬▬▬▬ \n \n `help` : Affiche les commandes. \n `restart` : Restart le selfbot. \n `exit` : Déconnection du selfbot. \n `pp` : Copie la PP de la personne mentionné. \n `version` : Permet de savoir la version du selfbot. \n `mpall` : Permet de mpall dans un server. \n `status` : Permet de savoir combien de temp le selfbot et on.")
  }
}
});


client.on("message", async message => {
   if (message.content.includes(prefix + "restart")) {
        if (message.author.id === client.user.id) {
   if (message.deletable) message.delete();
  message.channel.send('**redémarrage** du self bot...').then(client.destroy()).then(() => client.login(token));
}
}
});

client.on("message", async message => {
   if (message.content.includes(prefix + "exit")) {
        if (message.author.id === client.user.id) {
            if (message.deletable) message.delete();
        message.channel.send("Arrêt du selfbot dans **5 seconde**")
        setTimeout(function() {
         message.delete().then(process.exit())
     }, 5000);
        
    }
}
});

client.on("message", async message => {
   if (message.content.includes(prefix + "pp")) {
        if (message.author.id === client.user.id) {
   if (message.deletable) message.delete();
const user = message.mentions.users.first() || message.author;
  const avatar = new Discord.RichEmbed()
      .setAuthor(user.username)
      .setImage(user.avatarURL)
      message.channel.send(avatar)
   }
}
});

client.on("message", async message => {
   if (message.content.includes(prefix + "version")) {
        if (message.author.id === client.user.id) {
   if (message.deletable) message.delete();
   message.channel.send(`Le selfbot est en version **V1**`)
 }
}
});

client.on("message", async message => {
   if (message.content.includes(prefix + "mpall")) {
        if (message.author.id === client.user.id) {
   if (message.deletable) message.delete();
          var args = message.content.split(' ').join(' ').slice(7);

    

      if(!args) return message.channel.send("Tu dois me dire quelque chose !")

      message.guild.members.forEach((player) => {

        message.guild.member(player).send(`${args}`);

      console.log("la commande pub mp all à été utilisée avec perfection👌") 

      })

    }
}
});

client.on("message", async message => {
   if (message.content.includes(prefix + "status")) {
        if (message.author.id === client.user.id) {
   if (message.deletable) message.delete();
    message.channel.send(`Je suis connecter depuis \`${calculUptime(client.uptime)}\``)
 }
}
});

