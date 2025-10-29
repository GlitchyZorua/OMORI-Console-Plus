if (typeof window.commands !== "undefined") {
    const levelOnCommand = (handler, args) => {
    if (args.length < 2) {
      handler.log("Usage: /level [actor id]");
      return;
    }
    const level = args[2] === "max" ? "max" : HandlerHelper.parseInteger(handler, args[2]);
    if (level === null) { return; }

    let actors = HandlerHelper.parseSelectorActors(handler, args[1]);
    for (let actor of actors) {
      const value = level === "max" ? actor.maxLevel() : level;
      actor.changeLevel(value, false);
      handler.log(`${actor.name()} is now level ${value}!`);
    }
    }
    window.commands.add("level", levelOnCommand, HandlerHelper.createCustomSuggestionTemplate("ACTOR", "QUANTITY"));
}
