if (typeof window.commands !== "undefined") {
const cmdSelfSwitch = (handler, args) => {
    if (args.length < 2) {
      handler.log("/selfswitch [event] [letter] [boolean]");
      return;
    }

    let events = HandlerHelper.parseSelectorEvents(handler, args[1]);
    let letter = HandlerHelper.parseLetter(handler, args[2]);
    let value = HandlerHelper.parseBoolean(handler, args[3]);

    for (let event of events) {
      const inner = event.event();
      $gameSelfSwitches.setValue([$gameMap._mapId, event._eventId, letter], value);
      handler.log(`Set event ${event._eventId} ${inner.name} self switch ${letter} to ${value}`);
    }
  };
  window.commands.add("selfswitch", cmdSelfSwitch);
}
