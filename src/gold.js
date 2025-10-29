if (typeof window.commands !== "undefined") {
    const goldOnCommand = (handler, args) => {
    if (args.length < 2) {
      handler.log("/gold [amount]");
      return;
    }
    const value = HandlerHelper.parseInteger(handler, args[1]);
    if (value === null) { return; }
    $gameParty.gainGold(value);
    handler.log(`Added ${value} gold! (Current Gold: ${$gameParty.gold()})`);
    };
    window.commands.add("gold", goldOnCommand);
}
