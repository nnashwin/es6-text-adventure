let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  let Screen = AdventureScreenObject

  /* start the game */
  window.onload = function () {
    Game.currentLocation = Game.startGame()
    Screen.addAreaText(Game.currentLocation)
    Screen.userTextToScreen()
  }

  //function userTextToScreen () {
  //  let userInputField = document.getElementById('text-input')
  //  userInputField.onkeypress = function (e) {
  //    let userInput
  //    let event = e || window.event
  //    let keyCode = event.keyCode || event.which
  //    if (keyCode === 13) {
  //      userInput = userInputField.value
  //      userInputField.value = ''
  //      Game.userInput = userInput
  //      return addUserText(userInput)
  //    }
  //  }
  //}

  //function addUserText (userInput) {
  //  let userInputDiv = document.createElement('div')
  //  let newUserText = document.createTextNode(userInput)
  //  document.getElementById('text').appendChild(userInputDiv)
  //  userInputDiv.appendChild(newUserText)
  //}

  //function addAreaText (location) {
  //  console.log(location)
  //  let newTitleDiv = document.createElement('div')
  //  newTitleDiv.classList.add('ta-c', 'pb-5')
  //  let newTitleText = document.createTextNode(location.currentRoomName)
  //  let newDescDiv = document.createElement('div')
  //  let newDescText = document.createTextNode(location.currentRoomDesc)
  //  let newBreak = document.createElement('br')
  //  document.getElementById('text').appendChild(newTitleDiv)
  //  document.getElementById('text').appendChild(newBreak)
  //  document.getElementById('text').appendChild(newDescDiv)
  //  document.getElementById('text').appendChild(newBreak)
  //  newTitleDiv.appendChild(newTitleText)
  //  newDescDiv.appendChild(newDescText)
  //}
})()
