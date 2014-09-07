function Genesis() {


}

Genesis.prototype = {
  reset: function(board) {
    for(var j=0;j<board.size;j++) {
      for(var k=0;k<board.size;k++) {
        board.cells[j][k] = Math.round(Math.random(1));
      }
    }
    return board;
  }
}
