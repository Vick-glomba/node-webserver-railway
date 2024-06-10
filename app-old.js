
const http = require("http");

http.createServer((request, response) =>{
    // response.setHeader("Content-Disposition", "attachment; filename=lista.csv")
    // response.writeHead(200, {"Content-Type": "application/csv"})
    
    response.write("Hola mundo");
    ;
    response.end();
})
.listen(8080);

console.log("escuchando el puerto", 8080)