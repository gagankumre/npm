var fs = require('fs')

var path = process.argv[2]

var arr= undefined

function getfile(callback){
	fs.readFile(path,function donereading(err, filecontent){
		if (err){
			return console.log(err)
		}
		var buf = filecontent
		var str = buf.toString()
		arr= str.split("\n")
		callback()
	})
}

function logtheoutput(){
	console.log(arr.length-1)
}
getfile(logtheoutput)
