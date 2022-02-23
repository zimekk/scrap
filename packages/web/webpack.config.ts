import path from "path";
import env from "dotenv";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, EnvironmentPlugin, ProvidePlugin } from "webpack";
import * as config from "@dev/bundle";

env.config({ path: path.resolve(__dirname, "../../.env") });

export default (env: {
  WEBPACK_BUILD: boolean;
  WEBPACK_SERVE: boolean;
}): Configuration => ({
  target: "web",
  devtool: env.WEBPACK_SERVE ? "inline-source-map" : "source-map",
  entry: ["react-hot-loader/patch", "regenerator-runtime/runtime"].concat(
    require.resolve("./src")
  ),
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
            },
          },
        ],
      },
      {
        test: /\.(mp3|ogg|png|avi)$/,
        use: ["file-loader"],
      },
      // {
      //   test: /\.tsx?$/,
      //   loader: "babel-loader",
      //   exclude: /node_modules/,
      //   options: {
      //     presets: [
      //       "@babel/preset-env",
      //       "@babel/preset-react",
      //       "@babel/preset-typescript",
      //     ],
      //     plugins: ["react-hot-loader/babel", "@babel/transform-runtime"],
      //   },
      // },
      // {
      //   test: /\.js$/,
      //   loader: "babel-loader",
      //   include: /node_modules\/.+\/esm\//,
      //   options: {
      //     presets: ["@babel/preset-env"],
      //   },
      // },
    ],
  },
  resolve: {
    ...config.resolve,
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      events: "events",
      "react-dom": "@hot-loader/react-dom",
    },
    // https://webpack.js.org/configuration/resolve/#resolvefallback
    fallback: {
      // assert: require.resolve('assert'),
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      HREF_TEMPLATE: "#scrap/${id}",
      NEARBY_LAT: "52.1530829",
      NEARBY_LNG: "21.1104411",
      // NODE_ENV: "development",
    }),
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "src/assets"),
          from: env.WEBPACK_SERVE ? "none" : "api/**/*.json",
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      favicon: require.resolve("./src/assets/favicon.ico"),
    }),
  ],
});
