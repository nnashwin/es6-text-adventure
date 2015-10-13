let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
let TextInputParser = TextInputParser || {}
;(function (undefined) {
  console.log(AdventureGameObject)
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  let Parser = TextInputParser
  /* start the game */
  window.onload = function () {
    Game.startGame()
    Screen.addAreaText(Game.currentLocation)
    Screen.userTextToScreen()
  }
})()
