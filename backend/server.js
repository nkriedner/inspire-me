// IMPORT NPM PACKAGES
require("dotenv").config(); // enables the use of environment variables
const express = require("express");
const mongoose = require("mongoose"); // ODM library for MongoDB

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

// CONNECT TO DATABASE
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Connected to database & listening on port ${process.env.PORT}.`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// LISTEN TO REQUESTS
