let AdventureScreenObject = AdventureScreenObject || {}
let AdventureGameObject = AdventureGameObject || {}
let AdventurePlayerObject = AdventurePlayerObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  let Player = AdventurePlayerObject
  let locationMatrix = {}
  for (var i = 0, n = Game.rooms.length; i < n; i++) {
    let room = Game.rooms[i]
    let roomName = Game.rooms[i].name
    locationMatrix[roomName] = room
  }

  Game.startGame = function () {
    let startingLocation = locationMatrix['laboratory']
    Game.currentLocation = startingLocation
  }

  Game.takePath = function (locationKey) {
    if (locationKey === Game.currentLocation.currentRoomKey) {
      return 'you are currently in this location'
    }
    if (Game.currentLocation.directions.indexOf(locationKey) !== -1) {
      return Game.moveLocation(locationMatrix[locationKey])
    } else {
      return 'that is not a path to go to.'
    }
  }

  Game.checkLockedDirections = function (currentLocation) {
    if (currentLocation.lockedDirections) {
      for (let lockedDirection of currentLocation.lockedDirections) {
          Game.unlockDirection(lockedDirection)
      }
    }
  }

  Game.unlockDirection = function (lockedDirection) {
      let indexOfUnlockingItem = Game.findObjectIndexInArray(Player.inventory, lockedDirection.flag, 'name')
      if (indexOfUnlockingItem !== -1) {
          Game.currentLocation.directions.push(lockedDirection.direction)
          console.log(Game.currentLocation.directions)
          console.log('unlock direction')
      }
  }

  Game.moveLocation = function (newLocation) {
    Game.currentLocation = newLocation
    Game.checkLockedDirections(Game.currentLocation)
    Screen.addAreaText(Game.currentLocation)
  }
})()
