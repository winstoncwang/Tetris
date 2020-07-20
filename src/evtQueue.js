import { WELL, KEY, DIR, TETROS } from './Configs';

export default function EvtQueue () {
	this.DIR = DIR;
	this.KEY = KEY;
	this.wx = WELL.wx;
	this.wy = WELL.wy;
}

EvtQueue.prototype.clearEvtQueue = function (queueArr) {
	queueArr.length = 0;
};

EvtQueue.prototype.keyQueue = function (e, queueArr, noticeScreen) {
	switch (e.keyCode) {
		case this.KEY.UP:
			queueArr.push(this.KEY.UP);
			break;
		case this.KEY.DOWN:
			queueArr.push(this.KEY.DOWN);
			break;
		case this.KEY.LEFT:
			queueArr.push(this.KEY.LEFT);
			break;
		case this.KEY.RIGHT:
			queueArr.push(this.KEY.RIGHT);
			break;
		case this.KEY.SPACE:
			noticeScreen('play');
			break;
	}
};

EvtQueue.prototype.handler = function (actionQueue, current, callbacks) {
	this.current = current;
	this.callbacks = callbacks;
	switch (actionQueue) {
		case this.KEY.UP:
			this.move(this.KEY.UP);
			break;
		case this.KEY.DOWN:
			this.move(this.KEY.DOWN);
			break;
		case this.KEY.LEFT:
			this.move(this.KEY.LEFT);
			break;
		case this.KEY.RIGHT:
			this.move(this.KEY.RIGHT);
			break;
	}
};

EvtQueue.prototype.move = function (dir) {
	let prevX = this.current.x;
	let prevY = this.current.y;
	switch (dir) {
		case this.KEY.UP:
			if (
				this.current.x > -1 &&
				this.current.x <
					WELL.wx - TETROS[this.current.blockType].size + 1
			) {
				this.rotate(this.current);
			}
			break;
		case this.KEY.DOWN:
			this.current.y += 1;
			break;
		case this.KEY.LEFT:
			this.current.x -= 1;
			break;
		case this.KEY.RIGHT:
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
};

EvtQueue.prototype.rotate = function ({ dir }) {
	switch (dir) {
		case this.DIR.UP:
			this.current.dir = this.DIR.RIGHT;
			break;
		case this.DIR.RIGHT:
			this.current.dir = this.DIR.DOWN;
			break;
		case this.DIR.DOWN:
			this.current.dir = this.DIR.LEFT;
			break;
		case this.DIR.LEFT:
			this.current.dir = this.DIR.UP;
			break;
	}
};

EvtQueue.prototype.validSpace = function () {
	let result = true;
	this.callbacks.eachPixel(
		this.current.x,
		this.current.y,
		this.current,
		(x, y) => {
			if (
				x < 0 ||
				x >= this.wx ||
				y < 0 ||
				y >= this.wy ||
				this.callbacks.getPieceArr(x, y)
			) {
				result = false;
			}
		}
	);

	return result;
};
