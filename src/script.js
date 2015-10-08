let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  var Game = AdventureGameObject
  console.log(Game.currentLocation)
  let screen = document.getElementById('screen')

  /* start the game */
  window.onload = function () {
    addAreaText(Game.currentLocation)
    for (let i = 0; i < 100; i++) {
      addAreaText(Game.currentLocation)
    }
    getUserInput()
  }

  function getUserInput () {
    let userInputField = document.getElementById('text-input')
    userInputField.onkeypress = function (e) {
      let event = e || window.event
      let keyCode = event.keyCode || event.which
      if (keyCode === 13) {
        let inputText = this.value
        this.value = ''
        console.log(inputText)
        return inputText
      }
    }
  }

  function addAreaText (location) {
    console.log(location)
    let newTitleDiv = document.createElement('div')
    newTitleDiv.classList.add('ta-c', 'pb-5')
    let newTitleText = document.createTextNode(location.currentRoomName)
    let newDescDiv = document.createElement('div')
    let newDescText = document.createTextNode(location.currentRoomDesc)
    let newBreak = document.createElement('br')
    document.getElementById('text').appendChild(newTitleDiv)
    document.getElementById('text').appendChild(newBreak)
    document.getElementById('text').appendChild(newDescDiv)
    document.getElementById('text').appendChild(newBreak)
    newTitleDiv.appendChild(newTitleText)
    newDescDiv.appendChild(newDescText)
  }
})()
