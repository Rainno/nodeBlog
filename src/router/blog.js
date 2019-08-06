const {SuccessModel,ErrorModel} = require('../model/resModel.js')
const {getList,getDetail,newBlog,updateBlog,deleteBlog} = require('../controller/blog.js')

const handleBlogRouter = (req,res) => {
    const method = req.method; //POST GET
    //以下两项统一在app.js中定义
    //const url = req.url;
    //const path = url.split('?')[0];
    const id = req.query.id || ''

    //获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        //const listData = getList(author,keyword)
        //return new SuccessModel(listData)
        //返回promise
        let listDataResult = getList(author, keyword);
        return listDataResult.then(listData =>{
            return new SuccessModel(listData)
        })

    }
    //获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    }
    //新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/new'){
        const blogData = newBlog(req.body) //req.body是{id:...}
        return new SuccessModel(blogData)
    }
    //更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const result = updateBlog(id,req.body) //返回Boolen
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('更新博客失败')
        }
        
    }
    //删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/delete'){
        const result = deleteBlog(id)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('删除博客失败')
        }
    }
}

module.exports = handleBlogRouter