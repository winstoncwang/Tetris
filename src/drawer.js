import { TETROS } from './Configs';

export default function Drawer (canvas, ctx, canvasNext, ctxNext) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.nextCanvas = canvasNext;
	this.ctxNext = ctxNext;
	this.cx = 4;
	this.cy = 4;
	this.wx = 10;
	this.wy = 20;
}

Drawer.prototype.drawNext = function (next, callbacks) {
	this.next = next;
	this.callbacks = callbacks;
	this.pcx = this.nextCanvas.width / this.cx;
	this.pcy = this.nextCanvas.height / this.cy;

	this.paddingX =
		this.next.blockType === 'i' ? 0 : this.next.blockType === 'o' ? 1 : 0.5;
	this.paddingY = this.next.blockType === 'i' ? 0.5 : 1;

	this.ctxNext.clearRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
	this.ctxNext.fillStyle = 'lightgrey';
	this.ctxNext.fillRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
	this.ctxNext.strokeRect(
		0,
		0,
		this.nextCanvas.width,
		this.nextCanvas.height
	);

	this.callbacks.eachPixel(
		this.paddingX,
		this.paddingY,
		this.next,
		(x, y, color) => {
			this.ctxNext.fillStyle = color;
			this.ctxNext.fillRect(
				x * this.pcx,
				y * this.pcy,
				this.pcx,
				this.pcy
			);
			this.ctxNext.strokeRect(
				x * this.pcx,
				y * this.pcy,
				this.pcx,
				this.pcy
			);
		}
	);
};

Drawer.prototype.drawWell = function (getPieceArr, px, py) {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.ctx.fillStyle = 'lightgrey';
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

	//draw the existing pieceArr
	for (let x = 0; x < this.wx; x++) {
		for (let y = this.wy; y >= 0; y--) {
			if (getPieceArr(x, y)) {
				this.drawPixel(
					x,
					y,
					TETROS[getPieceArr(x, y)].color,
					px,
					py,
					this.ctx
				);
			}
		}
	}

	this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
};

Drawer.prototype.drawPiece = function (current) {
	this.callbacks.eachPixel(current.x, current.y, current, this.drawPixel);
};

Drawer.prototype.drawPixel = function (x, y, color, px, py, ctx) {
	ctx.fillStyle = color;
	ctx.fillRect(x * px, y * py, px, py);
	ctx.strokeRect(x * px, y * py, px, py);
};
