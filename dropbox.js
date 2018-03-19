#!/usr/bin/env node

var uploadFile = require('dropbox-upload');

let dropbox_debug = process.argv[2]; //debug yes/no
let dropbox_secret = process.argv[3];
let dropbox_local_path = process.argv[4];
let dropbox_remote_path = process.argv[5];
let callback;

console.log(`INFO : Launching dropbox step`);

if (!dropbox_secret || !dropbox_local_path || !dropbox_remote_path){
  console.log(`ERROR : dropbox_secret : ${dropbox_secret}`);
  console.log(`ERROR : dropbox_local_path : ${dropbox_local_path}`);
  console.log(`ERROR : dropbox_remote_path : ${dropbox_remote_path}`);
  return ;
}

uploadFile(dropbox_local_path,dropbox_remote_path,dropbox_secret,function(err){
	if (err) {
		console.log(err);
	} else {
		console.log(`INFO : The file ${dropbox_local_path} is uploaded`);
	}
});