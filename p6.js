var my_module = require('./p6_module');

var path = process.argv[2];
var ext = process.argv[3];

my_module(output,path,ext);
function output(err,arr){
    if(err){
        return console.error(err);
    }else{
        for(var i =0; i<arr.length;i++ ){
            console.log(arr[i]);
        }
    }
}



