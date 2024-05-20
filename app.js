//Express module is imported and instances of the application created 
//Port number on which server will listen on incoming request is defined
const express = require('express');
const app = express();
const port = 3000;

// Here the app.get method is used as the route which is executed when request matches the URL path.
//The the HTML template literal will be sent as the response when requested
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome to My Website</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h1 {
            color: #333333;
            font-size: 36px;
            margin-bottom: 20px;
          }
          p {
            color: #666666;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to My Website</h1>
          <p>This is a simple website built with Express.js</p>
        </div>
      </body>
    </html>
  `;

  res.send(html);
});

// This starts the server on the specified port
// Then logging messages to the terminal that the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
