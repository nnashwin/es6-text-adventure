let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  function findCommand (inputArray) {
    for (var i = 0, n = inputArray.length; i < n; i++) {
      let index = inputArray[i]
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
          return {
            error: "location doesn't exist"
          }
        }
      } else if (Game.commands[index] && Game.commands[index] === 'takeItem') {
        console.log('grab that item')
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let itemIndex = inputArray[j]
          console.log(itemIndex)
          if (Game.currentLocation.items) {
            return console.log('item found')
          } else {
            return console.log('item not found')
          }
        }
      } else {
        return {
          error: 'your input was not recognized'
        }
      }
    }
  }
  Game.parseText = function (playerInput) {
    let textInput = playerInput.toLowerCase()
    let inputArray = textInput.split(' ')
    let result = findCommand(inputArray)
    if (result.error) Screen.displayError(result.error)
  }
})()
