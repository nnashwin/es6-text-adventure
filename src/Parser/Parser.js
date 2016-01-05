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
          if (locationName === 'city') {
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
        result = findItem(inputArray, i)
        if (result.itemIndex) {
          return Player.addItem(result.itemIndex)
        } else {
          return result
        }
      }

      if (Game.commands[index] && Game.commands[index] === 'examine') {
          console.log('examining')
          return examineObject(inputArray, i)
      }
    }
    return 'that command is not recognized'
  }

  function findItem (inputArray, i) {
    let error
    for (let j = i + 1, n = inputArray.length; j < n; j++) {
      let itemIndex = inputArray[j]
      if (arrayObjectIndexOf(Game.currentLocation.items, itemIndex, 'name') !== -1) {
        return {
          itemIndex: itemIndex
        }
      }
    }
    error = 'item was not found'
    return error
  }

  function determineObjectType (objName) {
      if (arrayObjectIndexOf(Game.currentLocation.items, objName, 'name') !== -1) {
          return 'item'
      }

      if (arrayObjectIndexOf(Game.currentLocation.furniture, objName, 'name') !== -1) {
          return 'furniture'
      }
      return false
  }


  function examineObject (inputArray, i) {
      let error
      for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let obj = inputArray[j]
          let isItem = determineObjectType(obj) === 'item' && arrayObjectIndexOf(Game.currentLocation.items, obj, 'name') !== -1
          let isFurniture = determineObjectType(obj) === 'furniture' && arrayObjectIndexOf(Game.currentLocation.furniture, obj, 'name') !== -1
          if (isItem) {
              let index = arrayObjectIndexOf(Game.currentLocation.items, obj, 'name')
              let itemDesc = Game.currentLocation.items[index].desc
              return itemDesc
          }

          if (isFurniture) {
              let index = arrayObjectIndexOf(Game.currentLocation.furniture, obj, 'name')
              let furnitureDesc = Game.currentLocation.furniture[index].desc
              return furnitureDesc
          }
      }
      return `that object does not exist`
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

  function arrayObjectIndexOf (myArray, searchTerm, property) {
    for (let i = 0, n = myArray.length; i < n; i++) {
      if (myArray[i][property] === searchTerm) return i
    }
    return -1
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
