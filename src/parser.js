let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  Game.parseText = function (playerInput) {
    let textInput = playerInput.toLowerCase()
    let inputArray = textInput.split(' ')
    for (var i = 0, n = inputArray.length; i < n; i++) {
      let index = inputArray[i]
      // if (Game.commands[index]) {
      //   switch (Game.commands[index]) {
      //     case 'changeLocation':
      //       for (let j = i + 1, n = inputArray.length; j < n; j++) {
      //         let locationName = inputArray[j]
      //         console.log(locationName)
      //         console.log(Game.rooms[locationName])
      //         if (Game.rooms[locationName]) {
      //           return console.log(Game.rooms[locationName])
      //         } else {
      //           return console.log('location not found')
      //         }
      //       }
      //     case 'obtain':
      //       for (let j = i + 1, n = inputArray.length; j < n; j++) {
      //         let itemIndex = inputArray[j]
      //         console.log(itemIndex)
      //         if (Game.currentLocation.items) {
      //           return console.log('item found')
      //         } else {
      //           return console.log('item not found')
      //         }
      //       }
      //   }
      // }

      if (Game.commands[index] && Game.commands[index] === 'changeLocation') {
        for (let j = i + 1, n = inputArray.length; j < n; j++) {
          let locationName = inputArray[j]
          if (locationName === 'city') {
            locationName = inputArray[j] + ' ' + inputArray[j + 1]
          }
          console.log(Game.rooms)
          console.log(Game.currentLocation.directions.indexOf(locationName))
          if (Game.currentLocation.directions.indexOf(locationName) !== -1) {
            return Game.takePath(locationName)
          } else {
            console.log('location not found')
          }
        }
      } else if (Game.commands[index] && Game.commands[index] === 'takeItem') {
        console.log('grab that item')
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
