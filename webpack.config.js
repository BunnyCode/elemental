const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    main: "./scripts/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /manifest.json/,
        type: "asset/resource",
        generator: {
          filename: "manifest.json",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Elemental",
      filename: "popup.html",
      template: "menu/popup.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "images", to: "images" },
        { from: "scripts/client.js", to: "client.js" },
      ],
    }),
  ],
}
