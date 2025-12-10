if (typeof window.commands !== "undefined") {
  const cmdClearFog = (handler) => {
    $gameMap.clearMapFogs();
    handler.log(`Cleared Map Fog`); 
   };
   window.commands.add("clearfog", cmdClearFog); 
}
