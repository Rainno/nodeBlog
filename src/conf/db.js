//配置环境变量、参数，与package.json中script标签下dev\prd对应
const env = process.env.NODE_ENV;

let MYSQL_CONF;

//线下环境
if(env === 'dev'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'dky201314',
        port: '3306',
        database: 'myblog'
    }
}

//线上环境
if(env === 'production'){
    //上线的时候此处要修改配置
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'dky201314',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}