let AdventurePlayerObject = AdventurePlayerObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Player = AdventurePlayerObject
  let Screen = AdventureScreenObject
  Player.inventory = []
  Player.itemsEquipped = []
  Player.listInventory = function (output) {
    if (Player.inventory.length === 0) {
      return Screen.displayConsoleMessage('there are no items in your inventory')
    }
    Screen.displayConsoleMessage('Items currently in inventory:')
    Player.inventory.forEach((item) => {
      Screen.displayConsoleMessage(item)
    })
  }

  Player.addItem = function (itemName) {
    if (Player.inventory.indexOf(itemName) !== -1) {
      return 'You already have ' + itemName + ' in your inventory'
    }
    console.log('before')
    console.log(Player.inventory)
    Player.inventory.push(itemName)
    console.log('after')
    console.log(Player.inventory)
    return itemName + ' has been added to your inventory.'
  }

  Player.equipItem = function (itemName) {
    if (Player.inventory.indexOf(itemName) !== -1) {
      console.log('has item')
    }
  }

  Player.useItem = function (itemName) {
    if (Player.inventory.indexOf(itemName) !== -1) {
     console.log('has item')
    }
  }
})()
