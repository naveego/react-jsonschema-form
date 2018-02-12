var path = require("path");
var webpack = require("webpack");

module.exports = {
  cache: true,
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "react-jsonschema-form.js",
    library: "JSONSchemaForm",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  devtool: "source-map",
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    "semantic-ui-react": {
      root: "semantic-ui-react",
      commonjs: "semantic-ui-react",
      commonjs2: "semantic-ui-react",
      amd: "semantic-ui-react"
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.json$/,
        loader:"json-loader",
        include: [
          path.join(__dirname, "css"),
          path.join(__dirname, "playground"),
          path.join(__dirname, "node_modules"),
        ],
      }
    ]
  }
};
