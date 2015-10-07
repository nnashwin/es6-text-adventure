var AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  var Game = AdventureGameObject
  console.log(Game)
  console.log('game rooms' + Game.tyler)
  var rooms = [
    {
      key: 'dr_lights_lab',
      name: "dr. light's lab",
      desc: 'a damp and dark ruin, full of dust and sand.  Shattered remains of rusted terminals and an old office chair lies sits in the back corner of the office.  A queer smell of gasoline and building materials pervades the entire building. in the corner of the office a note lies on the metallic ruins of what appears to be a table.',
      directions: ['the_fields']
    },
    {
      key: 'the_fields',
      name: 'the fields',
      desc: 'a damp and dark ruin, full of dust and sand.  Shattered remains of rusted terminals and an old office chair lies sits in the back corner of the office.  A queer smell of gasoline and building materials pervades the entire building. in the corner of the office a note lies on the metallic ruins of what appears to be a table.',
      tableTop: 'on the tabletop lies insulation and rocks from the ceiling.  as you look at the table a note can be seen sticking out from underneath a pile of rocks.',
      message: 'the City needs you Now...',
      directions: ['lights_office', 'the_city']
    },
    {
      key: 'the_city',
      name: 'the city',
      desc: '',
      directions: ['the_fields', 'city_hall']
    },
    {
      key: 'city_hall',
      name: 'city hall',
      desc: '',
      directions: ['the_city']
    }
  ]

  Game.rooms = rooms
})()
