let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  Game.parseText = function (playerInput) {
    console.log(playerInput)
    let textInput = playerInput.toLowerCase()
    let inputArray = textInput.split(' ')
    for (var i = 0, n = inputArray.length; i < n; i++) {
      let index = inputArray[i]
      if (Game.commands[index] && Game.commands[index] === 'movement') {
        console.log('movement')
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let locationIndex = inputArray[j]
          if (Game.rooms[locationIndex]) {
            return console.log(Game.currentLocation)
          } else {
            return console.log('location not found')
          }
        }
      } else if (Game.commands[index] && Game.commands[index] === 'action') {
        console.log('action')
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let itemIndex = inputArray[j]
          console.log(itemIndex)
          // if (Game.currentLocation.items.indexOf(itemIndex) !== -1) {
          if (Game.currentLocation.items) {
            return console.log('item found')
          } else {
            return console.log('item not found')
          }
        }
      } else {
        console.log('your input was not recognized')
      }
    }
  }
})()
