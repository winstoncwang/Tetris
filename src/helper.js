export default class helper {
	constructor () {}
	//-------------------
	//     Notice Screen
	//-------------------
	

	

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
}
