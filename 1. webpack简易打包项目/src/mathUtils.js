function add(num1, num2){
    return num1 + num2
}

function mul(num1, num2){
    return num1 * num2
}

// commonJS规范 导出数据(暴露数据)
module.exports={
    add,
    mul
}