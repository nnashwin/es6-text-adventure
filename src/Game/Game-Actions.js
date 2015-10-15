let AdventurePlayerObject = AdventurePlayerObject || {}
// let AdventureScreenObject = AdventureScreenObject || {}
let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let AdventureGameObject = Game
  let AdventurePlayerObject = Player

  Game.addToPlayerInventory = function (itemName) {
    console.log('before')
    console.log(Player.inventory)
    Player.inventory.push(itemName)
    console.log('after')
    console.log(Player.inventory)
  } 
})
