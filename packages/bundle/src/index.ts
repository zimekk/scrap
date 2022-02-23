export const module = {
  rules: [
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
      },
    },
  ],
};

export const resolve = {
  extensions: [".tsx", ".ts", ".js"],
};
