if (typeof window.commands !== "undefined") {
    const invisibleOnCommand = (handler, args) => {
        if (args.length < 2) {
            handler.log("Usage: invisible [true | false]");
            return;
        }
        if (args[1] == 'true'){
            $gamePlayer.setTransparent(true); // Turns the player invisible
            handler.log(`You are now invisible!`, "lime");
        }
        if (args[1] == 'false'){
            $gamePlayer.setTransparent(false); // Turns the player visible
            handler.log(`You are no longer invisible...`, 'lime');
        }
        
    };
    const invisibleOnSuggestion = (args) => {
        if (args.length === 2) {
            return ['true', 'false'];
        }
        return [];
    };
    window.commands.add("invisible", invisibleOnCommand, invisibleOnSuggestion);
  }