var http=require('http'),fs=require('fs');const https=require('https');var https_download=function(a,b,c,d){https.get(a,function(f){f.pipe(c),c.on('finish',function(){c.close(d({ok:1}))})}).on('error',function(f){fs.unlink(b),d&&d(f.message)})},http_download=function(a,b,c,d){http.get(a,function(f){403!=f.statusCode&&401!=f.statusCode?(f.pipe(c),c.on('finish',function(){c.close(d({ok:2}))})):(new_url=a.replace('http','https'),https_download(new_url,b,c,d))}).on('error',function(f){fs.unlink(b),d&&d(f.message)})},download=function(a,b,c){var d=a.split(':')[0],e=!0;'http'==d&&(e=!1);var f=a.split('/').pop().split('#')[0].split('?')[0];-1!=f.indexOf(':')&&(f=f.split(':')[1]),b=b+''+f;var g=fs.createWriteStream(b);e?https_download(a,b,g,c):http_download(a,b,g,c)};module.exports=download;
