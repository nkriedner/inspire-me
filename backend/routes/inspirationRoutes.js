// IMPORT NPM PACKAGES
const express = require("express");

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
router.post("/", (req, res) => {
    res.json({ mssg: "POST a new inspiration" });
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
