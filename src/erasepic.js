if (typeof window.commands !== "undefined") {
const cmdErasePicture = (handler, args) => {
    if (args.length < 2) {
      handler.log("Usage: /erasepicture [id]");
      return;
    }
    const picture = HandlerHelper.parsePicture(handler, args[1])
    if (picture === null) { return; }

    handler.log(`Erased picture ${args[1]}`);
    picture.erase();  
  };
  window.commands.forceAdd("erasepicture", cmdErasePicture);
}


