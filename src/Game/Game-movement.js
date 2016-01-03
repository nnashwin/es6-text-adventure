let AdventureScreenObject = AdventureScreenObject || {}
let AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
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

  Game.moveLocation = function (newLocation) {
    Game.currentLocation = newLocation
    Screen.addAreaText(Game.currentLocation)
  }
})()
