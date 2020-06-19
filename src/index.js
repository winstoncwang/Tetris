import { tetrominoes, DIR, KEY } from './configs.js';
import { drawNext, drawWell, drawPiece } from './draw.js';
import tetromino from './tetromino.js';
import evtQueue from './evtQueue.js';
import helper from './helper.js';

class Tetris extends helper {
	constructor (canvas, body, next, tetrominoes, DIR, KEY) {
		super();

		this.canvas = canvas;
		this.canvasNext = next;
		this.body = body;

		//init value
		this.tetrominoes = tetrominoes;
		this.DIR = DIR;
		this.KEY = KEY;

		//canvas var
		this.ctx = this.canvas.getContext('2d');
		this.ctxNext = this.canvasNext.getContext('2d');
		this.canvas.width =
			this.body.querySelector('.container').clientWidth / 2;
		this.canvas.height = this.body.querySelector('.container').clientHeight;

		//rendering timeStamp variable
		this.last = 0;
		this.now = 0;
		this.dt = 0;
		this.step = 1;
		this.t = 0;

		//well dimension
		this.wx = 10;
		this.wy = 20;

		//EventQueue
		this.queueArr = [];

		//currentPiece
		this.current;
		this.next;

		//piece array
		this.pieceArr = Array(this.wx)
			.fill()
			.map(() => Array(this.wy).fill(null));

		//game progression: true=>playing, false=>stopped
		this.gameRunning = false;

		//create instances
		this.tetromino = new tetromino(tetrominoes, this.wx, DIR);
		this.evtQueue = new evtQueue(DIR, KEY, this.wx, this.wy);

		//handleEvent
		//this.body.addEventListener('keydown', this.keyQueue);
		this.body.addEventListener('keydown', (e) => {
			this.evtQueue.keyQueue(e, this.queueArr, this.noticeScreen);
		});
		this.body.querySelector('#play').addEventListener('click', () => {
			this.noticeScreen('play');
		});
		this.body.querySelector('#replay').addEventListener('click', () => {
			this.noticeScreen('play');
		});
		window.addEventListener('resize', this.resize);
	}

	setCurrentPiece (rndType = this.tetromino.randomBlock()) {
		this.current = rndType;
	}

	setNextPiece (rndType = this.tetromino.randomBlock()) {
		this.next = rndType;
	}
	setPieceArr (x, y, blockType = this.current.blockType) {
		this.pieceArr[x][y] = blockType;
		//console.log(this.pieceArr);
	}
	getPieceArr = (x, y) => {
		return this.pieceArr[x][y];
	};
	//-------------------
	//     RUN THE LOOP
	//-------------------
	run = () => {
		if (!this.gameRunning) {
			this.frameId = window.requestAnimationFrame(this.gameLoop);
			this.gameRunning = true;
			this.setCurrentPiece();
			this.setNextPiece();
		}
	};

	//-------------------
	//     GAME LOOP
	//-------------------
	gameLoop = (timestamp) => {
		this.now = timestamp;
		//calculate the timeStamp
		//console.log(parseFloat(1 / this.dt).toFixed(1));
		this.dt = Math.min(1, (this.now - this.last) / 1000);

		//update canvas
		this.update(this.dt);
		//draw canvas
		if (this.gameRunning) {
			this.draw();
			this.last = this.now;

			this.frameId = window.requestAnimationFrame(this.gameLoop);
		}
	};

	//-------------------
	//     Rendering
	//-------------------
	update (dt) {
		//handle user input, making changes to current x,y position of the piece
		this.evtQueue.handler(this.queueArr.shift(), this.current, {
			eachPixel   : this.eachPixel,
			getPieceArr : this.getPieceArr
		});
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
		//init block pixel
		this.px = this.canvas.width / this.wx;
		this.py = this.canvas.height / this.wy;

		drawWell(
			this.ctx,
			this.canvas.height,
			this.canvas.width,
			this.wy,
			this.wx,
			this.tetrominoes,
			this.getPieceArr
		);
		drawNext(this.canvasNext, this.ctxNext, this.next, this.eachPixel);
		drawPiece(this.current.x, this.current.y, this.current, this.eachPixel);
	};

	//check through each pixel
	eachPixel = (x, y, currentPiece, callback) => {
		const { blockType, dir } = currentPiece;
		//increment through the bits
		let row = 0;
		let col = 0;
		const { color, blocks } = this.tetrominoes[blockType];
		for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
			//draw piece
			//bit by bit comparison of 2^16(0x8000) and block orientation hex
			if (blocks[dir] & bit) {
				//draw the pixels
				callback(x + col, y + row, color, this.px, this.py, this.ctx);
			}

			col++;
			if (col == 4) {
				col = 0;
				row++;
			}
		}
	};

	//auto drop piece down and check for collision if occupied spave
	drop () {
		//evtQueue. down
		//console.log(this.evtQueue.move(this.KEY.DOWN));
		if (!this.evtQueue.move(this.KEY.DOWN)) {
			//check if the top piece has no space to evtQueue. and is on the top
			//hence game over
			if (this.current.y < 1) {
				this.reset();
			}
			if (this.gameRunning) {
				this.droppedPiece(); //set the piece arr index
				this.eachRow(); //search for a complete line and reevtQueue.

				this.setCurrentPiece(this.next); //set current piece to next piece
				this.setNextPiece(); //get random piece
				this.evtQueue.clearEvtQueue(this.queueArr); //clear all remaining event queue
			}
		}
	}

	//save the dropped pieces into piece arr
	droppedPiece () {
		this.eachPixel(this.current.x, this.current.y, this.current, (x, y) => {
			this.setPieceArr(x, y);
		});
	}

	reset () {
		//alert('game over');
		this.noticeScreen('replay');
		window.cancelAnimationFrame(this.frameId);
		this.gameRunning = false;
		this.pieceArr.forEach((row) => {
			return row.forEach((pixel, index) => {
				if (pixel) {
					row[index] = null;
				}
			});
		});
	}
}

const next = document.querySelector('#next');
const canvas = document.querySelector('#canvas');
const body = document.querySelector('body');

new Tetris(canvas, body, next, tetrominoes, DIR, KEY);
