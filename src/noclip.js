

if (typeof window.commands !== "undefined") {
    const noclipOnCommand = (handler, args) => {
        if (args[1] == "true"){
            $gamePlayer.setThrough(true);
            handler.log('Noclip enabled.',"lime");
            return;
        }
        if (args[1] == "false"){
            $gamePlayer.setThrough(false);
            handler.log('Noclip disabled.',"lime");
            return;
        }
            handler.log("Usage: /noclip [true|false]")
            return;
        };
        const noclipOnSuggestion = (args) => {
            if (args.length === 2) {
                return ["true","false"];
            }
            return [];
        };
    window.commands.add("noclip", noclipOnCommand, noclipOnSuggestion);
}