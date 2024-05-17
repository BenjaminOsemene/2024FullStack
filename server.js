// Importing the http module to create HTTP server
const http = require('http');

// Defining  the hostname as localhost('127.0.0.1') and port number for the server
const hostname = '127.0.0.1';
const port = 3000;

// Creating the  HTTP server using http.createServer()
// Then the call back function is being executed each time the server receives a request via Get method
//The req in the call back function is the incoming request and res the response
// Using console to log the requset with with success code status
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('Response headers set');
    res.end('Hello,I am a fullstack developer!\n');
    console.log('Response sent');
});

// This outputting  that the server is starting
console.log('Starting server...');

// This start the server and making it listen on the localhost and port 3000
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
