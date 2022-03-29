import path from "path";
import { Configuration, EnvironmentPlugin } from "webpack";
import "webpack-dev-server";
import { RequestHandler } from "webpack-dev-server";
import config from "@dev/bundle";
import client from "@dev/web/webpack.config";

const ENTRY = "index";
const cache = {} as { hash: string; middleware: Function };

export default (env: {
  WEBPACK_BUILD: boolean;
  WEBPACK_SERVE: boolean;
}): Configuration[] => [
  {
    name: "server",
    target: "node",
    devServer: {
      // https://github.com/webpack/webpack-dev-middleware#serversiderender
      devMiddleware: { serverSideRender: true },
      // https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares
      setupMiddlewares: (middlewares) =>
        middlewares.concat(((req, res, next) => {
          const {
            devMiddleware: { outputFileSystem, stats },
          } = res.locals.webpack;
          const {
            children: [{ assetsByChunkName, outputPath }],
            hash,
          } = stats.toJson();
          const [filePath] = assetsByChunkName[ENTRY];
          if (cache.hash !== hash) {
            Object.assign(
              cache,
              { hash },
              require("require-from-string")(
                outputFileSystem
                  .readFileSync(path.join(outputPath, filePath))
                  .toString()
              )
            );
          }
          return cache.middleware(req, res, next);
        }) as RequestHandler),
      static: false,
    },
    devtool: env.WEBPACK_SERVE ? "inline-source-map" : "source-map",
    entry: {
      [ENTRY]: require.resolve("./src"),
    },
    externalsPresets: { node: true },
    externals: [
      require("webpack-node-externals")({
        additionalModuleDirs: ["../../node_modules"],
      }),
    ],
    node: {
      // __dirname: false,
    },
    optimization: {
      minimize: false,
    },
    output: {
      clean: true,
      library: {
        type: "commonjs2",
      },
      path: path.resolve(__dirname, "lib"),
    },
    plugins: [
      new EnvironmentPlugin({
        TEMP: path.resolve(__dirname, `temp`),
      }),
    ],
    ...config,
  },
  {
    name: "client",
    ...client(env),
    output: {
      clean: true,
      path: path.resolve(__dirname, "public"),
    },
  },
];
