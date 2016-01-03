let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  window.onload = function () {
    Screen.addAreaText(Game.currentLocation)
    Screen.userTextToScreen()
    document.getElementById('text-input').focus()
  }
})()
