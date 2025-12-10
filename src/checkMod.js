var betawarning = `This is a BETA version of Console+. I haven't properly tested most of the stuff on here. Things could break, so make a back up of your save files. If you don't want that, then get the 0.5.0 version. Should you have any feedback or bugs you wanna report, you can do so by typing in \"/feedback\" in the console. Are you sure you want to continue?`

if (!confirm(betawarning)) {
SceneManager.terminate();
}

function $consoleproceedanyways() {
if (!confirm("Would you like to proceed anyways? (not recommended)")) {
SceneManager.terminate();
}
}
if (!$modLoader.mods.get("console")) {
alert('Error. You do not have console mod installed. Visit https://mods.one/mod/console to get it.');
$consoleproceedanyways();
}
if ($modLoader.mods.get("consoleplusplus")) {
alert('Console++ (not to be confused with Console+) is not compatible with this mod. please removed it.');
$consoleproceedanyways();
}
