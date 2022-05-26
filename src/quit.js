if (typeof window.commands !== "undefined") {

    const quitgameOnCommand = (handler, args) => {
      SceneManager.terminate();
      handler.log('Goodbye!',"lime");
    };
   
    window.commands.add("quit", quitgameOnCommand);
}
