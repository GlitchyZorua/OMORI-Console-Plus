if (typeof window.commands !== "undefined") {
    const playtimeOnCommand = (handler) => {
            var info = _TDS_.OmoriSaveLoad.DataManager_makeSavefileInfo.call(this);
            handler.log(info.playtime); 
            return;
    };
    window.commands.add("playtime", playtimeOnCommand);
}
