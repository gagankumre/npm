var pt = require('path');
var fs = require('file-system');
var arr1 = [];
var j=0;
module.exports =function(callback,path,ext){
    fs.readdir(path ,function(err, arr){
        if(err){  
            return  callback(err);
        }
        for(var i=0; i<arr.length;i++){
            if(pt.extname(arr[i])===('.'+ext)){
                arr1[j++]=arr[i];
            }
        }
        return callback(null,arr1);
    });
};
