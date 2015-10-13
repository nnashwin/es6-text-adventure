
var AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  var Game = AdventureGameObject
  var locationMatrix = {}
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
    console.log(locationMatrix)
    if (locationKey === Game.currentLocation.currentRoomKey) {
      console.log('you are currently in this location')
    }
    if (Game.currentLocation.directions.indexOf(locationKey) !== -1) {
      return Game.moveLocation(locationMatrix[locationKey])
    } else {
      return console.log('that is not a path to go to.')
    }
  }

  Game.moveLocation = function (newLocation) {
    Game.currentLocation = newLocation
    console.log('new currentLocation after Move: ' + Game.currentLocation)
    console.log(Game.currentLocation)
  }
})()
