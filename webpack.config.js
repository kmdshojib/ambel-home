const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "ambel_home",
      filename: "remoteEntry.js",
      exposes: {
        "./styles": "./src/index.css",
        "./Button": "./src/components/Button",
        "./Features": "./src/components/Features/Features",
        "./ActionButton": "./src/components/Buttons/ActionButton",
        "./Navigation": "./src/components/Navigation/Navigation",
        "./Footer": "./src/components/Footer/Footer",

      },
    })
  ]
};