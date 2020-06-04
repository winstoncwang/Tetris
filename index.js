import { drawNext } from './next.js';

class Tetris extends util {
	constructor (canvas, body, next) {
		super();

		this.canvas = canvas;
		this.canvasNext = next;
		this.body = body;
		//canvas var
		this.ctx = this.canvas.getContext('2d');
		this.ctxNext = this.canvasNext.getContext('2d');
		this.cw = this.canvas.width;
		this.ch = this.canvas.height;
		//rendering timeStamp variable
		this.last = 0;
		this.now = 0;
		this.dt = 0;
		this.step = 1.2;
		this.t = 0;
		//well dimension
		this.wx = 10;
		this.wy = 20;
		//handleEvent
		this.body.addEventListener('keydown', this.keyQueue);
		//EventQueue
		this.evQueue = [];
		//collision detection
		this.validSpace;
		//currentPiece
		this.current;
		this.next;
		//piece array
		this.pieceArr = Array(this.wx)
			.fill()
			.map(() => Array(this.wy).fill(null));
	}
	//-------------------
	//     RUN THE LOOP
	//-------------------

	run () {
		requestAnimationFrame(this.gameLoop);

		//init block pixel
		this.px = this.canvas.width / this.wx;
		this.py = this.canvas.height / this.wy;
		this.setCurrentPiece();
		this.setNextPiece();
	}

	setCurrentPiece (rndType = this.randomBlock()) {
		this.current = rndType;
	}

	setNextPiece (rndType = this.randomBlock()) {
		this.next = rndType;
	}

	//-------------------
	//     GAME LOOP
	//-------------------

	gameLoop = (timestamp) => {
		this.now = timestamp;
		//calculate the timeStamp
		//console.log(parseFloat(1 / this.dt).toFixed(1));
		this.dt = Math.min(1, (this.now - this.last) / 1000);
		//listen for user input
		//update canvas
		this.update(this.dt);
		//draw canvas
		this.draw();
		this.last = this.now;
		requestAnimationFrame(this.gameLoop);
	};

	//-------------------
	//     EventHandler
	//-------------------
	keyQueue = (e) => {
		switch (e.keyCode) {
			case KEY.UP:
				this.evQueue.push(KEY.UP);
				break;
			case KEY.DOWN:
				this.evQueue.push(KEY.DOWN);
				break;
			case KEY.LEFT:
				this.evQueue.push(KEY.LEFT);
				break;
			case KEY.RIGHT:
				this.evQueue.push(KEY.RIGHT);
				break;
			case KEY.SPACE:
				this.run();
				break;
		}
	};

	handler = (actionQueue) => {
		switch (actionQueue) {
			case KEY.UP:
				this.move(KEY.UP);
				break;
			case KEY.DOWN:
				this.move(KEY.DOWN);
				break;
			case KEY.LEFT:
				this.move(KEY.LEFT);
				break;
			case KEY.RIGHT:
				this.move(KEY.RIGHT);
				break;
		}
	};

	move (dir) {
		let prevX = this.current.x;
		let prevY = this.current.y;
		switch (dir) {
			case KEY.UP:
				this.rotate(this.current);
				break;
			case KEY.DOWN:
				this.current.y += 1;
				break;
			case KEY.LEFT:
				this.current.x -= 1;
				break;
			case KEY.RIGHT:
				this.current.x += 1;
				break;
		}
		//if didnt find a valid space
		if (!this.validSpace()) {
			this.current.x = prevX;
			this.current.y = prevY;

			return false;
		} else {
			return true;
		}
	}

	rotate ({ dir }) {
		switch (dir) {
			case DIR.UP:
				this.current.dir = DIR.RIGHT;
				break;
			case DIR.RIGHT:
				this.current.dir = DIR.DOWN;
				break;
			case DIR.DOWN:
				this.current.dir = DIR.LEFT;
				break;
			case DIR.LEFT:
				this.current.dir = DIR.UP;
				break;
		}
	}

	//-------------------
	//     validateSpace
	//-------------------
	validSpace () {
		let result = true;
		this.eachPixel(this.current.x, this.current.y, this.current, (x, y) => {
			if (
				x < 0 ||
				x >= this.wx ||
				y < 0 ||
				y >= this.wy ||
				this.getPieceArr(x, y)
			) {
				result = false;
			}
		});

		return result;
	}

	//-------------------
	//     Rendering
	//-------------------

	update (dt) {
		//handle user input, making changes to current x,y position of the piece
		this.handler(this.evQueue.shift());
		//make the piece drop after certain time has passed
		this.t += dt;
		//console.log(this.t);
		if (this.t > this.step) {
			this.t -= this.step;
			///console.log('---------------DROP-----------------');
			this.drop();
		}
	}

	draw = () => {
		this.ctx.save();
		this.drawWell();
		drawNext(this.canvasNext, this.ctxNext, this.next, this.eachPixel);
		this.drawPiece();
		this.ctx.restore();
	};

	drawWell () {
		this.ctx.clearRect(0, 0, this.cw, this.ch);
		this.ctx.fillStyle = 'lightgrey';
		this.ctx.fillRect(0, 0, this.cw, this.ch);

		//drop the existing pieceArr
		for (let y = 0; y < this.wy; y++) {
			for (let x = 0; x < this.wx; x++) {
				if (this.getPieceArr(x, y)) {
					this.drawPixel(
						x,
						y,
						tetrominoes[this.getPieceArr(x, y)].color
					);
				}
			}
		}
		this.ctx.strokeRect(0, 0, this.px * this.wx, this.py * this.wy);
	}

	drawPiece = () => {
		this.eachPixel(
			this.current.x,
			this.current.y,
			this.current,
			this.drawPixel
		);
	};

	//check through each pixel
	eachPixel = (x, y, currentPiece, callback) => {
		const { blockType, dir } = currentPiece;
		//increment through the bits
		let row = 0;
		let col = 0;
		const { color, blocks } = tetrominoes[blockType];
		for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
			//draw piece
			//bit by bit comparison of 2^16(0x8000) and block orientation hex
			if (blocks[dir] & bit) {
				//draw the pixels
				callback(x + col, y + row, color);
			}

			col++;
			if (col == 4) {
				col = 0;
				row++;
			}
		}
	};

	drawPixel = (x, y, color) => {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(x * this.px, y * this.py, this.px, this.py);
		this.ctx.strokeRect(x * this.px, y * this.py, this.px, this.py);
	};

	//auto drop piece down and check for collision if occupied spave
	drop () {
		//move down
		if (!this.move(KEY.DOWN)) {
			this.droppedPiece(); //set the piece arr index
			this.eachRow(); //search for a complete line and remove

			this.setCurrentPiece(this.next); //set current piece to next piece
			this.setNextPiece(); //get random piece
			this.clearEvQueue(); //clear all remaining event queue
		}
	}

	//save the dropped pieces into piece arr
	droppedPiece () {
		this.eachPixel(this.current.x, this.current.y, this.current, (x, y) => {
			this.setPieceArr(x, y);
		});
	}

	setPieceArr (x, y, blockType = this.current.blockType) {
		this.pieceArr[x][y] = blockType;
		//console.log(this.pieceArr);
	}

	getPieceArr (x, y) {
		return this.pieceArr[x][y];
	}
}
const next = document.querySelector('#next');

const canvas = document.querySelector('#canvas');
const body = document.querySelector('body');

const game = new Tetris(canvas, body, next);
