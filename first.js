import {Location} from './location'
import {rooms} from './room-config.js'

var locationMatrix = {}
for (var i = 0, n = rooms.length; i < n; i++) {
  let room = rooms[i]
  let roomKey = rooms[i].key
  locationMatrix[roomKey] = room
}

console.log(locationMatrix['dr_lights_lab'].directions)

if (locationMatrix['dr_lights_lab'].directions.includes('the_fields')) {
}

function moveLocations (newLocation) {
  console.log(newLocation)
  return {
    currentRoom: newLocation.name,
    directions: newLocation.directions
  }
}

moveLocations(locationMatrix['dr_lights_lab'])

// iterate(locations)
