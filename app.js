//This is an implementation of a simple node.js code to show the successful installation of Express.
//Here is implementation of a simple Express server with three routes:home, about, and contact. 
//Each route logging message to the terminal when accessed and sending a response to the browser.

// Import the Express module
const express = require('express');

// This creates an instance of an Express application for this project
const app = express();

// Then Define  a port for listening to
const PORT = 3000;

// This set up the Home route, log event to terminal when accessed using 'GET' method and send response to the browser
app.get('/', (req, res) => {
  console.log('GET request received at / (Home)');
  res.send('Welcome to the Home page!');
});

//This set up the About route and log event to terminal when accessed using 'GET' method,and send response to the browser
app.get('/about', (req, res) => {
  console.log('GET request received at /about');
  res.send('This is the About page');
});

// This set up the Contact route, log event to terminal when accessed using 'GET' method and send response to the browser
app.get('/contact', (req, res) => {
  console.log('GET request received at /contact');
  res.send('This is the Contact page');
});

// This Start the server and listen on the specified port, logging events to the terminal when the server starts successfully
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

