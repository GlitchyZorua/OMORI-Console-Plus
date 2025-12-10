function getWeaponsSuggestions() {
    let outputNames = [];
    for (let weapon of $dataWeapons) {
      if (weapon && weapon.name.length > 0) {
        const temp = weapon.name.replace('"', "'");
        outputNames.push(Rawberry.addQuotes(temp));
      }
    }
    return outputNames;
  };
if (typeof window.commands !== "undefined") {
const weaponOnCommand = (handler, args) => {
    if (args.length < 2) {
      handler.log("/weapon [name] [quantity | max]");
      return;
    }
    const weapon = HandlerHelper.parseWeapon(handler, args[1]);
    if (!weapon) { return; }
    const value = args[2] === "max" ? $gameParty.maxItems(weapon) : HandlerHelper.parseInteger(handler, args[2]);
    $gameParty.gainItem(weapon, value, false);
    handler.log(`Quantity of ${args[1]} is set to ${value}`);
  };
window.commands.add("weapon", weaponOnCommand, getWeaponsSuggestions);
};
