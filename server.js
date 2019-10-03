require('dotenv').config()
const express = require("express"); // Importing Express.Js module.
const path = require("path");
const morgan = require('morgan'); // Importing morgan to Esxpress.js
const helmet = require('helmet'); 
const fs = require('fs'); // Importing a file-system.


const PORT = process.env.PORT || 4000;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// A variable which opens up the files in append mode.
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'morgan.log'), { flags: 'a'});
// Using app.use to make request to the server and logging it to a file called morgan.
app.use(morgan('dev', { stream: accessLogStream }));

//Making the use of endpoints easier.
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Creating the webserver.
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// exporting a an app function.
module.exports= app;