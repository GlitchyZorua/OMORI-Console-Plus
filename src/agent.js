if (typeof window.commands !== "undefined") {
    const playtimeOnCommand = (handler) => {
            handler.log(navigator.userAgent); 
            return;
    };
   
    window.commands.add("agent", agentOnCommand);
}
