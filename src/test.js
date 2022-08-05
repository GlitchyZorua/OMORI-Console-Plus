if (typeof window.commands !== "undefined") {

    const testOnCommand = (handler, args) => {
      handler.log('It works!',"lime");
    };
   
    window.commands.add("test", testOnCommand);
}
