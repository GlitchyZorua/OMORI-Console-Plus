if (typeof window.commands !== "undefined") {

    const menuOnCommand = (handler, args) => {
      SceneManager.push(Scene_Menu);
      handler.log('Opened Menu. Press ESC to close console.',"lime");
    };
   
    window.commands.add("menu", menuOnCommand);
}
