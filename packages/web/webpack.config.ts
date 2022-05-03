import path from "path";
import env from "dotenv";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {
  Configuration,
  EnvironmentPlugin,
  ProvidePlugin,
  WebpackPluginInstance,
} from "webpack";
import * as config from "@dev/bundle";

env.config({ path: path.resolve(__dirname, "../../.env") });

export default (env: {
  WEBPACK_BUILD: boolean;
  WEBPACK_SERVE: boolean;
}): Configuration => ({
  target: "web",
  devtool: env.WEBPACK_SERVE ? "inline-source-map" : "source-map",
  entry: ["regenerator-runtime/runtime"].concat(require.resolve("./src")),
  module: {
    rules: [
      ...config.module.rules.map((config) =>
        config.loader === "babel-loader"
          ? {
              ...config,
              options: {
                ...config.options,
                plugins: env.WEBPACK_SERVE ? ["react-refresh/babel"] : [],
              },
            }
          : config
      ),
      {
        test: /\.s?css$/,
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
    ],
  },
  resolve: {
    ...config.resolve,
    alias: {
      events: "events",
    },
    // https://webpack.js.org/configuration/resolve/#resolvefallback
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new EnvironmentPlugin({
      HREF_TEMPLATE: "#scrap/${id}",
      NEARBY_LAT: "52.1530829",
      NEARBY_LNG: "21.1104411",
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
    ...(env.WEBPACK_SERVE ? [new ReactRefreshPlugin()] : []),
    new HtmlWebpackPlugin({
      favicon: require.resolve("./src/assets/favicon.ico"),
    }),
  ] as WebpackPluginInstance[],
});
