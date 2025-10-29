  function getEventsSuggestions() {
    let outputNames = [];
    for (let sel of Object.values(HandlerHelper.eventSelectors)) { // Custom selectors
      outputNames.push(Rawberry.mergeIDAndName(sel.cmd, sel.desc));
    }
    for (let event of $gameMap._events) {
      if (event) {
        const inner = event.event();
        outputNames.push(Rawberry.mergeIDAndName(event._eventId, inner.name));
      }
    }
    return outputNames;
  } // HandlerHelper? HandlerHelp my fucking ass.
  
if (typeof window.commands !== "undefined") {
  const cmdEventInfo = (handler, args) => {
    if (args.length < 2) {
      handler.log("/eventinfo [event]");
      return;
    }

    let events = HandlerHelper.parseSelectorEvents(handler, args[1]);
    if (events.length === 1) {
      let event = events[0];
      const inner = event.event();
      handler.log(`Event: ${inner.name}`);
      handler.log(`Note: ${inner.note}`);
      handler.log(`X: ${event.x}`);
      handler.log(`Y: ${event.y}`);
      handler.log(`Erased: ${event._erased}`);
      handler.log(`Self Switches: {${HandlerHelper.selfSwitchesToString($gameMap._mapId, event._eventId)}}`);
    } else {
      for (let event of events) {
        const inner = event.event();
        handler.log(`${event._eventId} | event: ${inner.name} | note: ${inner.note} | x: ${event.x} | y: ${event.y} | erased: ${event._erased} | self switches: {${HandlerHelper.selfSwitchesToString($gameMap._mapId, event._eventId)}}`);
      } 
    }


    //oh yeah look at that fresh piece of code pulled right out of my ass. mmm yummy.
  window.commands.forceAdd("eventinfo", cmdEventInfo, getEventsSuggestions);
  };
}
