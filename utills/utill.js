let add = (a , b ) => {
        return a+b 
};

let addAsync = (a ,b ,callBack) => {
    setTimeout(()=>{
        callBack(a+b);
    },1000)
} ;


let subAsync = (a ,b ,callBack) => {
    setTimeout(()=>{
        callBack(a-b);
    },1000)
} ;
let sub = (a , b) => a - b;
module.exports = {
    add,sub,addAsync,subAsync
};