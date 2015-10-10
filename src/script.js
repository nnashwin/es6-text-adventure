let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}

;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject

  /* start the game */
  window.onload = function () {
    Game.currentLocation = Game.startGame()
    Screen.addAreaText(Game.currentLocation)
    Screen.userTextToScreen()
  }
})()
