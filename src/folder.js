
let linuxpath = "/home/jacobw/.local/share/Steam/steamapps/common";
let windowspath = "C:\Program Files\Steam\SteamApps\common\OMORI";
var gui = require('nw.gui')


if (typeof window.commands !== "undefined") {
    const folderOnCommand = (args) => {
      if (args[1] == "-l"){
        gui.Shell.openExternal(linuxpath); //linux
        return;
      } else {
        gui.Shell.openExternal(windowspath); //windows
      }
      };
      const folderOnSuggestion = (args) => {
        if (args.length === 2) {
            return ["-l"];
        }

        // Return nothing on default.
        return [];
    };
      window.commands.add("folder", folderOnCommand, folderOnSuggestion);

}

