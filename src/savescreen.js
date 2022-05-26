if (typeof window.commands !== "undefined") {

    const savescreenOnCommand = (handler, args) => {
      SceneManager.push(Scene_Save);
      handler.log('Opened Save Screen. Press ESC to close console.',"lime");
    };
   
    window.commands.add("savescreen", savescreenOnCommand);
}
