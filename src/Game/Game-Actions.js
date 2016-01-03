let AdventurePlayerObject = AdventurePlayerObject || {}
// let AdventureScreenObject = AdventureScreenObject || {}
let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let AdventureGameObject = Game
  let AdventurePlayerObject = Player

  Game.addToPlayerInventory = function (itemName) {
    Player.inventory.push(itemName)
  } 
})
