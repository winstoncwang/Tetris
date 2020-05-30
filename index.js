class Tetris {
	constructor (canvas, body) {
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
		//well dimension
		this.wx = 10;
		this.wy = 20;
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
	}

	setCurrentPiece (piece = this.randomBlock()) {
		this.current = piece;
	}

	//-------------------
	//     GAME LOOP
	//-------------------

	gameLoop = (timestamp) => {
		this.now = timestamp;
		//calculate the timeStamp
		//console.log(parseFloat(1 / this.dt).toFixed(1));
		this.dt = (this.now - this.last) / 1000;
		//listen for user input
		//update canvas
		this.update(this.dt);
		//draw canvas
		this.draw();
		this.last = this.now;
		requestAnimationFrame(this.gameLoop);
	};

	//-------------------
	//     Util
	//-------------------

	update () {}

	draw () {
		this.drawWell();
		this.drawPiece();
	}

	drawWell () {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = 'lightgrey';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.strokeRect(0, 0, this.px * this.wx, this.py * this.wy);
	}

	drawPiece () {
		//increment through the bits
		//draw the pixels
	}

	randomBlock () {
		let tetro = [ 'i', 'j', 'l', 'o', 's', 't', 'z' ];
        let bag = tetro.concat(tetro, tetro, tetro, tetro);
        
	}
}

const canvas = document.querySelector('canvas');
const body = document.querySelector('body');

const game = new Tetris(canvas, body);
game.run();
