
if (typeof window.commands !== "undefined") {

    const helpOnCommand = (handler, args) => {
        handler.log("For a list of commands, and to see what each of them does go here: https://gist.github.com/GlitchyZorua/49323cab2134fefacd1eea57a6dcf92a ");
    };
    
    window.commands.add("help", helpOnCommand);
}
