function parse(req) {
    // Toma los parametros del path de la url
    var array_parametros = [], parametros = {} // hash de parametros -- esto es un json;
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
    return parametros;
}

module.exports.parse = parse;