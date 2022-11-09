const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: {
    index: "./src/index.js",
    login: "./src/login.js",
    address: "./src/address.js",
    bzproList: "./src/bzproList.js",
    cart: "./src/cart.js",
    decoration: "./src/decoration.js",
    flowerDer: "./src/flowerDer.js",
    forget: "./src/forget.js",
    idea: "./src/idea.js",
    mygrxx: "./src/mygrxx.js",
    mygxin: "./src/mygxin.js",
    myorderq: "./src/myorderq.js",
    myprod: "./src/myprod.js",
    ok: "./src/ok.js",
    order: "./src/order.js",
    orderxq: "./src/orderxq.js",
    vase_proList: "./src/vase_proList.js",
    wuliu: "./src/wuliu.js",
    zbproList: "./src/zbproList.js",
    paint: "./src/paint.js",
    perfume: "./src/perfume.js",
    proDetail: "./src/proDetail.js",
    proList: "./src/proList.js",
    reg: "./src/reg.js",
    remima: "./src/remima.js",
    search: "./src/search.js",
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
      template: "./src/index.html", //模板地址
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      filename: "address.html",
      template: "./src/address.html",
      chunks: ["address"],
    }),
    new HtmlWebpackPlugin({
      filename: "bzproList.html",
      template: "./src/bzproList.html",
      chunks: ["bzproList"],
    }),
    new HtmlWebpackPlugin({
      filename: "cart.html",
      template: "./src/cart.html",
      chunks: ["cart"],
    }),
    new HtmlWebpackPlugin({
      filename: "decoration.html",
      template: "./src/decoration.html",
      chunks: ["decoration"],
    }),
    new HtmlWebpackPlugin({
      filename: "flowerDer.html",
      template: "./src/flowerDer.html",
      chunks: ["flowerDer"],
    }),
    new HtmlWebpackPlugin({
      filename: "forget.html",
      template: "./src/forget.html",
      chunks: ["forget"],
    }),
    new HtmlWebpackPlugin({
      filename: "idea.html",
      template: "./src/idea.html",
      chunks: ["idea"],
    }),
    new HtmlWebpackPlugin({
      filename: "mygrxx.html",
      template: "./src/mygrxx.html",
      chunks: ["mygrxx"],
    }),
    new HtmlWebpackPlugin({
      filename: "mygxin.html",
      template: "./src/mygxin.html",
      chunks: ["mygxin"],
    }),
    new HtmlWebpackPlugin({
      filename: "myorderq.html",
      template: "./src/myorderq.html",
      chunks: ["myorderq"],
    }),
    new HtmlWebpackPlugin({
      filename: "myprod.html",
      template: "./src/myprod.html",
      chunks: ["myprod"],
    }),
    new HtmlWebpackPlugin({
      filename: "ok.html",
      template: "./src/ok.html",
      chunks: ["ok"],
    }),
    new HtmlWebpackPlugin({
      filename: "order.html",
      template: "./src/order.html",
      chunks: ["order"],
    }),
    new HtmlWebpackPlugin({
      filename: "orderxq.html",
      template: "./src/orderxq.html",
      chunks: ["orderxq"],
    }),
    new HtmlWebpackPlugin({
      filename: "paint.html",
      template: "./src/paint.html",
      chunks: ["paint"],
    }),
    new HtmlWebpackPlugin({
      filename: "perfume.html",
      template: "./src/perfume.html",
      chunks: ["perfume"],
    }),
    new HtmlWebpackPlugin({
      filename: "proDetail.html",
      template: "./src/proDetail.html",
      chunks: ["proDetail"],
    }),
    new HtmlWebpackPlugin({
      filename: "proList.html",
      template: "./src/proList.html",
      chunks: ["proList"],
    }),
    new HtmlWebpackPlugin({
      filename: "reg.html",
      template: "./src/reg.html",
      chunks: ["reg"],
    }),
    new HtmlWebpackPlugin({
      filename: "remima.html",
      template: "./src/remima.html",
      chunks: ["remima"],
    }),
    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html",
      chunks: ["search"],
    }),
    new HtmlWebpackPlugin({
      filename: "vase_proList.html",
      template: "./src/vase_proList.html",
      chunks: ["vase_proList"],
    }),
    new HtmlWebpackPlugin({
      filename: "wuliu.html",
      template: "./src/wuliu.html",
      chunks: ["wuliu"],
    }),
    new HtmlWebpackPlugin({
      filename: "zbproList.html",
      template: "./src/zbproList.html",
      chunks: ["zbproList"],
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
  ],
};
