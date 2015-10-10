var TextInputParser = TextInputParser || {}
console.log(TextInputParser)
function parser (playerInput) {
  let textInput = playerInput.toLowerCase()
  let inputArray = textInput.split(' ')
  for (var i = 0, n = inputArray.length; i < n; i++) {
    let index = inputArray[i]
    if(TextInputParser.commands[index] && TextInputParser.commands[index] === 'go') {
    } else {
      console.log('you have entered a nonexistent command')
    }
  }
}

parser("go to laboratory")
