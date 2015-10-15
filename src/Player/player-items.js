let PlayerObject = PlayerObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Player = PlayerObject
  let Screen = AdventureScreenObject
  Player.items = []
  Player.listInventory = function () {
    Player.items.forEach((item) => {
      Screen.displayConsoleMessage(item.name) 
    })
  }

  Player.addItem = function (itemName) {
    if (Game.currentLocation.items.indexOf(itemName) !== -1) {
      console.log(Game.currentLocation.items.indexOf(itemName))
    }
  }
})()
