if (typeof window.commands !== "undefined") {

    const pongOnCommand = (handler, args) => {
        if (args.length < 2) {
            handler.log("Pong!");
            return;
        }
    };
   
    window.commands.add("ping", pongOnCommand);
}
