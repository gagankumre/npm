var fs = require('fs');
var pt = require('path');

var path = process.argv[2];
var ext = process.argv[3];

var arr1=[];
var j=0;

function get_ext(callback){

	fs.readdir(path,function doneread(err , arr){
		if(err){
			console.log(err);
		}else{
			for(var i=0 ;i<arr.length ;i++){

				if( pt.extname(arr[i])==('.'+ext)){

					arr1[j++]=arr[i];
				}
			}
			callback();
		}
	});
}
function output(){

	for (var i = 0; i < arr1.length; i++) {
		console.log(arr1[i]);
	}
}

get_ext(output);
