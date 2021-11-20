let path = require("path");
console.log(path.resolve(__dirname, "dist"));

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
};
