const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'react-exif-orientation-img.js',
    path: path.resolve(__dirname, 'lib'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-2', 'react'],
          },
        },
      },
    ],
  },
};
