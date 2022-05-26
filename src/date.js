
if (typeof window.commands !== "undefined") {
    const dateOnCommand = (handler, args) => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;
            handler.log(today);
            return;  
    };
    window.commands.add("date", dateOnCommand);
}