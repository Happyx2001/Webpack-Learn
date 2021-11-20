let path = require("path");
// console.log(path.resolve(__dirname, "dist"));

// 安装 html-webpack-plugin 依赖
let HtmlWebpackPlugin = require("html-webpack-plugin");

// 导出 webpack
module.exports = {
  // 1. 入口文件（告诉webpack从那个文件开始打包）
  entry: "./src/index.js",
  // 2. output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。
  // 主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。
  output: {
    // 输出的文件名称：
    filename: "bundle.js",
    // 输出的路径：
    // 绝对路径 (resolve 整合 __dirname 和 "dist" )
    path: path.resolve(__dirname, "dist"),
  },
  // 设置 webpack 打包模式 mode
  // 开发模式，
  mode: "development",

  // 设置 loader 的配置
  module: {
    // 对某个格式的文件进行转换处理
    rules: [
      {
        test: /\.css$/,
        use: [
          // use数组里中的 loader 的顺序，从下到上，逆序执行。
          // 将js的样式内容插入到 style 标签里
          "style-loader",
          // 将 CSS 文件转换为 JS 文件
          "css-loader",
        ],
      },
    ],
  },

  // Plugin 插件配置
  // html-webpack-plugin 可以将 index.js 和 目标路径下的 html 文件进行打包
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
