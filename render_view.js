function render(html, parametros) {
    var html_string = html.toString();
    // Expresion regular - El patron busca el valor entre las llaves
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "nodejs...";

    // Reemplazamos las variables por los contenidos por el eval
    for (var i = variables.length - 1; i >= 0; i--) {
        //var value = eval(variables[i]);
        html_string = html_string.replace("{" + variables[i] + "}", parametros[variables[i]]);
    }

    return html_string;
}

module.exports.render = render;