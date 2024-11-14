const { clear } = require('console');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: './scripts/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html')
  }),
],
module: {
    rules: [
      {
        test: /.s?css$/,
        use: ['style-Loader', 'css-Loader'],
      },
    ],
},
mode: 'development',
};
