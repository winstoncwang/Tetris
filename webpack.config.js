let path = require('path');

module.exports = {
	entry  : './src/app.js',
	output : {
		path     : path.resolve(__dirname, './dist'),
		filename : 'bundle.js'
	},
	module : {
		rules : [
			{
				test : /\.css$/,
				use  : [ { loader: 'style-loader' }, { loader: 'css-loader' } ]
			},
			{
				test    : /\.js$/,
				exclude : /(node_modules|bower_components)/,
				use     : [
					{
						loader  : 'babel-loader',
						options : {
							presets : [ '@babel/preset-env' ],
							plugins : [
								'@babel/transform-arrow-functions',
								'transform-class-properties'
							]
						}
					}
				]
			}
		]
	}
};
