// 设置 webpack 的入口和路径
const path = require('path')

module.exports={
    // 1. webpack会根据入口文件，一个个的去找要打包的文件
    entry: './src/main.js',
    // 2. output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
}