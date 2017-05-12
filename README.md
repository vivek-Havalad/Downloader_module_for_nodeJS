# Downloader_module_for_nodeJS
This file contains module and example js file which can be used to download file of any format.
This module can successfully handle both http and https requests.
the module returns a callback object {ok:1} for https request made and {ok:2} for http request made.



use npm to install this module by using npm i file_downloader
and use in your js file by using fallowing code:

var Downloader = require('file_downloader')

Downloader(url,dest,function(param){
//console.log(param)
})
