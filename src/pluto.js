if (typeof window.commands !== "undefined") {
    const plutoOnCommand = (handler, args) => {
        handler.log('CAUTION: Selecting "Nevermind" will BREAK THE GAME! It is highly recommended that you save first.', "yellow")
        handler.log('Successfully called pluto. Press ESC to view event', 'lime')
        $gamePlayer.reserveTransfer(489);
      };
      window.commands.add("pluto", plutoOnCommand);

}

