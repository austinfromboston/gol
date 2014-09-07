describe("CanvasRenderer", function() {
  it("has a canvas", function() {
    cr = new CanvasRenderer()
    expect(cr.canvas).to.not.be.undefined;
  });

  describe("#render", function() {
    beforeEach(function() {
      this.renderer = new CanvasRenderer();
      this.board = new Board(2);
      this.board.cells = [[1,0],[0,1]];
      this.renderer.render(this.board);
    });
    it("makes active cells black", function() {
      expect(this.renderer.surface.getImageData(5,5,1,1).data).to.deep.equal({'0':0,'1':0,'2':0,'3':255});
    });
    it("makes inactive cells white", function() {
      expect(this.renderer.surface.getImageData(15,5,1,1).data).to.deep.equal({'0':255,'1':255,'2':255,'3':255});
    });
  });

});
