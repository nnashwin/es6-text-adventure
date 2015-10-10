var TextInputParser = TextInputParser || {}

;(function (undefined) {
  let Parser = TextInputParser
  console.log(Parser)
  var commands = {
    'go': 'movement',
    'move': 'movement',
    'walk': 'movement',
    'take': 'action',
    'grab': 'action',
    'pick': 'action'
  }

  Parser.commands = commands
})()
