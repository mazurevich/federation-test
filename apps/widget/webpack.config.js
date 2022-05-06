const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "widget",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './Widget': './src/components/Widget/WidgetSSPA',
        './App': './src/AppSSPA'
      },
      shared: {
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3002,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
  },
};
