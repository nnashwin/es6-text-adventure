let AdventurePlayerObject = AdventurePlayerObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Player = AdventurePlayerObject
  let Screen = AdventureScreenObject
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

  Player.addItem = function (itemName, itemIndex) {
    if (Player.inventory.indexOf(itemName) !== -1) {
      return `You already have ${itemName} in your inventory`
    }
    Player.inventory.push(itemName)
    // remove the item from the currentLocation
    Game.currentLocation.items.splice(itemIndex, 1)
    console.log(Game.currentLocation.items[itemName])
    return `${itemName} has been added to your inventory.`
  }


  Player.equipItem = function (itemName) {
    if (Player.inventory.indexOf(itemName) !== -1) {
      return console.log('has item')
    }
  }

  Player.useItem = function (itemName) {
    if (Player.inventory.indexOf(itemName) !== -1) {
        return console.log(`${itemName} has been used.`)
    }
  }
})()
