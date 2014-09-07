function Board(size) {
  this.size = size;
  this.cells = new Array(size);
  for(var j=0;j<size;j++) {
    this.cells[j] = new Array(size);
  }
}
