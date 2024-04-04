// IMPORT NPM PACKAGES
const express = require("express");

// IMPORT INSPIRATION MODEL
const Inspiration = require("../models/InspirationModel");

// CREATE EXPRESS ROUTER
const router = express.Router();

// ROUTES
// GET all inspirations
router.get("/", (req, res) => {
    res.json({ mssg: "GET all inspirations" });
});
// GET a single inspiration
router.get("/:id", (req, res) => {
    res.json({ mssg: "GET a single inspiration" });
});
// POST a new inspiration
router.post("/", async (req, res) => {
    const { content, source, category } = req.body; // destructures the data from the request body

    try {
        // create new inspiration
        const inspiration = await Inspiration.create({ content, source, category });
        // send 'success' response status (200) with data in json
        res.status(200).json(inspiration);
    } catch (error) {
        // send 'bad request' response status (400) with message text of the error object
        res.status(400).json({ error: error.message });
    }
});
// DELETE an inspiration
router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE an inspiration" });
});
// UPDATE an inspriation
router.patch("/:id", (req, res) => {
    res.json({ mssg: "UPDATE an inspiration" });
});

// EXPORT THE ROUTER
module.exports = router;
