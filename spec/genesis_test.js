describe("Genesis", function() {
  it("resets values on a board", function() {
    var board = new Board(5);
    var g = new Genesis();
    var newBoard = g.reset(board);
    var valueCounts = [0, 0];
    for(j=0;j<board.size;j++) {
      for(k=0;k<board.size;k++) {
        expect(board.cells[j][k]).to.not.be.undefined;
        valueCounts[board.cells[j][k]]++;
      }
    }
    expect(valueCounts[0]).to.be.above(0);
    expect(valueCounts[1]).to.be.above(0);
    expect(valueCounts[2]).to.be.undefined;
    
  });
});
