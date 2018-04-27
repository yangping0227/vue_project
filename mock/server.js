let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./sliders');
function read(cb){
    fs.readFile('./book.json','utf-8',function(err,data){
        if(err || data.length == 0){
            cb([])
        }else{
            cb(JSON.parse(data))
        }
    })
}

http.createServer((req,res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.send(200);/*让options请求快速返回*/


    let {pathname,query} = url.parse(req.url);
    if(pathname == '/sliders'){
        res.end(JSON.stringify(sliders))
    }
    if(pathname == '/hot'){
        read(function(books){
            res.setHeader('Content-Type','application/json;charset=utf8');
            let hot = books.reverse().slice(0,6);
            res.end(JSON.stringify(hot));
        });
    }
}).listen(3000)
