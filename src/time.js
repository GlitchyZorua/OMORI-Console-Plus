if (typeof window.commands !== "undefined") {

    const timeOnCommand = (handler, args) => {
        if (args.length < 2) {   
            let today = new Date();
            hour = today.getHours() 
            let ampm = (hour >= 12) ? "PM" : "AM";
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            
            handler.log(time +' '+ ampm)
            return;
        }
    };
   
    window.commands.add("time", timeOnCommand);
}
