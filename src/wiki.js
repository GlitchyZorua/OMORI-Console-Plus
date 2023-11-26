var path = `https://omori.wiki/`;
if (typeof window.commands !== "undefined") {
    const wikiOnCommand = (handler) => {
            gui.Shell.openExternal(path);
            return;
    };
   
    window.commands.add("wiki", wikiOnCommand);
}
