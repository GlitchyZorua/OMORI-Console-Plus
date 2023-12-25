if (typeof window.commands !== "undefined") {
  const urlOnCommand = (args) => {
    if (confirm("Please save all of your data and press OK.\n\n\nBY USING THIS COMMAND, YOU ARE RESPONSIBLE FOR WHAT YOU DONE THROUGH THIS MOD. IF YOU GET HACKED BECAUSE OF THIS MOD, YOU ARE STUPID. DO NOT GOTO ONLINE WEBSITES THAT YOU DON'T TRUST, AS THIS IS USING AN VERY OLD AND UNSUPPORTED VERSION OF CHROME. DO NOT PLAY DUMB. YOU HAVE BEEN WARNED.") == true) { // todo: use omori text boxes to confirm, that is, if i can.
      window.location.replace(args[1]); // man fucking hate it when people put alert() in their omori mods. but whatever. it works.
    } else {
    return; 
    } 
  };
  const urlOnSuggestion = (args) => {
    if (args.length === 1) {
        return ["https://www.google.com","https://retrojcities.neocities.org","https://www.startpage.com/"]; // value... fresh from my ass.
    }
    return [];
};
  window.commands.add("url", urlOnCommand, urlOnSuggestion);
}
