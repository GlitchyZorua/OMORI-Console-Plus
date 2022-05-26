if (typeof window.commands !== "undefined") {

    const dingOnCommand = (handler, args) => {
        if (args.length < 2) {
            handler.log("fries are done");
            return;
        }
    };
   
    window.commands.add("ding", dingOnCommand);
}
