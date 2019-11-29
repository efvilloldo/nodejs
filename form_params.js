var http = require("http"),
    fs = require("fs"),
    parser = require("./params_parser.js"),
    render = require("./render_view.js");

  
// asi lo lee cada vez que carga la pagina
 http.createServer(function(req,res){
    // Omitimos el favicon (omite esa peticion)
    if (req.url.indexOf("favicon.ico") > 0){ return; }

    fs.readFile("./index.html",function(err,html){
        
        
        var parametros = parser.parse(req);

       
        // Devuelve el html
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(render.render(html, parametros));
        res.end();
    });
}).listen(8080);

