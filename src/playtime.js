if (typeof window.commands !== "undefined") {
    var info = _TDS_.OmoriSaveLoad.DataManager_makeSavefileInfo.call(this);
    const playtimeOnCommand = (handler) => {
            handler.log(info.playtime); 
            return;
    };
   
    window.commands.add("playtime", playtimeOnCommand);
}
