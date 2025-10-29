var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
hour = today.getHours() 
let ampm = (hour >= 12) ? "PM" : "AM";
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


// Returns the current Swatch beat
function GetSwatchTime(showDecimals = true) {
    // get date in UTC/GMT
    var date = new Date();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var milliseconds = date.getUTCMilliseconds();
    // add hour to get time in Switzerland
    hours = hours == 23 ? 0 : hours + 1;
    // time in seconds
    var timeInMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds;
    // there are 86.4 seconds in a beat
    var millisecondsInABeat = 86400;
    // calculate beats to two decimal places
    if (showDecimals) {
        return Math.abs(timeInMilliseconds / millisecondsInABeat).toFixed(2);
    } else {
        return Math.floor(Math.abs(timeInMilliseconds / millisecondsInABeat));
    }
}            

if (typeof window.commands !== "undefined") {
    const playtimeOnCommand = (handler) => {
            var info = _TDS_.OmoriSaveLoad.DataManager_makeSavefileInfo.call(this);
            handler.log("Play Time: "+info.playtime);

            handler.log("- Actual Time -");
            handler.log("Time (w/ @beat): "+time +' '+ ampm + GetSwatchTime(true));
            handler.log("Date: "+today);
            return;
    };
    window.commands.add("playtime", playtimeOnCommand);
}


