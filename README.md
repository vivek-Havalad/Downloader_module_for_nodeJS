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

file_downloader
=========

file_dowloader is an application that allows easy download files to desired destination in your local machine
from any site and it works with both http and https protocols.

Installation
------------

In order to install it you can run:

```sh
$ npm install file_downloader
```

Usage
-----
```javascript
var Downloader = require("file_downloader");
```

Programmatic Access
-------------------

It takes to arguments first one image url are like of the website from which
you want to download the image and second one is the destination to which folder
you want to download the image it can be relative or absolute path
for example :

```javascript
var Downloader = require("file_downloader");

var fileUrl ="https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg";
var fileSavePath= './lib/';
Downloader(fileUrl,fileSavePath,function(parm){
        console.log(parm);
})
```
