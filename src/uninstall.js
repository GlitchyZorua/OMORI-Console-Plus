
if (typeof window.commands !== "undefined") {

    const wuninstallOnCommand = (handler, args) => {
        var gui = require('nw.gui')
        gui.Shell.openExternal("steam://uninstall/1150690")
        handler.log("Done.")
    };
    window.commands.add("uninstall", uninstallOnCommand);
}
