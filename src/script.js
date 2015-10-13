let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  console.log(AdventureGameObject)
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  /* start the game */
  window.onload = function () {
    Game.startGame()
    Screen.addAreaText(Game.currentLocation)
    Screen.userTextToScreen()
    document.getElementById('text-input').focus()
  }
})()
