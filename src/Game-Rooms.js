var AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  var Game = AdventureGameObject
  var rooms = [
    {
      key: 'intro',
      name: 'Introduction',
      desc: '',
      directions: ['dr_lights_lab']
    },
    {
      key: 'dr_lights_lab',
      name: 'laboratory',
      desc: 'a damp and dark ruin, full of dust and sand.  Shattered remains of rusted terminals and an old office chair lies sits in the back corner of the office.  A queer smell of gasoline and building materials pervades the entire building. in the corner of the office a note lies on the metallic ruins of what appears to be a table.',
      tableTop: 'on the tabletop lies insulation and rocks from the ceiling.  as you look at the table a note can be seen sticking out from underneath a pile of rocks.',
      computer: "the room begins to shake as you reenter Dr. Light's lab. A panel on the wall to your left slides open and you see an opening big enough for you to fit through.",
      message: 'the City needs you Now...',
      items: ['note', 'helmet', 'capsule'],
      directions: ['the_fields'],
      lockedDirections: [{ direction: 'capsule_room', flag: 'protomans_disk' }]
    },
    {
      key: 'the_fields',
      name: 'fields',
      desc: 'a damp and dark ruin, full of dust and sand.  Shattered remains of rusted terminals and an old office chair lies sits in the back corner of the office.  A queer smell of gasoline and building materials pervades the entire building. in the corner of the office a note lies on the metallic ruins of what appears to be a table.',
      items: [],
      directions: ['lights_office', 'the_city_outskirts']
    },
    {
      key: 'the_city_outskirts',
      name: 'outskirts',
      desc: 'shrouded in the shadows of all the buildings, you see that what once stood here was a glorious and advanced cityscape, full of people, facilities, and technology.  The landscape is full of dust and corroded parts scattered amongst the rocks. in the center of the city a large building can be seen still looking pristine as the day it was built.  immaculate windows cover all four directions, and it serves as a foil to the desolated background of the cityscape and surrounding area.  a giant W can be soon on its top level, placed to watch over the entire city.' , 
      items: [],
      directions: ['the_fields', 'city_slums']
    },
    {
      key: 'city_slums',
      name: 'slums',
      desc: '',
      items: [],
      directions: ['the_city_outskirts', 'city_hall', 'the_subway', 'the_mall']
    },
    {
      key: 'city_hall',
      name: 'city hall',
      desc: '',
      items: [],
      directions: []
    },
    {
      key: 'subway',
      name: 'subway',
      desc: '',
      items: [],
      directions: []
    },
    {
      key: 'mall',
      name: 'the mall',
      desc: '',
      items: [],
      directions: []
    },
  ]

  Game.rooms = rooms
})()
