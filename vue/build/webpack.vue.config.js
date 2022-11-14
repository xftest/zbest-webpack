const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

const config = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/i, //忽略大小写
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "images/[name].[hash:6][ext]",
        },
      },
      {
        test: /\.ejs/,
        loader: "ejs-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        extractComments: false,
        terserOptions: {
          format: {
            comments: /^\**!/i,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      minSize: 30 * 1024,
      chunks: "all",
      name: "common",
      cacheGroups: {
        jquery: {
          name: "jquery",
          test: /jquery/,
          chunks: "all",
        },
        "loadash-es": {
          name: "lodash-es",
          test: /lodash-es/,
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"), //模板地址
      chunks: ["index"],
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/img"),
          to: path.resolve(__dirname, "../dist/img"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].chunk.css",
    }),

    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
