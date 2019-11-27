var http = require("http"),
    fs = require("fs");

// asi lo lee cada vez que carga la pagina
 http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,html){
        res.writeHead(200,{"Content-Type":"application/json"})
        //res.write(html);
        res.write(JSON.stringify({nombre: "Esteban", username:"efvilloldo"}));
        res.end();
    });
}).listen(8080);





