let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
let AdventurePlayerObject = AdventurePlayerObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  let Player = AdventurePlayerObject
  // start the game to ascertain the current location
  Game.startGame()
  function findCommand (inputArray) {
    for (var i = 0, n = inputArray.length; i < n; i++) {
      let index = inputArray[i]
      let result

      if (index === 'current' || index === 'inventory') {
        return findBaseAction(index, result)
      }

      if (Game.commands[index] && Game.commands[index] === 'changeLocation') {
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let locationName = inputArray[j]
          if (locationName === 'city' || locationName === 'capsule') {
            locationName = inputArray[j] + ' ' + inputArray[j + 1]
          }
          if (Game.currentLocation.directions.indexOf(locationName) !== -1) {
            return Game.takePath(locationName)
          }
        }
        result = "location doesn't exist"
        return result
      }

      if (Game.commands[index] && Game.commands[index] === 'obtain') {
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let itemQuery = inputArray[j]
          let testIfAlreadyInInventory = Game.findObjectIndexInArray(Player.inventory, itemQuery, 'name')
          let objType = determineObjectType(itemQuery)
          if (testIfAlreadyInInventory !== -1) {
              return `You already have the ${itemQuery} in your inventory`
          }

          if (objType === 'furniture') {
              return `${itemQuery} can not be placed in inventory`
          }

          result = findItem(itemQuery)
          if (result.itemIndex !== -1 && objType === 'item') {
              return Player.addItem(result.item, result.itemIndex)
          }
        }
        return 'that item does not exist'
      }

      if (Game.commands[index] && Game.commands[index] === 'examine') {
          return examineObject(inputArray, i)
      }

      if (Game.commands[index] && Game.commands[index] === 'equip') {
          for (let j = i + 1, n = inputArray.length; j < n; j++) {
              let itemQuery = inputArray[j]
              let itemIndex = Game.findObjectIndexInArray(Player.inventory, itemQuery, 'name')
              let item = Player.inventory[itemIndex]
              let itemIsInInventory = (itemIndex !== -1)
              let itemIsEquippable = item.actionResponseObject['equip'] !== 'undefined'
              if(itemIsInInventory ) {
                  if (typeof item.actionResponseObject['equip'] !== 'undefined') {
                      return Player.equipItem(item)
                  }
                  return `${item.name} can not be equipped`
              }
          }
      }

      if (Game.commands[index] && Game.commands[index] === 'unequip') {
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
            let itemQuery = inputArray[j]
            let itemIndex = Game.findObjectIndexInArray(Player.inventory, itemQuery, 'name')
            if(itemIndex !== -1) {
                return Player.unequipItem(itemIndex)
            }
        }
        return 'that item is not equipped'
      }
    }
    return 'that command is not recognized'
  }

  function findItem (itemQuery) {
    let itemIndex = Game.findObjectIndexInArray(Game.currentLocation.items, itemQuery, 'name')
    console.log(itemIndex)
    if (itemIndex !== -1) {
      return {
          itemIndex: itemIndex,
          item: Game.currentLocation.items[itemIndex]
      }
    } else {
      return false
    }
  }

  function determineObjectType (objName) {
      console.log(Player.inventory)
      if (Game.findObjectIndexInArray(Player.inventory, objName, 'name') !== -1) {
          return 'itemInInventory'
      }


      if (Game.findObjectIndexInArray(Game.currentLocation.items, objName, 'name') !== -1) {
          return 'item'
      }

      if (Game.findObjectIndexInArray(Game.currentLocation.furniture, objName, 'name') !== -1) {
          return 'furniture'
      }
      return false
  }


  function examineObject (inputArray, i) {
      let error
      for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let obj = inputArray[j]
          let isItem = determineObjectType(obj) === 'item'
          let isItemInInventory = determineObjectType(obj) === 'itemInInventory'
          let isFurniture = determineObjectType(obj) === 'furniture'
          if (isItem) {
              let index = Game.findObjectIndexInArray(Game.currentLocation.items, obj, 'name')
              let itemDesc = Game.currentLocation.items[index].actionResponseObject['examine']
              return itemDesc
          }

          if (isFurniture) {
              let index = Game.findObjectIndexInArray(Game.currentLocation.furniture, obj, 'name')
              let furnitureDesc = Game.currentLocation.furniture[index].desc
              return furnitureDesc
          }

          if (isItemInInventory) {
              let index = Game.findObjectIndexInArray(Player.inventory, obj, 'name')
              let itemDesc = Player.inventory[index].actionResponseObject['examine']
              return itemDesc
          }
      }
      return `object was not found`
  }

  function findBaseAction (index, result) {
    if (index === 'current') {
      result = 'Your current location is: ' + Game.currentLocation.name
      return Screen.displayConsoleMessage(result)
    }

    if (index === 'inventory') {
      return Player.listInventory()
    }
  }

  Game.parseText = function (playerInput) {
    let textInput = playerInput.toLowerCase()
    let inputArray = textInput.split(' ')
    let result = findCommand(inputArray)
    if (typeof result !== 'undefined') {
      Screen.displayConsoleMessage(result)
    }
  }
})()
