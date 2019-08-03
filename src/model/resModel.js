//该文件中的模型使返回数据的格式一致

class BaseModel{
    constructor(data,message){ //data是json格式 message是string/json???
        if(typeof data === 'string'){
            this.message = data;
            data = null;
            message = null;
        }
        if(data){
            this.data = data;
        }
        if(message){
            this.message = message;
        }
    }
}
class SuccessModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.errno = 0;
    }
}
class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.errno = -1;
    }
}
module.exports = {
    SuccessModel,
    ErrorModel
}