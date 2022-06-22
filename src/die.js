
if (typeof window.commands !== "undefined") {
    const menuOnCommand = () => {
        handler.log('Opened Menu. Press ESC to close the console', 'lime');
    };
    window.commands.add("menu");
}