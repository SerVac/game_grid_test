/**
 * Created by SeVa on 12.2014.
 */
GAME.Grid = function (columns, rows, type) {
    this.DEBUG = GAME.DEBUG;

    this.cols = columns;
    this.rows = rows;
    this.size = this.cols * this.rows;

    this.blocks = this.emptyInit();
};
GAME.Grid.prototype.constructor = GAME.Grid;

//CELL
GAME.Grid.Cell = function (x, y, value) {
    this.DEBUG = GAME.DEBUG;
    this._point = new PIXI.Point(x, y);
    this._value = value;
};
GAME.Grid.Cell.prototype = {
    get value() {
        return this._value;
    },
    set value(value) {
        this._value = value;
        if (this._value.position) {
            this._value.position.x = this._point.x;
            this._value.position.y = this._point.y;
            if (this.DEBUG) console.log(value.name + ": setTo:" + this._point.toString() + "; now: " + this._value.position.toString());
        }
    }
};
GAME.Grid.Cell.prototype.constructor = GAME.Grid.Cell;

//
GAME.Grid.prototype.emptyInit = function () {
    return this.matrix_position();
}

GAME.Grid.prototype.matrix_position = function () {
    var cells = [];
    var step = 100;
    if (this.DEBUG) console.log("matrix_position:")
    for (var j = 0; j < this.rows; j++) {
        for (var i = 0; i < this.cols; i++) {
            var x = i * step;
            var y = j * step;
            if (this.DEBUG) console.log("[" + i + "; " + j + "] (x: " + x + "; y: " + y + ")")
            this._setCellInArray(cells, j, i, new GAME.Grid.Cell(x, y, null));
        }
    }
    return cells;
}

GAME.Grid.prototype._setCellInArray = function (cells, row, col, cellObj) {
    if (cells) cells[row * this.cols + col] = cellObj;
    if (this.DEBUG) console.log("Cells: length = " + cells.length + "; cell[" + row + "," + col + "]=" + cellObj + "\n");
}

GAME.Grid.prototype.getCell = function (row, col) {
    row = row ? row : 0;
    col = col ? col : 0;
    return (this.blocks) ? this.blocks[row * this.cols + col] : null;
}

GAME.Grid.prototype.setCell = function (row, col, value) {
    row = row ? row : 0;
    col = col ? col : 0;
    this.getCell(row, col).value = value;
};

/*GAME.Grid.prototype.setSpriteIn = function (row, col, sprite) {
 row = row ? row : 0;
 col = col ? row : 0;
 var cell = this.getCell(row, col);
 if (cell) cell.
 };*/


