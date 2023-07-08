
// Ok look. I didn't want to paste in the whole list yet. i'm trying to do other things. okay????? rn

if (typeof window.commands !== "undefined") {

    const leaderrenameOnCommand = (handler, args) => {
        if (args.length < 2) {
            handler.log("Syntax: /leaderrename <text> ");
            // handler.log("--force - Force the leader to be renamed to a name even if its filtered.");
            handler.log("--ui - opens up the name change thing ui")
            return;
        }
/*/
    if (args[2] === "--force"){
        $gameParty.members()[0].setName(args[1]);
        handler.warn('--force detected. ignoring name filter (MIGHT BREAK THINGS)');
        handler.log('Done.');
    }
/*/
    if (args[1] === "omocat"){
        $gameParty.members()[0].setName(args[1]);
        handler.log('You are very clever, huh.');
        handler.log('Done.');
        return
    }
    /*/
    if (badWords.includes(badwords)){
        handler.warn("This name cannot be used because it's in the bad words list. However, this can be bypassed by adding a --force parameter. This might break the game though.");
        handler.error("Please DO NOT use this for bad publicity!! The filter exists for a reason!");
        return; 
        
        // todo: add filters
    } 
    /*/
        $gameParty.members()[0].setName(args[1]);
        handler.log('Done.');
    };
    const leaderrenameOnSuggestion = (args) => {
        if (args.length === 1) {
            return ["name"];
        }
        if (args.length === 2) {
            return ["--ui"];
        }
        return [];
    };
    window.commands.add("leaderrename", leaderrenameOnCommand);
}