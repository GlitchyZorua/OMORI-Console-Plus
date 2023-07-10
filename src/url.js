if (typeof window.commands !== "undefined") {
  const urlOnCommand = (args) => {
    if (confirm("Please save all of your data and press OK.") == true) { // todo: use omori text boxes to confirm, that is, if i can.
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
