if (typeof window.commands !== "undefined") {
  const urlOnCommand = (args) => {
    if (confirm("Please save all of your data and press OK.\n\n\nBY USING THIS COMMAND, YOU ARE RESPONSIBLE FOR WHAT YOU DONE THROUGH THIS MOD. IF YOU GET HACKED BECAUSE OF THIS MOD, YOU ARE STUPID.") == true) { // todo: use omori text boxes to confirm, that is, if i can.
      window.location.replace(args[1]); // man fucking hate it when people put alert() in there omori mods. but whatever. it works.
    } else {
    return; 
    } 
  };
  const urlOnSuggestion = (args) => {
    if (args.length === 1) {
        return ["https://google.com","https://retrojcities.neocities.org","https://startpage.com/"]; // value... fresh from my ass.
    }
    return [];
};
  window.commands.add("url", urlOnCommand, urlOnSuggestion);
}
