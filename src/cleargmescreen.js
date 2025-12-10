if (typeof window.commands !== "undefined") {
const cmdClearScreen = (handler) => {
    $gameScreen.clear();
    handler.log(`Cleared Game Sreen`); 
};
    window.commands.add("ClearScreen", cmdClearScreen); 
}
