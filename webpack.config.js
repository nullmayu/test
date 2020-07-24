/* eslint-disable */
const path = require("path");

module.exports = (env, argv) => {
  return {
    mode: "production",
    entry: {
      index: path.join(__dirname, "src", "index.ts"),
    },

    output: {
      path: path.join(__dirname, "www"),
      filename: "index.js",
      chunkFilename: "[id].bundle.js",
      library: "test",
      libraryTarget: "umd",
    },

    optimization: {
      namedChunks: true,
      splitChunks: {
        automaticNameDelimiter: "-",
      },
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },

    resolve: {
      extensions: [".ts", ".js"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },

    performance: {
      maxEntrypointSize: 500000,
      maxAssetSize: 500000,
    },

    devServer: {
      port: 8080,
      contentBase: path.join(__dirname, "www"),
      watchContentBase: true,
    },
  };
};
