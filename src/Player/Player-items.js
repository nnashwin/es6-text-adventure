let AdventurePlayerObject = AdventurePlayerObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Player = AdventurePlayerObject
  let Screen = AdventureScreenObject
  let Game = AdventureGameObject
  Player.inventory = []
  Player.itemsEquipped = []
  Player.listInventory = function () {
    if (Player.inventory.length === 0) {
      return Screen.displayConsoleMessage('there are no items in your inventory')
    }
    Screen.displayConsoleMessage('Items currently in inventory:')
    return Player.inventory.forEach((item) => {
        Screen.displayConsoleMessage(`- ${item}`)
    })
  }

  Player.addItem = function (item, itemIndex) {
    let testIfAlreadyInInventory = Game.findObjectIndexInArray(Player.inventory, item.name, 'name')

    if (testIfAlreadyInInventory !== -1) {
      return `You already have ${item.name} in your inventory`
    }
    Player.inventory.push(item)
    // remove the item from the currentLocation
    Game.currentLocation.items.splice(itemIndex, 1)
    console.log(Game.currentLocation.items)
    return `${item.name} has been added to your inventory.`
  }


  Player.equipItem = function (item) {
      Player.itemsEquipped.push(item)
      console.log(Player.itemsEquipped)
      return `${item.name} was equipped`
  }

  Player.unequipItem = function (itemIndex) {
      let item = Player.itemsEquipped.splice(itemIndex, 1)
      console.log(item[0].name)
      return `${item[0].name} was unequipped`
  }

  Player.useItem = function (itemName) {
    if (Player.inventory.indexOf(itemName) !== -1) {
        return console.log(`${itemName} has been used.`)
    }
  }
})()
