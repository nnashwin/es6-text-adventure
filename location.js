export class Location {
  constructor (name, description) {
    this.name = name
    this.description = description

  }

  toString () {
    return this.name + ': ' + this.description
  }

}
