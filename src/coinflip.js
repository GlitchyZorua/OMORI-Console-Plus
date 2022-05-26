const coin = ["Tails","Heads"];
if (typeof window.commands !== "undefined") {
    const coinflipOnCommand = (handler) => {
        handler.log(`${coin[Math.floor(Math.random() * coin.length)]}`)
    };
    window.commands.add("coinflip", coinflipOnCommand);
}