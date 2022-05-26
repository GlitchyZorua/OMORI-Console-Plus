if (typeof window.commands !== "undefined") {

    const picnicOnCommand = (handler, args) => {
        if (args.length < 2) {   
            $gameTemp.reserveCommonEvent(4);
            handler.log(`You and your friends feel like new! Press ESC to view event.`, "lime");
            return;
        }
    };
   
    window.commands.add("picnicrecover", picnicOnCommand);
}
