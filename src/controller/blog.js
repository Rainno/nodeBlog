const getList = (author,keyword) => {
    //先返回假数据，格式是正确的
    return [
        {
            id: 1,
            title: '博客1',
            content: '博客博客博客博客博客博客11111',
            createTime: 1564734138781,
            author: 'dky'
        },
        {
            id: 2,
            title: '博客2',
            content: '博客博客博客博客博客222222',
            createTime: 1564734160848,
            author: 'rh'
        },{
            id: 3,
            title: '博客3',
            content: '博客博客博客博客博客博客3333333',
            createTime: 1564734183847,
            author: 'dr'
        }
    ]
}
const getDetail = (id) => {
    return [
        {
            id: 1,
            title: '博客1',
            content: '博客博客博客博客博客博客11111',
            createTime: 1564734138781,
            author: 'dky'
        }
    ]
}
const newBlog = (blogData = {})=>{
    //blogData是一个博客对象，包含title content属性
    //console.log('newBlog blogData', blogData)
    return {
        id: 3 //新建博客插入到数据表里面的id
    }
}
const updateBlog = (id,blogData = {}) => {
    //id就是要更新博客的id
    //blogData是一个博客对象，包含title content属性
    //console.log('update blog', id, blogData)
    return true
}
const deleteBlog = (id) =>{
    //id就是要更新博客的id
    console.log('id', id)
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}