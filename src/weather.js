if (typeof window.commands !== "undefined") {
  const helloOnCommand = (handler, args) => {
      if (args.length < 2) {
          handler.log("Usage: weather [weather type] [power] [frames]");
          return;
      }
      if (args[1] === "none"){
        $gameScreen.changeWeather(args[1], 0, 1);
        handler.log("The weather has been set to none.", "lime") 
        return
      }
      if (args[3] && args[4] === undefined){
      $gameScreen.changeWeather(args[1], 4, 300);
      handler.log(`Weather set to ${args[1]}, Power set to: 4 and Intensity set to 300`, "lime"); // If there are no inputs then set it to default values
      } else {
      $gameScreen.changeWeather(args[1], args[2], args[3]);
      }
      // Adjust the weather
      handler.log(`Weather set to ${args[1]}, Power set to: ${args[2]} and Intensity set to ${args[3]}`, "lime");
  };
  const helloOnSuggestion = (args) => {
      if (args.length === 2) {
          return ["none","rain","snow","storm"]; // Select a weather
      }
      if (args.length === 3) { // Power
          return ["power"];
      }
      if (args.length === 4) { // and intensity.
          return ["intensity"];
      }
      return [];
  };
  window.commands.add("weather", helloOnCommand, helloOnSuggestion);
}
