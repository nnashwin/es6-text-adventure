let AdventureGameObject = AdventureGameObject || {}
;(function (undefined) {
  let Game = AdventureGameObject
  class Item {
      constructor (name, desc, actionsThatCanBeUsed, actionResponseObject = {'examine': `You see a ${name}`, 'obtain': `${name} has been added to your inventory.`}) {
      this.name = name
      this.desc = desc
      this.actions = actionsThatCanBeUsed
      this.type = 'item'
      this.actionResponseObject = actionResponseObject
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
