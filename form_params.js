var http = require("http"),
    fs = require("fs");

// asi lo lee cada vez que carga la pagina
 http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,html){
        // Omitimos el favicon (omite esa peticion)
        if (req.url.indexOf("favicon.ico") > 0){
            return;
        }
        /*
        console.log("=======================\n\n");
        console.log(req);
        console.log("=======================\n\n");
        */
        var html_string = html.toString();

        // Expresion regular - El patron busca el valor entre las llaves
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "nodejs...";
        var masinfo = "render de variables"
        var final = "aca termina."

        // Toma los parametros del path de la url
        var array_parametros = [], parametros = {} // hash de parametros;
        if (req.url.indexOf("?") > 0){
            // Separa la url del path
            var url_data = req.url.split("?");
            // Se queda con los parametros
            var array_parametros = url_data[1].split("&");
        }
        // Recorre y separa los parametros del path
        for (let i = 0; i < array_parametros.length; i++) {
            var parametro = array_parametros[i];
            // Separa el parametro del valor
            var param_data = parametro.split("=");
            // hash de parametros. lo convierte a [nombre: Esteban]
            parametros[param_data[0]] = param_data[1];


        }

        // Reemplazamos las variables por los contenidos por el eval
        for (var i = variables.length - 1; i >= 0; i--) {
            //var value = eval(variables[i]);
            html_string = html_string.replace("{" + variables[i] + "}", parametros[variables[i]]);
        }
        // Devuelve el html
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(html_string);
        res.end();
    });
}).listen(8080);

