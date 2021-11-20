# 1. webpack 打包的基本使用：

webpack 打包：
开发环境下：
webpack ./src/index.js -o ./dist --mode=development
解释：将 ./src/index.js （及其依赖）打包到 ./dist/main.js 中
以 development 模式：开发环境下

生产环境下：
webpack ./src/index.js -o ./dist/production --mode=production
解释：将 ./src/index.js (及其依赖) 打包到 ./dist/production/main.js 中
以 production 模式：生产环境下

PS1：webpack 默认只能处理 js 文件、json 文件
PS2：生产环境下比开发环境下多了：压缩代码、代码混淆 的功能

---

# 2. webpack 的简易配置：

创建 webpack.config.js 文件，在能够其中设置、修改 webpack 的配置。比如：入口文件位置、打包输出文件位置、打包模式 等等
PS：如果用 vue-cli 脚手架直接创建项目，配置文件则是 vue.config.js

```javascript
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
```

---

# 3. webpack loader 的使用与配置

因为原始 webpack 只能打包 json 和 js 文件
因此需要引入各种 loader 将 CSS、图片、ES6 代码 等转换为 js
loader 也是在 webpack.config.js 中设置

这里展示 style-loader、css-loader 的使用

```javascript
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
      {
        // 匹配图片文件
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader",
        // 图片小于 8kb，就对图片进行 base64 处理
        // 作用：减少了请求数量，会使得体积更大
        options: {
          limit: 8 * 1024,
          // 关闭 url-loader 的 es6 模块化解析
          esModule: false,
          // [hash:10] 取图片hash的前十位，[ext]取图片扩展名
          name: "[hash:10].[ext]",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
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
```

---

# 4. webpack plugin(插件) 的使用与配置

plugin 功能强大，loader 不能做的都是它做，它的功能要更加丰富。从 打包优化和压缩，到重新定义环境变量，可以处理各种任务。

Webpack 通过 Plugin 机制让其更加灵活

在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

```javascript
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
```
