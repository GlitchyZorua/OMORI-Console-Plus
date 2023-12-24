if (typeof window.commands !== "undefined") {
    const agentOnCommand = (handler) => {
            handler.log(navigator.userAgent); 
            return;
    };
   
    window.commands.add("agent", agentOnCommand);
}
