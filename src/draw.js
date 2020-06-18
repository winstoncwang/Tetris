export const drawNext = (nextCanvas, ctxNext, next, eachPixel) => {
	const cx = 4;
	const cy = 4;
	const pcx = nextCanvas.width / cx;
	const pcy = nextCanvas.height / cy;

	const paddingX =
		next.blockType === 'i' ? 0 : next.blockType === 'o' ? 1 : 0.5;
	const paddingY = next.blockType === 'i' ? 0.5 : 1;

	ctxNext.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
	ctxNext.fillStyle = 'lightgrey';
	ctxNext.fillRect(0, 0, nextCanvas.width, nextCanvas.height);
	ctxNext.strokeRect(0, 0, nextCanvas.width, nextCanvas.height);

	eachPixel(paddingX, paddingY, next, (x, y, color) => {
		ctxNext.fillStyle = color;
		ctxNext.fillRect(x * pcx, y * pcy, pcx, pcy);
		ctxNext.strokeRect(x * pcx, y * pcy, pcx, pcy);
	});
};

export const drawWell = (
	ctx,
	canvasHeight,
	canvasWidth,
	wy,
	wx,
	tetrominoes,
	getPieceArr
) => {
	let px = canvasWidth / wx;
	let py = canvasHeight / wy;

	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	ctx.fillStyle = 'lightgrey';
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);

	//drop the existing pieceArr
	for (let y = 0; y < wy; y++) {
		for (let x = 0; x < wx; x++) {
			if (getPieceArr(x, y)) {
				drawPixel(
					x,
					y,
					tetrominoes[getPieceArr(x, y)].color,
					px,
					py,
					ctx
				);
			}
		}
	}
	ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
};

export const drawPiece = (currentX, currentY, current, eachPixel) => {
	eachPixel(currentX, currentY, current, drawPixel);
};

export const drawPixel = (x, y, color, px, py, ctx) => {
	ctx.fillStyle = color;
	ctx.fillRect(x * px, y * py, px, py);
	ctx.strokeRect(x * px, y * py, px, py);
};
