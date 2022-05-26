
if (typeof window.commands !== "undefined") {
    const donothingOnCommand = () => {
     return;
    };
    window.commands.add("donothing", donothingOnCommand);
}