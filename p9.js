var async = require('async');
var bf = require('bf'); 
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var url ={url1,url2,url3};

async.forEachOf(url)