const handleUserRouter = (req,res) => {
    const method = req.method; //GET POST
    //以下两项统一在app.js中定义
    //const url = req.url;
    //const path = url.split('?')[0];

    //登录
    if(method === 'POST' && req.path === '/api/user/login'){
        return {
            msg: '这是用户登录的借口'
        }
    }
}

module.exports = handleUserRouter;