class Tetris extends util {
	constructor (canvas, body) {
		super();
		this.canvas = canvas;
		this.body = body;
		//canvas var
		this.ctx = this.canvas.getContext('2d');
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
		//block management
		this.current;
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
		this.setNextPiece;
	}

	setCurrentPiece (piece = this.randomBlock()) {
		this.current = piece;
	}

	setNextPiece (piece = this.randomBlock()) {
		this.next = piece;
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
				//this.rotate();
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

	//-------------------
	//     validSpace
	//-------------------
	validSpace () {
		let result = true;
		this.eachPixel(this.current, (x, y) => {
			if (x < 0 || x >= this.wx || y < 0 || y >= this.wy) {
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
			this.dropPiece();
		}
	}

	draw = () => {
		this.drawWell();
		this.drawPiece();
	};

	drawWell () {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = 'lightgrey';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.strokeRect(0, 0, this.px * this.wx, this.py * this.wy);
	}

	drawPiece = () => {
		this.eachPixel(this.current, this.drawPixel);
	};
	//check through each pixel
	eachPixel = (currentPiece, callback) => {
		const { blockType, x, y, dir } = currentPiece;
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
	dropPiece () {
		//console.log(this.move(KEY.DOWN));
		if (!this.move(KEY.DOWN)) {
			console.log('stopped moving');

			//set the piece arr index
			//set current piece to next piece
			this.setCurrentPiece(this.next);
			this.setNextPiece();
		}
		//move y down
		//clear canvas
		//draw piece
	}
}

const canvas = document.querySelector('canvas');
const body = document.querySelector('body');

const game = new Tetris(canvas, body);
game.run();
