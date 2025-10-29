if (typeof window.commands !== "undefined") {
  const speedupOnCommand = (handler, args) => {
    let speed = 5;
    if (args.length > 1) {
      const value = HandlerHelper.parseInteger(handler, args[1]);
      if (value != null) speed = value;
    }
    SceneManager.determineRepeatNumber = function() { return speed; }
    handler.log(`Speed up to ${speed}x!`);
  };
  window.commands.add("speedup", speedupOnCommand);
  };
