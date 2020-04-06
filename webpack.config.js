const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Service worker plugins
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxWebpackPLugin = require("workbox-webpack-plugin");

module.exports = env => {
  return {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "build"),
      filename: "[name].bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        Assets: path.resolve(__dirname, "src", "assets"),
        Components: path.resolve(__dirname, "src", "components"),
        Localization: path.resolve(__dirname, "src", "localization"),
        Layouts: path.resolve(__dirname, "src", "layouts"),
        Modules: path.resolve(__dirname, "src", "modules"),
        Router: path.resolve(__dirname, "src", "router"),
        Pages: path.resolve(__dirname, "src", "pages"),
        Services: path.resolve(__dirname, "src", "services"),
        Styles: path.resolve(__dirname, "src", "styles"),
        Util: path.resolve(__dirname, "src", "util"),
        "react-dom": "@hot-loader/react-dom"
      }
    },
    devServer: {
      contentBase: path.join(__dirname, "src"),
      host: "0.0.0.0",
      compress: true,
      port: 3001,
      historyApiFallback: true,
      quiet: true
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(css)$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          loaders: ["file-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: "url-loader"
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        favicon: path.join(__dirname, "public", "favicon.png")
      }),
      new WebpackPwaManifest({
        name: "tripleS React Boilerplate 3.0",
        short_name: "tripleS 3.0",
        description: "React boilerplate powered by tripleS",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        crossorigin: "use-credentials",
        icons: [
          {
            src: path.join(__dirname, "public", "favicon.png"),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),
      new WorkboxWebpackPLugin.InjectManifest({
        swSrc: path.join(__dirname, "src", "sw.js"),
        swDest: "sw.js"
      }),
      new webpack.DefinePlugin({
        "process.env.MAIN_API_URL": JSON.stringify(env.MAIN_API_URL),
        "process.env.PANEL_API_URL": JSON.stringify(env.PANEL_API_URL)
      })
    ]
  };
};
