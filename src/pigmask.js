if (typeof window.commands !== "undefined") {
    const pigmaskOnCommand = (handler, args) => {
      alert('you suck')
      window.location.replace("https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&enablejsapi=1&autoplay=1&mute=0");
    };// lol
    window.commands.add("pigmask", pigmaskOnCommand);
}
