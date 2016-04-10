Game.Map = function(tiles) {
  this._tiles = tiles
  this._width = tiles.length
  this._height = tiles[0].length
}

// GETTERS
Game.Map.prototype.getWidth = function() {
  return this._width
}
Game.Map.prototype.getHeight = function() {
  return this._height
}

// GET TILE BASED ON GIVEN COORD
Game.Map.prototype.getTile = function(x, y) {
  // RETURN NULL TILE IF OUT OF BOUNDS
  if (x < 0 || x >= this._width || y < 0 || y >= this.height) {
    return Game.Tile.nullTile
  } else {
    return this._tiles[x][y] || Game.Tile.nullTile
  }
}

// DIG FUNCTION
Game.Map.prototype.dig = function(x, y) {
  // UPDATE TILE IF DIGGABLE
  if (this.getTile(x, y).isDiggable()) {
    this._tiles[x][y] = Game.Tile.floorTile
  }
}
// SPAWN CHARACTER ON FLOOR TILE
Game.Map.prototype.getRandomFloorPosition = function() {
  // GENERATE FLOOR TILE RANDOMLY
  var x, y
  do {
    x = Math.floor(Math.random() * this._width)
    y = Math.floor(Math.random() * this._width)
  } while (this.getTile(x, y) != Game.Tile.floorTile)
  return {x: x, Y: y}
}

