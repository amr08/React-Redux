module.exports = {

  entry: "./src/index.js",

  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        include: /src/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react","stage-0"]
        }
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { test: /\.svg$/, 
        loader: 'svg-loader?pngScale=2'
      }
    ]
  },
  devtool: "eval-source-map"
};

