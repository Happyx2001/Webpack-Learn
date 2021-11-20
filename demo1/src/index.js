import data from "./data.json";

function fn1() {
  console.log("demo1");
}
fn1();

console.log(data);

// webpack打包：
// 开发环境下：
// webpack ./src/index.js -o ./dist --mode=development
// 解释：将 ./src/index.js （及其依赖）打包到 ./dist/main.js 中
// 以 development 模式：开发环境

// 生产环境下：
// webpack ./src/index.js -o ./dist/production --mode=production
// 解释：将 ./src/index.js (及其依赖) 打包到 ./dist/production/main.js 中
// 以 production 模式：生产环境

// PS1：webpack 默认只能处理 js 文件、json 文件
// PS2：生产环境下比开发环境下多了：压缩代码、代码混淆
