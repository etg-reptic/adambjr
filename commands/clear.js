module.exports = {
    name: 'clear',
    description: "Clear messages",
     async execute(message, args) {
        if(!args[0]) return message.reply("please enter the amout of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number");

        if(args[0] > 100) return message.reply("you cant delelte more than 100");
        if(args[0] < 1) return message.reply("you must delete aleast one message");

       await message.channel.messages.fetch({limit: args [0]}).then(messages =>{
           message.channel.bulkDelete(messages);
       });



    }

}