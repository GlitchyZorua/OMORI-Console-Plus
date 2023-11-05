
// let linuxpath = "/home//.local/share/Steam/steamapps/common"; // for fuck sakes i don't understand why this will never work on linux. Probably because of wine or something, i don't know
let windowspath = "C:/Program Files/Steam/SteamApps/common/OMORI"; 
var gui = require('nw.gui'); 


if (typeof window.commands !== "undefined") {
    const folderOnCommand = (args) => {
      if (args[1] == "-l"){
        handler.error('This argument is disabled. Blame my crappy coding.');
        //gui.Shell.openExternal(linuxpath); //linux
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

