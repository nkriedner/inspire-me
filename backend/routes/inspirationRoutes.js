// IMPORT NPM PACKAGES
const express = require("express");

// IMPORT CONTROLLER FUNCTIONS
const {
    getInspirations,
    getInspiration,
    createInspiration,
    deleteInspiration,
    updateInspiration,
} = require("../controllers/inspirationController");

// CREATE EXPRESS ROUTER
const router = express.Router();

// ROUTES
// GET all inspirations
router.get("/", getInspirations);
// GET a single inspiration
router.get("/:id", getInspiration);
// POST a new inspiration
router.post("/", createInspiration);
// DELETE an inspiration
router.delete("/:id", deleteInspiration);
// UPDATE an inspriation
router.patch("/:id", updateInspiration);

// EXPORT THE ROUTER
module.exports = router;
