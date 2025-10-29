if (typeof window.commands !== "undefined") {
  const transOnCommand = (handler, args) => {
    if (args.length < 2) {
        handler.log("Usage: /trans [on, true | off, false]");
        return;
    }
    let value = HandlerHelper.parseBoolean(handler, args[1]);
    if (value === null) { return; }
    $gamePlayer.setTransparent(value);
    handler.log(`Player transparency ${value ? "on" : "off"}`);
  };
    window.commands.add("trans", transOnCommand, HandlerHelper.createCustomSuggestionTemplate("BOOLEAN"));
}
