export default function evtQueue (DIR, KEY, wx, wy) {
	this.DIR = DIR;
	this.KEY = KEY;
	this.wx = wx;
	this.wy = wy;
}

evtQueue.prototype.clearEvtQueue = function (queueArr) {
	queueArr.length = 0;
};

evtQueue.prototype.keyQueue = function (e, queueArr, noticeScreen) {
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

evtQueue.prototype.handler = function (actionQueue, current, callbacks) {
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

evtQueue.prototype.move = function (dir) {
	let prevX = this.current.x;
	let prevY = this.current.y;
	switch (dir) {
		case this.KEY.UP:
			this.rotate(this.current);
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

evtQueue.prototype.rotate = function ({ dir }) {
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

evtQueue.prototype.validSpace = function () {
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
