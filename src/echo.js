
if (typeof window.commands !== "undefined") {

    const echoOnCommand = (handler, args) => {
        if (args.length < 2) {
            handler.log('/echo [text]');
            return;
        }
        handler.log(args[1])
    };
    const echoOnSuggestion = (args) => {
        if (args.length === 2) {
            return ["text"];
        }

        // Return nothing on default.
        return [];
    };
    window.commands.add("echo", echoOnCommand, echoOnSuggestion);
}