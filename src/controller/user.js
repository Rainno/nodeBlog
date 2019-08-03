const loginCheck = (username,password) => {
    console.log(username,password)
    //先使用假数据
    if(username === 'dky' && password === '111'){
        return true
    }
    return false
}

module.exports = {
    loginCheck
}