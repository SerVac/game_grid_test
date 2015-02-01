/**
 * Created by SeVa on 12.2014.
 */
GAME.GameManager = function (width, height, gridType) {
    this.DEBUG = GAME.DEBUG;
    var self = this;
    // PIXI
    this.stage = new PIXI.Stage(GAME.BGR_COLOR );

    //this.renderer = new PIXI.autoDetectRenderer(GAME.WIDTH, GAME.HEIGTH);
    // if use Canvas all OK
    this.renderer = new PIXI.CanvasRenderer(GAME.WIDTH, GAME.HEIGTH, null, true, true);
    // but if use WebGl :(
    //this.renderer = new PIXI.WebGLRenderer(GAME.WIDTH, GAME.HEIGTH);
    document.body.appendChild(this.renderer.view);

    this.rootSpriteContainer = new PIXI.DisplayObjectContainer();
    this.stage.addChild(this.rootSpriteContainer);
    this.rootSpriteContainer.position.x = 50;
    this.rootSpriteContainer.position.y = 50;
    if (this.DEBUG) {
        var graphics = new PIXI.Graphics();
        graphics.lineStyle(5, 0x000000,1);
        graphics.drawRect(-50, -50, GAME.WIDTH, GAME.HEIGTH);
        this.rootSpriteContainer.addChild(graphics);
    }

    // game
    this.grid = new GAME.Grid(width, height, gridType);
    this.initGame();

};
GAME.GameManager.prototype.constructor = GAME.GameManager;

GAME.GameManager.prototype.initGame = function () {
    var self = this;

    var entities = [];
    for (var j = 0; j < self.grid.rows; j++) {
        for (var i = 0; i < self.grid.cols; i++) {
          /*  var d = new PIXI.DisplayObjectContainer();
            var g = new PIXI.Graphics();
            g.clear();
            g.beginFill(0xFF00A1);
            g.drawRoundedRect(-20, -20, 40, 40, 10);
            g.endFill();
            d.addChild(g);
            self.rootSpriteContainer.addChild(d);*/

            var e = new GAME.Entity();
            self.rootSpriteContainer.addChild(e);
            entities.push(e);
            this.grid.setCell(j, i, e);
        }
    }

    self.renderer.render(self.stage);
};
