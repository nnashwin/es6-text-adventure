
var AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  var Game = AdventureGameObject
  var locationMatrix = {}
  for (var i = 0, n = Game.rooms.length; i < n; i++) {
    let room = Game.rooms[i]
    let roomKey = Game.rooms[i].key
    locationMatrix[roomKey] = room
  }

  function startGame () {
    let startingLocation = locationMatrix['dr_lights_lab']
    return {
      currentRoomKey: startingLocation.key,
      currentRoomName: startingLocation.name,
      currentRoomDesc: startingLocation.desc,
      currentDirections: startingLocation.directions
    }
  }

  function takePath (locationKey) {
    console.log(locationMatrix)
    if (locationKey === currentLocation.currentRoomKey) {
      console.log('you are currently in this location')
    }
    if (currentLocation.currentDirections.indexOf(locationKey) !== -1) {
      return moveLocation(locationMatrix[locationKey])
    } else {
      return console.log('that is not a path to go to.')
    }
  }

  function moveLocation (newLocation) {
    let newLoc = {
      currentRoomKey: newLocation.key,
      currentRoomName: newLocation.name,
      currentRoomDesc: newLocation.desc,
      currentDirections: newLocation.directions
    }
    currentLocation = newLoc
    console.log('new currentLocation after Move: ' + currentLocation.currentRoomName)
    console.log(addText())
  }

  let currentLocation = startGame()
  takePath('the_fields')
})()

