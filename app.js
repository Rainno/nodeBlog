
const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')

//处理post data   POST请求
const getPostData = (req)=>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method !== 'POST'){
            resolve({})
            return
        }
        if(req.headers['content-type'] !== 'application/json'){
            resolve({})
            return
        }
        let postData = ''
        req.on('data',(chunk)=>{
            postData += chunk.toString()
        })
        req.on('end',()=>{
            if(!postData){
                resolve({})
                return
            }
            resolve(
                JSON.stringify(postData)
            )
        })
    })
    return promise
}

 const serverHandle = (req, res) => {
    //设置数据返回格式JSON
    res.setHeader('Content-type','application/json')
    //获取path
    const url = req.url
    req.path = url.split("?")[0]
    //解析query
    req.query = querystring.parse(url.split("?")[1])
    //处理post data
    getPostData(req).then(postData => {
        req.body = postData
        //处理blog路由
        const blogData = handleBlogRouter(req, res);
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return
        }
        //处理user路由
        const userData = handleUserRouter(req, res);
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }
        //未命中路由，返回404
        res.writeHead(404, {
            "Content-type": "text/plain"
        })
        res.write("404 Not Found\n")
        res.end()
    })
}

module.exports = serverHandle
//env: process.env.NODE_ENV
