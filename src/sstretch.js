if (typeof window.commands !== "undefined") {

    const sstretchOnCommand = (handler, args) => {
      Graphics._switchStretchMode();
      handler.log('Toggled Resolution!',"lime");
    };
   
    window.commands.add("sstretch", sstretchOnCommand);
}
