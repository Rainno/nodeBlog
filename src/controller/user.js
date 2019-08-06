const mysql = require('mysql')
const { exec } = require('../db/mysql.js')

const loginCheck = (username,password) => {
    console.log(username,password)
    // //先使用假数据
    // if(username === 'dky' && password === '111'){
    //     return true
    // }
    // return false
    let sql = `select * from users where 1=1 `
    if(username && password){
        sql += `and username=${username} and password=${password}`
    }
    //返回promise
    return exec(sql)
}

module.exports = {
    loginCheck
}