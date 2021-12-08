import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import webpack from "webpack";
import env from "dotenv";

env.config({ path: path.resolve(__dirname, "../../.env") });

const dev = process.env.NODE_ENV === "development";

const config = {
  target: "web",
  devServer: {
    port: 8080,
  },
  devtool: dev && "inline-source-map",
  entry: ["react-hot-loader/patch"].concat(require.resolve("./src")),
  module: {
    rules: [
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
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: ["react-hot-loader/babel", "@babel/transform-runtime"],
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: /node_modules\/.+\/esm\//,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  resolve: {
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
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      HREF_TEMPLATE: "#scrap/${id}",
      NEARBY_LAT: "52.1530829",
      NEARBY_LNG: "21.1104411",
      NODE_ENV: "development",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "src/assets"),
          from: "api/**/*.json",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      favicon: require.resolve("./src/assets/favicon.ico"),
    }),
  ],
};

export default config;
