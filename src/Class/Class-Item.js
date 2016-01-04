let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  class Item {
    constructor (name, desc, actionsThatCanBeUsed) {
      this.name = name
      this.desc = desc
      this.actions = actionsThatCanBeUsed
      this.type = 'item'
      let actionObject = {}

      for (let action of this.actions) {
        if (this.actions.indexOf(action) !== -1) {
            actionObject[action + 'able']
        }
      }
    }
  }
  Game.Item = Item
})()
