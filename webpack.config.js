const path = require('path')
const jsExtensions = ['.js', '.jsx', '.es6', '.es']
const tsExtensions = ['.ts', '.tsx']
const babelOptions = {}

module.exports = {
	mode: 'production',
	entry: './index.ts',
	devtool: false,
	resolve: {
		extensions: ['.js', '.jsx', '.es6', '.es', '.ts', '.tsx', '.json'],
		mainFields: ['browser', 'module', 'main'],
	},
	module: {
		rules: [
			{
				// ES6+
				test: function (filepath) {
					const ext = path.extname(filepath)
					return jsExtensions.indexOf(ext) !== -1
				},
				use: [
					{ loader: require.resolve('babel-loader'), options: babelOptions },
				]
			}, {
				// TypeScript
				test: function (filepath) {
					const ext = path.extname(filepath)
					return tsExtensions.indexOf(ext) !== -1
				},
				use: [
					{ loader: require.resolve('babel-loader'), options: babelOptions },
					{ loader: require.resolve('ts-loader') },
				]
			}
		]
	}
}