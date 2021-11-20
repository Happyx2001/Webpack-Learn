// 1. 使用 commonJS 的模块化规范 导入
const { add, mul } = require("./mathUtils")

console.log(add(20, 30));
console.log(mul(20, 30));

// 2. 使用ES6的模块化规范 导入
import {name, age, height} from "./info";
console.log(name);
console.log(age);
console.log(height);

// 3. 引入 css 文件
// require('./css/index.css')


// 使用Vue
// import Vue from 'vue'

// const app = new Vue({
//     el:'#app',
//     data:{
//         message:'Hello Webpack'
//     }
// })