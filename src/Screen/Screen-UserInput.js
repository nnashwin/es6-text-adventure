let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  Screen.previousCommands = []
  let previousCommandCounter = Screen.previousCommands.length
  Screen.userTextToScreen = function () {
    let userInputField = document.getElementById('text-input')
    userInputField.onkeydown = function (e) {
      let userInput
      let event = e || window.event
      let keyCode = event.keyCode || event.which
      if (keyCode === 38) {
        if (previousCommandCounter !== 0) {
          let value = Screen.previousCommands[previousCommandCounter - 1]
          userInputField.value = value
          console.log(previousCommandCounter)
          previousCommandCounter--
        }
      }

      if (keyCode === 40) {
        if (previousCommandCounter !== Screen.previousCommands.length - 1) {
          let value = Screen.previousCommands[previousCommandCounter + 1]
          userInputField.value = value
          console.log(previousCommandCounter)
          previousCommandCounter++
        }
      }
      if (keyCode === 13) {
        userInput = userInputField.value
        Screen.previousCommands.push(userInput)
        previousCommandCounter = Screen.previousCommands.length
        console.log(Screen.previousCommands)
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
  }

  Screen.displayConsoleMessage = function (message) {
    let consoleDiv = document.createElement('div')
    let consoleText = document.createTextNode(message)
    let newBreak = document.createElement('br')
    consoleDiv.classList.add('pb-5')
    document.getElementById('text').appendChild(consoleDiv)
    document.getElementById('text').appendChild(newBreak)
    consoleDiv.appendChild(consoleText)
  }

  Screen.addAreaText = function (locationName) {
    let newTitleDiv = document.createElement('div')
    let newTitleText = document.createTextNode(locationName.name)
    let newDescDiv = document.createElement('div')
    let newDescText = document.createTextNode(locationName.desc)
    let newBreak = document.createElement('br')
    newTitleDiv.classList.add('ta-c', 'pb-5')
    document.getElementById('text').appendChild(newTitleDiv)
    document.getElementById('text').appendChild(newBreak)
    document.getElementById('text').appendChild(newDescDiv)
    document.getElementById('text').appendChild(newBreak)
    newTitleDiv.appendChild(newTitleText)
    newDescDiv.appendChild(newDescText)
  }
})()
