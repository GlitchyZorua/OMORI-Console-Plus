if (typeof window.commands !== "undefined") {

    const clearfxOnCommand = (handler, args) => {
        if (args.length < 2) {   
            $gameScreen.clear();
            $gameScreen.clearFade();
            $gameScreen.clearTone();
            $gameScreen.clearFlash();
            $gameScreen.clearShake();
            $gameScreen.clearZoom();
            $gameScreen.clearWeather();
            $gameScreen.clearPictures();
            $gameScreen.eraseBattlePictures();
            handler.log(`All FX has been cleared`, "lime");
            return;
        }
    };
   
    window.commands.add("clearfx", clearfxOnCommand);
}
