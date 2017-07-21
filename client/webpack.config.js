const config = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: `${__dirname}/build`,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extension: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
        test: /\.scss$/,
        use: [
	        {
	          loader: "style-loader" // creates style nodes from JS strings
	        }, 
	        {
	          loader: "css-loader" // translates CSS into CommonJS
	        }, 
	        {
	          loader: "sass-loader" // compiles Sass to CSS
	        }
        ]
      }
		]
	}
}