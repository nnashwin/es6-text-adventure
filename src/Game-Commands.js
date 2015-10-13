let AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  let Game = AdventureGameObject
  var commands = {
    'go': 'changeLocation',
    'move': 'changeLocation',
    'walk': 'changeLocation',
    'take': 'obtain',
    'grab': 'obtain',
    'pick': 'obtain',
    'choose': 'action',
    'select': 'action',
    'wear': 'equip',
    'don': 'equip',
    'put on': 'equip'
  }

  Game.commands = commands
})()
