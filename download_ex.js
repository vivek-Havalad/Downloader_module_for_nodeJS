var Downloader = require('./downloader_module');
var fileUrl = 'https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg';//the file url which must be downloaded
var fileSavePath = './lib/';//folder path where the file must be downloaded
Downloader(fileUrl,fileSavePath,function(parm){
	console.log(parm);
})
