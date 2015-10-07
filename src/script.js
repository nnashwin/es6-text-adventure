let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  var Game = AdventureGameObject
  console.log(Game.currentLocation)
  let screen = document.getElementById('screen')

  /* start the game */
  window.onload = function() {
    addText(Game.currentLocation)
    for (let i = 0; i < 100; i++) {
      addText(Game.currentLocation)
    }
  }

  function addText (location) {
    console.log(location)
    let newTitleDiv = document.createElement('div')
    let newTitleText = document.createTextNode(location.currentRoomName)
    let newDescDiv = document.createElement('div')
    let newDescText = document.createTextNode(location.currentRoomDesc)
    let newBreak = document.createElement('br')
    document.getElementById('text').appendChild(newTitleDiv)
    document.getElementById('text').appendChild(newBreak)
    document.getElementById('text').appendChild(newDescDiv)
    newTitleDiv.appendChild(newTitleText)
    newDescDiv.appendChild(newDescText)
  }
})()
