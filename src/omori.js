if (typeof window.commands !== "undefined") {

    const omoriOnCommand = (handler, args) => {
      handler.log('omori',"lime");
    };
   
    window.commands.add("omori", omoriOnCommand);
}
