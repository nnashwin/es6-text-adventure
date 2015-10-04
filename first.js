import {rooms} from './room-config.js'

var locationMatrix = {}

for (var i = 0, n = rooms.length; i < n; i++) {
  let room = rooms[i]
  let roomKey = rooms[i].key
  locationMatrix[roomKey] = room
}

if (locationMatrix['dr_lights_lab'].directions.includes('the_fields')) {
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
  if (locationKey === currentLocation.currentRoomKey) {
    console.log('you are currently in this location')
  }

  if (currentLocation.currentDirections.includes(locationKey)) {
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
  console.log(currentLocation)
}

let currentLocation = startGame()
takePath('the_fields')
takePath('the_fields')
takePath('the_fields')

