const cmdVariable = (handler, args) => {
    if (args.length < 2) {
      handler.log("/variable [name] [value]");
      return;
    }
    const variable = $dataSystem.variables.indexOf(args[1]);
    if (variable === -1) {
      handler.log(`"${args[1]}" not found.`);
      return;
    }
    if (args.length === 2) {
      let curValue = $gameVariables.value(variable);
      handler.log(`"${args[1]}" = ${curValue}`);
      if (Rawberry.isString(curValue)) {
        handler.log('WARNING: Variable is a String rather than Integer.', "yellow");
      }
      return;
    }

    let intParse = Rawberry.parseIntStrict(args[2]);
    if (!Number.isNaN(intParse)) {
      $gameVariables.setValue(variable, intParse);
      handler.log(`"${args[1]}" is set to ${$gameVariables.value(variable)}`);
    } else {
      $gameVariables.setValue(variable, args[2]);
      handler.log(`"${args[1]}" is set to ${$gameVariables.value(variable)}`);
      handler.log('WARNING: Variable type cannot parse into Integer. Interpreted as a String.', "yellow");
    }
  };

window.commands.forceAdd("variable", cmdVariable, HandlerHelper.createCustomSuggestionTemplate("VARIABLE"));