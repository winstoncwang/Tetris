class Tetris {
	constructor () {
		this.canvas = document.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.cw = canvas.width;
		this.ch = canvas.height;

		//rendering variable
		this.lastTimeStamp = new Date().getTime();
		this.currentTime = 0;
		this.dt = 0;
	}

	//-------------------
	//     GAME LOOP
	//-------------------

	gameloop (timeStamp) {
		//calculate the timeStamp
		this.secondsPassed = (timeStamp - lastTimeStamp) / 1000;

		//listen for user input
		//update canvas
		//draw canvas
	}

	update () {}

	draw () {
		this.ctx.fillStyle = 'lightgrey';
		this.ctx.fillRect(0, 0, 300, 600);
	}
}

const game = new Tetris();
game.draw();
