if (typeof window.commands !== "undefined") {
  const GetMapNameOnCommand = (handler, args) => {
    if (!SceneManager._scene._mapLoaded) {
      handler.log("Player must be in a map", "red");
      return;
    }
    const currentMapId = $gameMap.mapId();
    const currentMapInfo = $dataMapInfos[currentMapId];
    const currentMapName = currentMapInfo ? currentMapInfo.name : "Unknown";
    handler.log(`Current Map: ${currentMapName}`);
  };
  window.commands.add("MapName", GetMapNameOnCommand);
}
