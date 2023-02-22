
if (typeof window.commands !== "undefined") {

    const helpOnCommand = (handler, args) => {
        handler.log("For a list of commands: https://gist.github.com/Jacobw0/49323cab2134fefacd1eea57a6dcf92a")
    };
    
    window.commands.add("help", helpOnCommand);
}
