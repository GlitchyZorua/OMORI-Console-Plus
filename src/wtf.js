
if (typeof window.commands !== "undefined") {

    const wtfOnCommand = (handler, args) => {
        if (args.length < 2) {
            handler.log("WTF level is at "+ $gameVariables.value(143) +"\n\nUsage: /wtf [#]");
            return;
        }
        if(isNaN(args[1])){
            handler.error('Not a number!');
            return;
        }
        if(args[1] == 143){
            handler.log('I love you too! <3'); // don't ask.
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