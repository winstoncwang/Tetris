import { WELL } from './configs.js';

export default function lastRow () {
	this.wx = WELL.wx;
	this.wy = WELL.wy;
}

lastRow.prototype.eachRow = function (callbacks) {
	this.callbacks = callbacks;
	let completeRow = true;
	let y;
	//scan the arr from wy to y
	for (y = this.wy; y >= 0; y--) {
		for (let x = 0; x < this.wx; x++) {
			if (!this.callbacks.getPieceArr(x, y)) {
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

lastRow.prototype.removeLine = function (y) {
	//add score
	for (let row = y; row >= 0; row--) {
		for (let x = 0; x < this.wx; x++) {
			this.callbacks.setPieceArr(
				x,
				row,
				row == 0 ? null : this.callbacks.getPieceArr(x, row - 1) //set the row to previous row and top row to null
			);
		}
	}
};
