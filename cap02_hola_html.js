var http = require("http"),
    fs = require("fs");

//var html = fs.readFileSync("./index.html");
    
// asi lo lee una sola vez
/*
fs.readFile("./index.html",function(err,html){
    http.createServer(function(req,res){
        res.write(html);
        res.end();
    }).listen(8080);
});
*/
    
// asi lo lee cada vez que carga la pagina
 http.createServer(function(req,res){
     fs.readFile("./index.html",function(err,html){
        res.write(html);
        res.end();
    });
}).listen(8080);





