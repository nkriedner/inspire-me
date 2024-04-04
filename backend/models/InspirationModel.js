// IMPORT NPM PACKAGES
const mongoose = require("mongoose"); // ODM library for MongoDB

// INITIALIZE THE USE OF MONGOOSE SCHEMAS
const Schema = mongoose.Schema;

// CREATE AND DEFINE THE INSPIRATION SCHEMA
const inspirationSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        source: {
            type: String,
            required: false,
        },
        category: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

// CREATE A MODEL BASED ON SCHEMA AND EXPORT IT
module.exports = mongoose.model("Inspiration", inspirationSchema);
