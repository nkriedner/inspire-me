// IMPORT NPM PACKAGES
require("dotenv").config(); // enables the use of environment variables
const express = require("express");

// CREATE EXPRESS APP
const app = express();

// GLOBAL MIDDLEWARE
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.path} route...`);
    next();
});

// EXPRESS ROUTES
app.get("/", (req, res) => {
    res.json({ mssg: "Welcome to Inspire-Me!" });
});

// LISTEN TO REQUESTS
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on port ${process.env.PORT}.`);
});
