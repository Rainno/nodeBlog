const {loginCheck} = require('../controller/user.js')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const bodyParser = require('body-parser')

const handleUserRouter = (req,res) => {
    const method = req.method; //GET POST
    //以下两项统一在app.js中定义
    //const url = req.url;
    //const path = url.split('?')[0];

    //登录
    if(method === 'POST' && req.path === '/api/user/login'){
        //console.log('body',req.body)
        const {username, password} = req.body
        //console.log('user',username,password)
        const loginDataResult = loginCheck(username,password)
        if(loginDataResult){
            return new SuccessModel()
        }else{
            return new ErrorModel('登录失败')
        }
    }
}

module.exports = handleUserRouter;