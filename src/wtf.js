
if (typeof window.commands !== "undefined") {

    const wtfOnCommand = (handler, args) => {
        if (args.length < 2) {
            handler.log("WTF level is at "+args[1]+"\n\nUsage: /wtf [#]");
            return;
        }
        handler.log("WTF Value is set to " +args[1])
        $gameVariables.setValue(143, args[1])
    };
    const wtfOnSuggestion = (args) => {
        if (args.length === 2) {
            return ["value"];
        }
        return [];
    };
    window.commands.add("wtf", wtfOnCommand, wtfOnSuggestion);
}