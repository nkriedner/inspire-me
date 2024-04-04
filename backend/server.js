// IMPORT NPM PACKAGES
require("dotenv").config(); // enables the use of environment variables
const express = require("express");

// IMPORT ROUTES
const inspirationRoutes = require("./routes/inspirationRoutes");

// CREATE EXPRESS APP
const app = express();

// GLOBAL MIDDLEWARE
app.use(express.json()); // parse json data from a request and enables to access it from 'req.body'
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.path} route...`);
    next();
});

// USE IMPORTED EXPRESS ROUTES
app.use("/api/inspirations", inspirationRoutes);

// LISTEN TO REQUESTS
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on port ${process.env.PORT}.`);
});
