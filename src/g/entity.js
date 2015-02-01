/**
 * Created by SeVa on 12.2014.
 */
GAME.Entity = function () {
    PIXI.DisplayObjectContainer.call( this );
    this.DEBUG = GAME.DEBUG;
    /*
     mix = ColorMix.mix([C1, C2], [50, 50]);
     */

    this._core_size = 20;
    this._mantle_size = this._core_size*2.5;
    this._cortex_size = this._core_size*3.5;
    this._cortext_color = GAME.Entity.BLUE;
    this._mantle_color = GAME.Entity.GREEN;
    this._core_color = GAME.Entity.BLUE;

    this._create();
};
GAME.Entity.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
GAME.Entity.prototype.constructor = PIXI.Entity;



GAME.Entity.prototype._create = function () {
    // CORTEX
    this._cortexDisplay = new PIXI.DisplayObjectContainer();
    this._cortexGraph = new PIXI.Graphics();
    this._cortexDisplay.addChild(this._cortexGraph);
    this.fillCortex(GAME.Entity.RED);
    //MANTLE
    this._mantleDisplay = new PIXI.DisplayObjectContainer();
    this._mantleGraph = new PIXI.Graphics();
    this._mantleDisplay.addChild(this._mantleGraph);
    this.fillMantle(GAME.Entity.GREEN);
    //CORE
    this._coreDisplay = new PIXI.DisplayObjectContainer();
    this._coreGraph = new PIXI.Graphics();
    this._coreDisplay.addChild(this._coreGraph);
    this.fillCore(GAME.Entity.BLUE);
    //
    this.addChild(this._cortexDisplay);
    this.addChild(this._mantleDisplay);
    this.addChild(this._coreDisplay);
};

GAME.Entity.prototype.fillCore = function (color) {
    var w = this._core_size;
    var h = this._core_size;
    this._fillGraphics(this._coreGraph, color, w, h);
    this._core_color = color;
};
GAME.Entity.prototype.fillMantle = function (color) {
    var w = this._mantle_size;
    var h = this._mantle_size;
    this._fillGraphics(this._mantleGraph, color, w, h);
    this._mantle_color = color;
};
GAME.Entity.prototype.fillCortex = function (color) {
    var w = this._cortex_size;
    var h = this._cortex_size;
    this._fillGraphics(this._cortexGraph, color, w, h);
    this._cortext_color = color;
};


GAME.Entity.prototype._fillGraphics = function (graph, color, width, height) {
    //todo If graphs
    graph.clear();
    graph.beginFill(parseInt( color.toString('my'), 16));
    graph.drawRoundedRect(-width >> 1, -height >> 1, width, height, 10);
    //graph.drawRect(-width >> 1, -height >> 1, width, height);
    graph.endFill();
};


GAME.Entity.RED = new ColorMix.Color(255,79,108);
GAME.Entity.GREEN = new ColorMix.Color(150,255,140);
GAME.Entity.BLUE = new ColorMix.Color(94,194,255);
