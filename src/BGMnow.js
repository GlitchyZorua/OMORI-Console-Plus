if (typeof window.commands !== "undefined") {
  const BGMnowOnCommand = (handler, args) => {
    let currentBgm = AudioManager._currentBgm ? AudioManager._currentBgm.name : "No BGM Playing";
    handler.log(`Current BGM: ${currentBgm}`);
  };
  window.commands.add("BGMnow", BGMnowOnCommand);
}
