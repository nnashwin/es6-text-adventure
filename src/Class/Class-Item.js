let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  class Item {
    constructor (name, desc, actionsThatCanBeUsed) {
      this.name = name
      this.desc = desc
      let actions = actionsThatCanBeUsed
      let actionObject = {}
      for (let action of actions) {
        if (this.actions.indexOf(action)) {
          actionObject[action + 'able']
        }
      }
    }
  }
  Game.Item = Item
})()
