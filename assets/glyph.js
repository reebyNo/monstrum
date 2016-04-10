Game.Glyph = function(chr, foreground, background) {
  // INSTANTIATE PROPERTIES TO DEFAULT
  this._char = chr || ' '
  this._foreground = foreground || 'white'
  this._background = background || 'black'
}
// GLYPH GETTERS
Game.Glyph.prototype.getChar = function() {
  return this._char
}
Game.Glyph.prototype.getBackground = function() {
  return this._background
}
Game.Glyph.prototype.getForeground = function() {
  return this._foreground
}

// Game.Glyph = function(properties) {
//   properties = properties || {}
//   this._char = properties['character'] || ' '
//   this._foreground = properties['foreground'] || 'white'
//   this._background = properties['background'] || 'black'
// }