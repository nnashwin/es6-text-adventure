let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  Screen.previousCommands = []
  let previousCommandCounter = Screen.previousCommands.length
  Screen.handleUserInput = function () {
    let userInputField = document.getElementById('text-input')
    userInputField.onkeydown = function (e) {
      let userInput
      let event = e || window.event
      let keyCode = event.keyCode || event.which
      if (keyCode === 38) {
        if (previousCommandCounter !== 0) {
          let value = Screen.previousCommands[previousCommandCounter - 1]
          userInputField.value = value
          previousCommandCounter--
        }
      }

      if (keyCode === 40) {
        if (previousCommandCounter !== Screen.previousCommands.length - 1) {
          let value = Screen.previousCommands[previousCommandCounter + 1]
          userInputField.value = value
          previousCommandCounter++
        }
      }
      if (keyCode === 13) {
        userInput = userInputField.value
        Screen.previousCommands.push(userInput)
        previousCommandCounter = Screen.previousCommands.length
        userInputField.value = ''
        return Screen.addUserText(userInput)
      }
    }
  }

  Screen.addUserText = function (userInput) {
    let userInputDiv = document.createElement('div')
    let newUserText = document.createTextNode('> ' + userInput)
    let textHolder = document.getElementById('text-holder')
    let text = document.getElementById('text')
    userInputDiv.classList.add('pb-5')
    document.getElementById('text').appendChild(userInputDiv)
    Game.parseText(userInput)
    userInputDiv.appendChild(newUserText)
    textHolder.scrollTop = text.clientHeight
    return userInput
  }

  Screen.displayConsoleMessage = function (message) {
    let consoleDiv = document.createElement('div')
    let consoleText = document.createTextNode(message)
    let newBreak = document.createElement('br')
    let textDiv = document.getElementById('text')
    consoleDiv.classList.add('pb-5')
    textDiv.appendChild(consoleDiv)
    textDiv.appendChild(newBreak)
    console.log(consoleText)
    return consoleDiv.appendChild(consoleText)
  }

  Screen.addAreaText = function (locationName) {
    let newTitleDiv = document.createElement('div')
    let newTitleText = document.createTextNode(locationName.name)
    let newDescDiv = document.createElement('div')
    let newDescText = document.createTextNode(locationName.desc)
    let newBreak = document.createElement('br')
    let textDiv = document.getElementById('text')
    newTitleDiv.classList.add('ta-c', 'pb-5')
    textDiv.appendChild(newTitleDiv)
    textDiv.appendChild(newBreak)
    textDiv.appendChild(newDescDiv)
    textDiv.appendChild(newBreak)
    newTitleDiv.appendChild(newTitleText)
    newDescDiv.appendChild(newDescText)
  }
})()
