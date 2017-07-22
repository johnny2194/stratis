const config = {
	entry: `${__dirname}/src/stratis-snow.js`,
	output: {
		path: `${__dirname}/build`,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx']
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
	          loader: "sass-loader", // compiles Sass to CSS
	          options: {
	          	includePaths: [__dirname + "/build"]
	          }
	        },
	        {
	        	loader: "resolve-url-loader"
	        }

        ]
      },
      {
	      test: /\.(jpe?g|png|gif|svg)$/i,
	      use: [
	        'url-loader?limit=10000000',
	        'img-loader'
	      ]
	    }
		]
	}
}

module.exports = config