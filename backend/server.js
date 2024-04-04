// IMPORT NPM PACKAGES
const express = require("express");

// CREATE EXPRESS APP
const app = express();

// LISTEN TO REQUESTS
app.listen(4000, () => {
    console.log("Server listening on port 4000.");
});
