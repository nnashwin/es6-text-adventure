var AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  var Game = AdventureGameObject
  var rooms = [
    {
      name: 'introduction',
      desc: '',
      directions: ['laboratory']
    },
    {
      name: 'laboratory',
      desc: 'a damp and dark ruin, full of dust and sand.  Shattered remains of rusted terminals and an old office chair lies sits in the back corner of the office.  A queer smell of gasoline and building materials pervades the entire building. in the corner of the office a note lies on the metallic ruins of what appears to be a table.',
      furniture: [
          new Game.Furniture('table', 'on the tabletop lies insulation and rocks from the ceiling.  as you look at the table a note can be seen sticking out from underneath a pile of rocks.', ['examine']),
          new Game.Furniture('note', 'the City needs you Now...', ['examine'])
      ],
      items: [
          new Game.Item('helmet', 'helmet desc', ['location', 'examine', 'obtain'], {'examine': 'this happens when the helmet is examined', 'obtain': 'this happens when the helmet is obtained', 'equip': 'this happens when the helmet is equipped'}),
          new Game.Item('capsule', 'capsule desc', ['location', 'examine', 'obtain'], {'examine': 'capsule examine response', 'obtain': 'capsule obtain response'})
      ],
      directions: ['fields'],
      lockedDirections: [{
        direction: 'capsule room',
        flag: 'disk',
        message: "the room begins to shake as you reenter Dr. Light's lab. A panel on the wall to your left slides open and you see an opening big enough for you to fit through."
      }]
    },
    {
        name: 'capsule room',
        desc: 'a large room remaining intact after all of these years.  you notice a large capsule in the corner of the room that shines with a gloss that you have never seen before.',
        furniture: [
            new Game.Furniture('capsule', 'a bright, shiny capsule', ['examine', 'activate'])
        ]
    },
    {
      name: 'fields',
      desc: 'a damp and dark ruin, full of dust and sand.  Shattered remains of rusted terminals and an old office chair lies sits in the back corner of the office.  A queer smell of gasoline and building materials pervades the entire building. in the corner of the office a note lies on the metallic ruins of what appears to be a table.',
        furniture: [],
        items: [
            new Game.Item('disk', 'a disk from a man in the distant past.', ['location', 'examine', 'obtain'], {'examine': 'you notice the disk gleaming brightly in the sunlight.', 'obtain': 'you feel yourself shudder as you slide the disk into your pocket.'})
        ],
      directions: ['laboratory', 'outskirts']
    },
    {
      name: 'outskirts',
      desc: 'shrouded in the shadows of all the buildings, you see that what once stood here was a glorious and advanced cityscape, full of people, facilities, and technology.  The landscape is full of dust and corroded parts scattered amongst the rocks. in the center of the city a large building can be seen still looking pristine as the day it was built.  immaculate windows cover all four directions, and it serves as a foil to the desolated background of the cityscape and surrounding area.  a giant W can be soon on its top level, placed to watch over the entire city.',
      items: [],
      directions: ['fields', 'slums']
    },
    {
      name: 'slums',
      desc: '',
      items: [],
      directions: ['outskirts', 'city hall', 'subway', 'mall']
    },
    {
      name: 'city hall',
      desc: '',
      items: [],
      directions: []
    },
    {
      name: 'subway',
      desc: '',
      items: [],
      directions: []
    },
    {
      name: 'mall',
      desc: '',
      items: [],
      directions: []
    }
  ]

  Game.rooms = rooms
})()
