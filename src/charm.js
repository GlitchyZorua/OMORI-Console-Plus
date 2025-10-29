function getCharmsSuggestions() {
    let outputNames = [];
    for (let armor of $dataArmors) {
      if (armor && armor.name.length > 0) {
        const temp = armor.name.replace('"', "'");
        outputNames.push(Rawberry.addQuotes(temp));
      }
    }
    return outputNames;
  };
if (typeof window.commands !== "undefined") {
  const charmOnCommand = (handler, args) => {
    if (args.length < 2) {
      handler.log("/charm [name] [quantity | max]");
      return;
    }
    const charm = HandlerHelper.parseArmor(handler, args[1]);
    if (!charm) { return; }
    const value = args[2] === "max" ? $gameParty.maxItems(charm) : HandlerHelper.parseInteger(handler, args[2]);
    $gameParty.gainItem(charm, value, false);
    handler.log(`Quantity of ${args[1]} is set to ${value}`);
  };
  window.commands.add("charm", charmOnCommand, getCharmsSuggestions);
  window.commands.add("armor", charmOnCommand, getCharmsSuggestions);
};
// HandlerHelper.createCustomSuggestionTemplate("ARMOR", "QUANTITY")
