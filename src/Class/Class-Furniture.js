let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  class Furniture {
    constructor (name, desc, commands) {
      this.name = name
      this.desc = desc
      this.commands = commands
    }
  }
  Game.Furniture = Furniture
})()
