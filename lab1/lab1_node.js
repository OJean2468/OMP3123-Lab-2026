/* 
    Purpose 
    We'll use Node to create a server then listen on that server for any incoming require. 
    Then return a response. 

*/

var http = require("http")
http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    response.end("The server is now running successfully and listening")
}).listen(8088)

//Optional Homework: try another port number