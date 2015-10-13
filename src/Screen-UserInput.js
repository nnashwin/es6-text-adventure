let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject
  Screen.userTextToScreen = function () {
    let userInputField = document.getElementById('text-input')
    userInputField.onkeypress = function (e) {
      let userInput
      let event = e || window.event
      let keyCode = event.keyCode || event.which
      if (keyCode === 13) {
        userInput = userInputField.value
        userInputField.value = ''
        return Screen.addUserText(userInput)
      }
    }
  }

  Screen.addUserText = function (userInput) {
    let userInputDiv = document.createElement('div')
    let newUserText = document.createTextNode(userInput)
    document.getElementById('text').appendChild(userInputDiv)
    Game.parseText(userInput)
    userInputDiv.appendChild(newUserText)
  }

  Screen.addAreaText = function (location) {
    let newTitleDiv = document.createElement('div')
    newTitleDiv.classList.add('ta-c', 'pb-5')
    let newTitleText = document.createTextNode(Game.currentLocation.name)
    let newDescDiv = document.createElement('div')
    let newDescText = document.createTextNode(Game.currentLocation.desc)
    let newBreak = document.createElement('br')
    document.getElementById('text').appendChild(newTitleDiv)
    document.getElementById('text').appendChild(newBreak)
    document.getElementById('text').appendChild(newDescDiv)
    document.getElementById('text').appendChild(newBreak)
    newTitleDiv.appendChild(newTitleText)
    newDescDiv.appendChild(newDescText)
  }
})()
