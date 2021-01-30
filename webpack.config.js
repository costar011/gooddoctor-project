"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    main: ["./src/main.js"],
  },

  node: {
    fs: "empty",
    net: "empty",
  },

  output: {
    path: path.resolve(__dirname, "./build"), //  resolve(__dirname) -> 현재 내 파일의 위치 , "./build" =>
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "images/[name].[ext]", // images안에서만 인식할 수 있다 파일을.
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "fonts/[name].[ext]", // fonts는 fonts안에서만 인식
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: "./public", // public 안에 있는 index html 인식
        from: "*.*",
      },
    ]),
    new Dotenv(), // Dotenv사용 할 것 이다.
  ],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3000,
    proxy: {
      "**": "http://localhost:7000", // proxy : 서포터 역할   // ** : 모든 파일, 모든 폴더
    },
  },
  devtool: "eval-source-map",
};
