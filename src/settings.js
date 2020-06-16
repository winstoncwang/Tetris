const tetrominoes = {
	i : {
		blocks : [ '0x0F00', '0x2222', '0x00F0', '0x4444' ],
		size   : 4,
		color  : 'cyan'
	},
	j : {
		blocks : [ '0x8E00', '0x6440', '0x0E20', '0x44C0' ],
		size   : 3,
		color  : 'blue'
	},
	l : {
		blocks : [ '0x2E00', '0x4460', '0x0E80', '0xC440' ],
		size   : 3,
		color  : 'orange'
	},
	o : {
		blocks : [ '0xCC00', '0xCC00', '0xCC00', '0xCC00' ],
		size   : 2,
		color  : 'yellow'
	},
	s : {
		blocks : [ '0x6C00', '0x4620', '0x06C0', '0x8C40' ],
		size   : 3,
		color  : 'green'
	},
	t : {
		blocks : [ '0x4E00', '0x4640', '0x0E40', '0x4C40' ],
		size   : 3,
		color  : 'purple'
	},
	z : {
		blocks : [ '0xC600', '0x2640', '0x0C60', '0x4C80' ],
		size   : 3,
		color  : 'red'
	}
};
//direction using blocks arr
const DIR = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 };
const KEY = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, SPACE: 32 };

export { tetrominoes, DIR, KEY };
