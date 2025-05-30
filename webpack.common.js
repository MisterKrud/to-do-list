 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: "./src/index.js",
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
   ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
 };