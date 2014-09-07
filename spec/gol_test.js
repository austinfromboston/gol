var expect = chai.expect;

describe("Board", function() {
  beforeEach(function() {
    this.board = new Board(5);
  });
  it("has a size", function() {
    expect(this.board.size).to.equal(5)
  });

  describe("#cells",function() {
    it("can be addressed via array notation", function() {
      board = this.board;
      expect(function() { board.cells[4][4]; }).to.not.throw(Error);
    });
  });


});
