function GameClock() {
}

GameClock.prototype = {
  tick: function(board) {
    var newBoard = new Board(board.size);
    for(var j=0;j<board.size;j++) {
      for(var k=0;k<board.size;k++) {
        newBoard.cells[j][k] = this.checkCell(board, j, k);
      }
    }
    return newBoard;
  },

  checkCell: function(board, x, y) {
    var neighborCount = 0;
    for(var j=-1;j<2;j++) {
      for(var k=-1;k<2;k++) {
        if((typeof board.cells[x+j]) !== 'undefined' && (typeof board.cells[x+j][y+k]) !== 'undefined') {
          neighborCount = neighborCount + board.cells[x+j][y+k];
        }
      }
    }
    if(board.cells[x][y]) {
      return ((neighborCount - 1 > 1 && neighborCount - 1 < 4) ? 1 : 0);
    } else {
      return neighborCount == 3 ? 1 : 0;
    }
  }
}
