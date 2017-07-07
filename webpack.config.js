module.exports = {

  entry: "./app/app.js",

  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        include: /app/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react","stage-0"]
        }
      }
    ]
  },
  devtool: "eval-source-map"
};

