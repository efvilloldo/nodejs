var http = require("http"),
    fs = require("fs");

// asi lo lee cada vez que carga la pagina
 http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,html){
        var html_string = html.toString();

        // Expresion regular - El patron busca el valor entre las llaves
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "nodejs...";
        var masinfo = "render de variables"
        var final = "aca termina."

        for (var i = variables.length - 1; i >= 0; i--) {
            var value = eval(variables[i]);
            html_string = html_string.replace("{" + variables[i] + "}", value);
        }

        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(html_string);
        res.end();
    });
}).listen(8080);

