if (typeof window.commands !== "undefined") {
    const fullscreenOnCommand = (handler) => {
        Graphics._switchFullScreen();
        handler.log('Toggled Fullscreen', "green")
      };
      window.commands.add("fullscreen", fullscreenOnCommand); 
}