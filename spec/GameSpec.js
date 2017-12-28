describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {

    frame = new Frame()
    game = new Game(frame);
  });
  //
  // it("scores 0 for a gutter game", function() {
  //   game.bowl(0, 20);
  //   expect(game.score).toEqual(0);
  // });

  it("starts a new game with the first frame in the frames array", function() {
    expect(game.frames[0]).toEqual(frame);
  });

  it("starts with a frame index of 1", function() {
    expect(game.frameIndex).toEqual(1);
  });

  describe("#bowl", function() {

    it("bowls in the current frame only if the frame is open", function() {
      game.bowl(5);
      expect(game.frameIndex).toEqual(1);
    });

    it("moves to the next frame if the current frame is a strike", function() {
      game.bowl(10);
      expect(game.frameIndex).toEqual(2);
    });

    it("move to the next frame if the current frame is complete", function() {
      game.bowl(5);
      game.bowl(5);
      expect(game.frameIndex).toEqual(2);
    });



  });
});
