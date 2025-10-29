class Rawberry {

  static isValidInteger(value) {
    return !isNaN(value) && isFinite(value);
  };

  /**
   * Parses Integer and ONLY integer, no decimal or characters allowed.
   * Returns NaN otherwise.
   * @returns Integer or NaN
   */
  static parseIntStrict(x) {
    return /^\d+$/.test(x) ? +x : NaN
  }

  static isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

  static isStringSurroundedByQuotes(str) {
    return /^['"].*['"]$/.test(str);
  }

  static stripQuotes(str) {
    return str.replace(/^["'](.+(?=["']$))["']$/, '$1');
  }

  static addQuotes(name) {
    return name.indexOf(" ") > -1 ? `"${name}"` : name;
  };

  static findFromVariable(dest, value, name = "name", id = "id") {
    const parsedValue = parseInt(value);
    const numeric = Rawberry.isValidInteger(parsedValue);
    for (let i = 0; i < dest.length; ++i) {
      if (dest[i] !== null && (numeric && parsedValue === dest[i][id] || dest[i][name] === value)) {
        return dest[i];
      }
    }
    return null;
  };

  static mergeIDAndName(id, name) {
    return `${id}:${Rawberry.addQuotes(name)}`;
  };

  static getActorsSuggestions() {
    let outputNames = [];
    for (let sel of Object.values(HandlerHelper.battlerSelectors)) { // Custom selectors
      outputNames.push(Rawberry.mergeIDAndName(sel.cmd, sel.desc));
    }
    for (let data of $dataActors) {
      if (data && data.characterName.length > 0) {
        outputNames.push(Rawberry.mergeIDAndName(data.id, data.characterName));
      }
    }
    return outputNames;
  };

  static getEnemiesSuggestions() {
    let outputNames = [];
    for (let sel of Object.values(HandlerHelper.battlerSelectors)) { // Custom selectors
      outputNames.push(Rawberry.mergeIDAndName(sel.cmd, sel.desc));
    }
    let id = 0;
    for (let enemy of $gameTroop.members()) {
      const temp = enemy.name().replace('"', "'");
      outputNames.push(Rawberry.mergeIDAndName(id, temp));
      id += 1; // Enemies in troop are 0 index, despite appearance in troop
    }
    return outputNames;
  };

  static getEventsSuggestions() {
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
  }

  static getPicturesSuggestions() {
    let outputNames = [];
    let id = 0;
    for (let picture of $gameScreen._pictures) {
      if (picture && picture.name().length > 0) {
        outputNames.push(Rawberry.mergeIDAndName(id, picture.name()));
      }
      id += 1; // Pictures are 0 index
    }
    return outputNames;
  }

  static findActiveActor(name) {
    return Rawberry.findFromVariable(
      $gameParty.allMembers(),
      name,
      "_characterName",
      "_actorId"
    );
  };

  static getActiveActorsByName() {
    const result = [];
    const activeMembers = $gameParty ? $gameParty.allMembers() : [];
    for (let i = 0; i < activeMembers.length; ++i) {
      result.push(
        Rawberry.mergeIDAndName(
          activeMembers[i]._actorId,
          activeMembers[i]._characterName
        )
      );
    }
    return result;
  };

  static getCharmsSuggestions() {
    let outputNames = [];
    for (let armor of $dataArmors) {
      if (armor && armor.name.length > 0) {
        const temp = armor.name.replace('"', "'");
        outputNames.push(Rawberry.addQuotes(temp));
      }
    }
    return outputNames;
  };

  static getWeaponsSuggestions() {
    let outputNames = [];
    for (let weapon of $dataWeapons) {
      if (weapon && weapon.name.length > 0) {
        const temp = weapon.name.replace('"', "'");
        outputNames.push(Rawberry.addQuotes(temp));
      }
    }
    return outputNames;
  };

  static getStatesSuggestions() {
    let outputNames = [];
    for (let state of $dataStates) {
      if (state && state.name.length > 0) {
        outputNames.push(Rawberry.mergeIDAndName(state.id, state.name));
      }
    }
    return outputNames;
  };

  static getVariablesSuggestions() {
    let outputNames = [];
    for (const variable of $dataSystem.variables) {
      if (variable && variable.length > 0) {
        outputNames.push(Rawberry.addQuotes(variable));
      }
    }
    return outputNames;
  };

  static isSingleLetter(str) {
    return /^[a-zA-Z]$/.test(str);
  }
}

class HandlerHelper {
  static parseInteger(handler, int) {
    const num = parseInt(int);
    if (handler && !Rawberry.isValidInteger(num)) {
      handler.log(`${int} is not an integer`, "red");
    };
    return num;
  };

  static parseLetter(handler, str) {
    if (handler && !Rawberry.isSingleLetter(str)) {
      handler.log(`${str} is not a valid letter`, "red");
      return null;
    };
    return str;
  };

  static parseActor(handler, id) {
    const actor = $gameActors.actor(id)
    if (handler && actor === null) {
      handler.log(`Actor ${id} not found`, "red");
      if (typeof id === "string") {
        handler.log(`Use Actor ID instead of name.`, "red");
      };
    }
    return actor;
  };

  static parseEnemy(handler, id) {
    const enemy = $gameTroop.members()[id];
    if (handler && !enemy) {
      handler.log(`Enemy ${id} not found`, "red");
    }
    return enemy;
  };

  static parseSelectorActors(handler, input) {
    let tokens = input.split(":");
    // Group selectors
    if (tokens[0] == this.battlerSelectors.EVERY.cmd) {
      return $gameActors._data.filter((x) => x);
    }
    if (tokens[0] == this.battlerSelectors.ALIVE.cmd) {
      return $gameParty.aliveMembers();
    }
    if (tokens[0] == this.battlerSelectors.DEAD.cmd) {
      return $gameParty.deadMembers();
    }
    if (tokens[0] == this.battlerSelectors.MEMBERS.cmd) {
      return $gameParty.members();
    }
    // If not, then assume singular id.
    let actor = this.parseActor(null, tokens[0])
    if (actor) {
      return [actor];
    }
    if (handler) {
      handler.log(`Invalid Actor ID/Selector ${tokens[0]}.`, "red");
    }
    return [];
  };

  static parseSelectorEnemies(handler, input) {
    let tokens = input.split(":");
    // Group selectors
    if (tokens[0] == this.battlerSelectors.EVERY.cmd) {
      return $gameTroop.members();
    }
    if (tokens[0] == this.battlerSelectors.ALIVE.cmd) {
      return $gameTroop.aliveMembers();
    }
    if (tokens[0] == this.battlerSelectors.DEAD.cmd) {
      return $gameTroop.deadMembers();
    }
    if (tokens[0] == this.battlerSelectors.MEMBERS.cmd) {
      return $gameTroop.members();
    }
    // If not, then assume singular id.
    let enemy = this.parseEnemy(null, tokens[0])
    if (enemy) {
      return [enemy];
    }
    if (handler) {
      handler.log(`Invalid Enemy ID/Selector ${tokens[0]}.`, "red");
    }
    return [];
  };

  static parseEvent(handler, id) {
    const event = $gameMap._events[id];
    if (handler && !event) {
      handler.log(`Event ${id} not found`, "red");
    }
    return event;
  };

  static parseSelectorEvents(handler, input) {
    let tokens = input.split(":");
    // Group selectors
    if (tokens[0] == this.eventSelectors.ALL.cmd) {
      return $gameMap._events.filter((x) => x);
    }
    if (tokens[0] == this.eventSelectors.ERASED.cmd) {
      return $gameMap._events.filter((x) => x && x._erased);
    }
    if (tokens[0] == this.eventSelectors.NOTERASED.cmd) {
      return $gameMap._events.filter((x) => x && !x._erased);
    }
    // If not, then assume singular id.
    let event = this.parseEvent(null, tokens[0])
    if (event) {
      return [event];
    }
    if (handler) {
      handler.log(`Invalid Event ID/Selector ${tokens[0]}.`, "red");
    }
    return [];
  };

  static parsePicture(handler, str) {
    let id = Number.parseInt(str.split(":")[0]);
    const picture = $gameScreen._pictures[id];
    if (handler && !picture) {
      handler.log(`Picture ${str} not found`, "red");
      return null;
    }
    return picture;
  };

  static parseBoolean(handler, input) {
    if (input == "on" || input == "true") {
      return true;
    }
    if (input == "off" || input == "false") {
      return false;
    }
    if (handler) {
      handler.log(`Invalid argument, please use on/off or true/false.`, "red");
    }
    return null;
  };

  static parseArmor(handler, input) {
    const item = Rawberry.findFromVariable($dataArmors, input);
    if (!item) {
      handler.log(`Charm ${input} not found.`);
    }
    return item;
  };

  static parseWeapon(handler, input) {
    const item = Rawberry.findFromVariable($dataWeapons, input);
    if (!item) {
      handler.log(`Weapon ${input} not found.`);
    }
    return item;
  };

  static parseState(handler, input) {
    const item = Rawberry.findFromVariable($dataStates, input);
    if (!item) {
      handler.log(`State ${input} not found.`);
    }
    return item;
  };

  // ================ Suggestion Lambda Functions ================ //

  static createCustomSuggestion(funcList) {
    let onSuggestionFunc = (args) => {
      let suggestionFunction = funcList[args.length - 2];
      if (suggestionFunction) {
        return suggestionFunction(); // calls that function
      }
      return [];
    }
    return onSuggestionFunc;
  };

  static createCustomSuggestionTemplate(...strList) {
    let funcList = [];
    for (let string of strList) {
      let newFunc = this.suggestions[string];
      funcList.push(newFunc);
    }
    return this.createCustomSuggestion(funcList);
  };

  static selfSwitchesToString(mapId, eventId) {
    let switchOutput = [];
    for (let letter of HandlerHelper.defaultSelfSwitches) {
      let switchValue = $gameSelfSwitches.value([mapId, eventId, letter]);
      switchOutput.push(`${letter}: ${switchValue}`);
    }
    return switchOutput.join(", ");
  }
}

HandlerHelper.defaultSelfSwitches = ["A", "B", "C", "D"];

// Added after due to not support static variable yet
HandlerHelper.suggestions = {
  BOOLEAN: () => { return ["on", "off", "true", "false"]; },
  QUANTITY: () => { return ["max"]; },
  LETTER: () => { return ["A", "B", "C", "D"]; },
  WEAPON: () => { return Rawberry.getWeaponsSuggestions() },
  ARMOR: () => { return Rawberry.getCharmsSuggestions() },
  ACTOR: () => { return Rawberry.getActorsSuggestions(); },
  ENEMY: () => { return Rawberry.getEnemiesSuggestions(); },
  STATE: () => { return Rawberry.getStatesSuggestions(); },
  EVENT: () => { return Rawberry.getEventsSuggestions(); },
  PICTURE: () => { return Rawberry.getPicturesSuggestions(); },
  VARIABLE: () => { return Rawberry.getVariablesSuggestions(); }
};

HandlerHelper.battlerSelectors = {
  EVERY: {cmd: "@e", desc: "EVERYONE"},
  ALIVE: {cmd: "@a", desc: "ALIVE"},
  DEAD: {cmd: "@d", desc: "DEAD"},
  MEMBERS: {cmd: "@m", desc: "MEMBERS"},
};

HandlerHelper.eventSelectors = {
  ALL: {cmd: "@a", desc: "ALL"},
  ERASED: {cmd: "@e", desc: "ERASED"},
  NOTERASED: {cmd: "@n", desc: "NOT-ERASED"},
};


//addCommands();
