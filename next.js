export { drawNext };

const drawNext = (nextCanvas, ctxNext, next, eachPixel) => {
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

	eachPixel(paddingX, paddingY, next, (x, y, color) => {
		ctxNext.fillStyle = color;
		ctxNext.fillRect(x * pcx, y * pcy, pcx, pcy);
		ctxNext.strokeRect(x * pcx, y * pcy, pcx, pcy);
	});
};
