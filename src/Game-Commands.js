let AdventureGameObject = AdventureGameObject || {}

;(function (undefined) {
  let Game = AdventureGameObject
  var commands = {
    'go': 'movement',
    'move': 'movement',
    'walk': 'movement',
    'take': 'action',
    'grab': 'action',
    'pick': 'action',
    'choose': 'action',
    'select': 'action',
    'wear': 'action',
    'don': 'action'
  }

  Game.commands = commands
})()
