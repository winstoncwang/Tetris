import { TETROS, WELL, DIR } from './configs';

export default class Tetromino {
	constructor () {
		this.TETROS = TETROS;
		this.wx = WELL.wx;
		this.DIR = DIR;
		this.tetroSet = [ 'i', 'j', 'l', 'o', 's', 't', 'z' ];
		this.order = [];
		//35 piece 5 bag system
		this.bag = this.tetroSet.concat(
			this.tetroSet,
			this.tetroSet,
			this.tetroSet,
			this.tetroSet
		);
		//first piece possibility
		this.firstPiece = [ 'i', 'j', 'l', 't' ][Math.floor(Math.random() * 4)];
		// first piece should try to avoid s,z,o piece as much as possible
		this.history = [ 's', 'z', 'o', this.firstPiece ];
	}

	//-------------------
	//     Pick random block
	//-------------------
	randomBlock = () => {
		while (true) {
			//roll multiple times to prevent flood/drought

			for (let roll = 0; roll < 6; ++roll) {
				this.i = Math.floor(Math.random() * 35);
				this.piece = this.bag[this.i];
				if (this.history.includes(this.piece) === false || roll === 5) {
					break;
				}
				if (this.order.length) {
					this.bag[this.i] = this.order[0];
				}
			}

			//update piece order by remoing the piece in order if piece found
			//order[0] replaces the index of chosen piece, this prevents drought
			//pushes the new piece at the back of the order arr
			if (this.order.includes(this.piece)) {
				//order include the chosen piece, remove it
				this.order.splice(this.order.indexOf(this.piece), 1);
			}
			this.order.push(this.piece);

			//order[0] is used to overwrite bag[i] to make the piece more likely
			//to be picked
			this.bag[this.i] = this.order[0];

			//update history with the newly picked piece

			this.history.shift();
			this.history[3] = this.piece;

			// console.log('bag:', this.bag);
			// console.log('order:', this.order);
			// console.log('history:', this.history);
			// console.log('piece:', [ this.piece ], 'i:', this.i);
			// console.log('-------------------------------------');
			return {
				blockType : this.piece,
				x         : Math.floor(
					Math.random() * (this.wx - this.TETROS[this.piece].size)
				),
				y         : -1,
				dir       : this.DIR.UP
			};
		}
	};
}
