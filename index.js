var http = require('http');
var fs = require('fs');

const PORT=8080; 

/* fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
 */
fs.readFile('./index.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});

fs.readFile('./styles.css', function(err, data) {
    if (err){
        throw err;
    }
    cssFile = data;
});
fs.readFile('./app.js', function(err, data) {
    if (err){
        throw err;
    }
    jsFile = data;
});

var server = http.createServer(function (request, response) {
    switch (request.url) {
        case "/app.js" :
            response.writeHead(200, {"Content-Type": "application/js"});
            response.write(jsFile);
            break;
        case "/styles.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(cssFile);
            break;
        default :    
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlFile);
    };
    response.end();
}).listen(PORT)
