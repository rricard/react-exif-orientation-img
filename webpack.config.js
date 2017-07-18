const path = require('path');

module.exports = {
  entry: './src/example.js',
  output: {
    filename: 'example.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-2', 'react']
          },
        },
      },
    ],
  },
  devtool: 'cheap-source-map',
};
