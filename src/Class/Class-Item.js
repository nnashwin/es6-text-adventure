let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  class Item {
    constructor (name, desc, loc) {
      this.name = name
      this.desc = desc
      this.loc = loc
    }
  }
  Game.Item = Item
})()
