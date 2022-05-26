if (typeof window.commands !== "undefined") {
    /**
     * Runs on Execute.
     *
     * @param {CommandHandler} handler
     * @param {string[]} args
     *
     * @returns {void}
     */
    const diceOnCommand = (handler, args) => {
        // args = ["hello", ...arguments]
        if (args[1] == "") {
            handler.log("Usage: dice [#]");
            return;
        }
        let dice = Math.floor(Math.random() * args[1]);
        handler.log(dice);
        return
    };
    window.commands.add("dice", diceOnCommand);
}
