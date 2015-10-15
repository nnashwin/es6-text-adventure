let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
let PlayerObject = PlayerObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  let Player = PlayerObject
  function findCommand (inputArray) {
    for (var i = 0, n = inputArray.length; i < n; i++) {
      let index = inputArray[i]
      let result
      if (index === 'current') {
        result = 'Your current location is: ' + Game.currentLocation.name
        return result
      }

      if (index === 'check') {
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let checkedObject = inputArray[j]
          if (checkedObject === 'inventory') {
            return Player.listInventory()
          }
        }
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
        return {
          message: "location doesn't exist"
        }
      } else if (Game.commands[index] && Game.commands[index] === 'obtain') {
        console.log('grab that item')
        result = findItem(inputArray, i)
        return result
      } else {
        return {
          message: 'your input was not recognized'
        }
      }
    }
  }

  function findItem (inputArray, i) {
    for (let j = i + 1, n = inputArray.length; j < n; j++) {
      let itemIndex = inputArray[j]
      console.log(itemIndex)
      if (Game.currentLocation.items.indexOf(itemIndex) !== -1) {
        console.log(Game.currentLocation.items.indexOf(itemIndex))
        return {
          item: itemIndex
        }
      } else {
        return {
          message: 'item was not found'
        }
      }
    }
  }
  Game.parseText = function (playerInput) {
    let textInput = playerInput.toLowerCase()
    let inputArray = textInput.split(' ')
    let result = findCommand(inputArray)
    console.log(result)
    Screen.displayConsoleMessage(result.message)
  }
})()
