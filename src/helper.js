export default class helper {
	constructor () {
		this.tetro = [ 'i', 'j', 'l', 'o', 's', 't', 'z' ];
		this.order = [];
		//35 piece 5 bag system
		this.bag = this.tetro.concat(
			this.tetro,
			this.tetro,
			this.tetro,
			this.tetro
		);
		//first piece possibility
		this.firstPiece = [ 'i', 'j', 'l', 't' ][Math.floor(Math.random() * 4)];
		// first piece should try to avoid s,z,o piece as much as possible
		this.history = [ 's', 'z', 'o', this.firstPiece ];
	}
	//-------------------
	//     Notice Screen
	//-------------------
	noticeScreen = (status) => {
		switch (status) {
			case 'play':
				this.body.querySelector('.menu').classList.add('hidden');
				this.body.querySelector('#game').classList.remove('hidden');
				this.run();
				break;
			case 'replay':
				this.body.querySelector('#game').classList.add('hidden');
				this.body.querySelector('.menu').classList.remove('hidden');
				this.body.querySelector('#play').classList.add('hidden');
				this.body.querySelector('p.notice').classList.remove('hidden');
				this.body
					.querySelector('button#replay')
					.classList.remove('hidden');
				break;
		}
	};

	resize = () => {
		this.canvas.width =
			this.body.querySelector('.container').clientWidth / 2;
		this.canvas.height = this.body.querySelector('.container').clientHeight;
		this.draw();
	};

	//-------------------
	//     Line removal check
	//-------------------
	eachRow = () => {
		let completeRow = true;
		let y;
		//scan the arr from wy to y
		for (y = this.wy; y >= 0; y--) {
			for (let x = 0; x < this.wx; x++) {
				if (!this.getPieceArr(x, y)) {
					completeRow = false;
					break;
				}
				completeRow = true;
			}

			if (completeRow) {
				this.removeLine(y);
				y++;
			}
		}
	};

	removeLine = (y) => {
		//add score

		for (let row = y; row >= 0; row--) {
			for (let x = 0; x < this.wx; x++) {
				this.setPieceArr(
					x,
					row,
					row == 0 ? null : this.getPieceArr(x, row - 1) //set the row to previous row and top row to null
				);
			}
		}
	};

	clearEvQueue () {
		this.evQueue = [];
	}
}