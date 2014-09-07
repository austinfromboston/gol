function CanvasRenderer() {
  this.canvas = document.createElement('canvas');
  this.surface = this.canvas.getContext('2d');
}

CanvasRenderer.prototype = {
  render: function(board) {
    for(var j=0;j<board.size;j++) {
      for(var k=0;k<board.size;k++) {
        this.surface.fillStyle = board.cells[j][k] ? 'black' : 'white';
        this.surface.fillRect(10*j, 10*k, 10, 10);
      }
    }
  }
};
