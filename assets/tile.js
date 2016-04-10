Game.Tile = function(glyph) {
  this._glyph = glyph
}

Game.Tile.prototype.getGlyph = function() {
  return this._glyph
}

Game.Tile.nullTile = new Game.Tile(new Game.Glyph())
Game.Tile.floorTile = new Game.Tile(new Game.Glyph('.'))
Game.Tile.wallTile = new Game.Tile(new Game.Glyph('#', 'grey'))

// Game.Tile = function(properties) {
//   properties = properties || {}
//   // CALL GLYPH CONSTRUCTOR
//   this._isWalkable = properties['isWalkable'] || false
//   this._isDiggable = properties['isDiggable'] || false
// }
// // INHERIT GLYPH FUNCTIONALITY
// Game.Tile.extend(Game.Glyph)

// // GETTERS
// Game.Tile.prototype.isWalkable = function() {
//   return this._isWalkable
// }

// Game.Tile.prototype._isDiggable = function() {
//   return this._isDiggable
// }

// Game.Tile.nullTile = new Game.Tile({})
// Game.Tile.floorTile = new Game.Tile({
//   character: '.',
//   isWalkable: true
// })

// Game.Tile.wallTile = new Game.Tile({
//   character: '#',
//   foreground: 'grey',
//   isDiggable: true
// })