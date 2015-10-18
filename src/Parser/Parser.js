let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
let AdventurePlayerObject = AdventurePlayerObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  let Player = AdventurePlayerObject
  function findCommand (inputArray) {
    for (var i = 0, n = inputArray.length; i < n; i++) {
      console.log(Game.currentLocation)
      let index = inputArray[i]
      let result

      if (index === 'current' || index === 'inventory') {
        return findBaseAction(index, result)
      }

      if (Game.commands[index] && Game.commands[index] === 'changeLocation') {
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let locationName = inputArray[j]
          console.log(locationName)
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
        console.log('grab that item')
        result = findItem(inputArray, i)
        console.log(result)
        if (result.item) {
          return Player.addItem(result.item)
        } else {
          return result
        }
      }
    }
    return 'that command is not recognized'
  }

  function findItem (inputArray, i) {
    let error
    for (let j = i + 1, n = inputArray.length; j < n; j++) {
      let itemIndex = inputArray[j]
      console.log(arrayObjectIndexOf(Game.currentLocation.items, itemIndex, 'name'))
      if (arrayObjectIndexOf(Game.currentLocation.items, itemIndex, 'name') !== -1) {
        console.log('itemIndex: ' + itemIndex)
        return {
          item: itemIndex
        }
      }
    }
    error = 'item was not found'
    return error
  }

  function findBaseAction (index, result) {
    if (index === 'current') {
      result = 'Your current location is: ' + Game.currentLocation.name
      console.log(result)
      return Screen.displayConsoleMessage(result)
    }

    if (index === 'inventory') {
      console.log('checking inventory')
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
    console.log(typeof result)
    if (typeof result !== 'undefined') {
      Screen.displayConsoleMessage(result)
    }
  }
})()
