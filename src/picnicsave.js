if (typeof window.commands !== "undefined") {

    const picnicOnCommand = (handler, args) => {
        if (args.length < 2) {   
            $gameTemp.reserveCommonEvent(3);
            handler.log(`Successfully called Mari. Press ESC to view event.`, "lime");
            return;
        }
    };
   
    window.commands.add("picnicsave", picnicOnCommand);
}
