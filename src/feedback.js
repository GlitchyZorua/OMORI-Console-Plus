if (typeof window.commands !== "undefined") {
  const cmdFeedback = (handler) => {
    gui.Shell.openExternal("https://github.com/GlitchyZorua/OMORI-Console-Plus/issues/new");
    handler.log("Opened github issues for the mod. (if it doesn't open, copy the link and paste it to your browser -> https://github.com/GlitchyZorua/OMORI-Console-Plus/issues/new)");
   };
    window.commands.add("feedback", cmdFeedback);  
}
