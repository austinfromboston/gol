describe( "GameClock", function() {
  beforeEach(function() {
    this.clock = new GameClock();
  });
  describe("#tick", function() {
    context("for cells with no neighbors", function() {
      beforeEach(function() {
        this.startBoard = new Board(3);
        this.startBoard.cells = [[0,0,0],[0,1,0],[0,0,0]];
      });
      it("kills them", function() {
        var newBoard = this.clock.tick(this.startBoard);
        expect(newBoard.cells).to.deep.equal([[0,0,0],[0,0,0],[0,0,0]]);
      });
    });
    context("for cells with 2 neighbors", function() {
      beforeEach(function() {
        this.startBoard = new Board(3);
        this.startBoard.cells = [[1,0,0],[0,1,0],[0,0,1]];
      });
      it("keeps them", function() {
        var newBoard = this.clock.tick(this.startBoard);
        expect(newBoard.cells).to.deep.equal([[0,0,0],[0,1,0],[0,0,0]]);
      });
    });
    context("for cells with 3 neighbors", function() {
      beforeEach(function() {
        this.startBoard = new Board(3);
        this.startBoard.cells = [[1,0,0],[0,1,0],[1,0,1]];
      });
      it("keeps them", function() {

        var newBoard = this.clock.tick(this.startBoard);
        // center cell survives
        expect(newBoard.cells).to.deep.equal([[0,0,0],[1,1,0],[0,1,0]]);
      });
    });
    context("for cells with 4 neighbors", function() {
      beforeEach(function() {
        this.startBoard = new Board(3);
        this.startBoard.cells = [[1,1,1],[0,1,0],[0,0,1]];
      });
      it("kills them", function() {
        var newBoard = this.clock.tick(this.startBoard);
        //center cell dies
        expect(newBoard.cells).to.deep.equal([[1,1,1],[1,0,0],[0,0,0]]);
      });
    });
    context("for dead cells with 3 neighbors", function() {
      beforeEach(function() {
        this.startBoard = new Board(3);
        this.startBoard.cells = [[1,0,1],[0,0,0],[0,0,1]];
      });
      it("brings them to life", function() {
        var newBoard = this.clock.tick(this.startBoard);
        // center cell resurrects
        expect(newBoard.cells).to.deep.equal([[0,0,0],[0,1,0],[0,0,0]]);
      });
    });
  });
});
