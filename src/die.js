
if (typeof window.commands !== "undefined") {
    const dieOnCommand = (handler) => {
        SceneManager.goto(Scene_Gameover);
        handler.log('Killed Sunny/Omori. Press ESC to close console', 'lime');
    };   
    window.commands.add("die", dieOnCommand);
}
