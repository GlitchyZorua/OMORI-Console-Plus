
if (typeof window.commands !== "undefined") {

    const ccOnCommand = (handler, args) => {
	handler.setConsole(false);
    };
    window.commands.add("cc", ccOnCommand);
}
