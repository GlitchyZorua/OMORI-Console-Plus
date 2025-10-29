const speeddownOnCommand = (handler) => {
      SceneManager.determineRepeatNumber = function(deltaTime) {
          this._smoothDeltaTime *= 0.8;
          this._smoothDeltaTime += Math.min(deltaTime, 2) * 0.2;
          if (this._smoothDeltaTime >= 0.9) {
              this._elapsedTime = 0;
              return Math.round(this._smoothDeltaTime);
          } else {
              this._elapsedTime += deltaTime;
              if (this._elapsedTime >= 1) {
                  this._elapsedTime -= 1;
                  return 1;
              }
              return 0;
          }
      };
      handler.log(`Speed down!`);
};

window.commands.add("speeddown", speeddownOnCommand);
