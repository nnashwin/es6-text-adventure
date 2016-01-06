let AdventureGameObject = AdventureGameObject || {}

;((undefined) => {
    let Game = AdventureGameObject
    Game.findObjectIndexInArray = function (myArray, searchTerm, property) {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i][property] === searchTerm) return i
        }
        return -1
    }
})()

