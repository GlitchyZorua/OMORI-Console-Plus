if (typeof window.commands !== "undefined") {
  var saveOnCommand = (handler, args) => {
    const id = args.length < 2 ? DataManager._lastAccessedId : parseInt(args[1]);
    if (isNaN(id)) {
      handler.log("Expected a number", "red");
      return;
    }
    if (id < 1 || id === 44) {
      handler.log("Invalid Save ID", "red");
      return;
    }
    if (!DataManager.saveGame(id)) {
      handler.log(`Failed to Save on id ${id}`, "red");
      return;
    }
    SoundManager.playSave();
    handler.log(`Saved on id ${id}`);
  };

    return [];
};
  window.commands.add("bettersave", bettersaveOnCommand;
}
