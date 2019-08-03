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
module.exports = {
    getList,
    getDetail
}