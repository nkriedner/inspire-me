// IMPORT NPM PACKAGES
const mongoose = require("mongoose"); // ODM library for MongoDB

// IMPORT INSPIRATION MODEL
const Inspiration = require("../models/InspirationModel");

// INSPIRATION CONTROLLER FUNCTIONS
// GET all inspirations
const getInspirations = async (req, res) => {
    // find all inspiration sorted by creation date
    const inspirations = await Inspiration.find({}).sort({ createdAt: -1 });

    // send 'success' response status (200) with data in json
    res.status(200).json(inspirations);
};

// GET a single inspiration
const getInspiration = async (req, res) => {
    const { id } = req.params; // destructures the id from the request params

    // check if id is (not) a valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // if it is not valid -> send 'bad request' response status (400) with error message
        return res.status(404).json({ error: "The id is not a valid mongoose id." });
    }

    // find the inspiration via its id
    const inspiration = await Inspiration.findById(id);

    // check if inspiration exists
    if (!inspiration) {
        // if it does not exist -> send 'bad request' response status (400) with error message
        return res.status(404).json({ error: "No inspiration with the corresponding id in database." });
    }

    // send 'success' response status (200) with data in json
    res.status(200).json(inspiration);
};

// CREATE new inspiration
const createInspiration = async (req, res) => {
    const { content, source, category } = req.body; // destructures the data from the request body

    let emptyFields = []; // holds the empty input fields of the create inspiration form

    // Check if 'content' field is empty
    if (!content) {
        // add 'content' to emptyFields array
        emptyFields.push("content");
    }

    // Checkk if any required fields are empty
    if (emptyFields.length > 0) {
        // Send a response with a custom error message and the emptyFields array
        return res.status(400).json({ error: "Please fill in the required field!", emptyFields });
    }

    try {
        // create new inspiration (= add a document to database)
        const inspiration = await Inspiration.create({ content, source, category });
        // send 'success' response status (200) with data in json
        res.status(200).json(inspiration);
    } catch (error) {
        // send 'bad request' response status (400) with message text of the error object
        res.status(400).json({ error: error.message });
    }
};

// DELETE an inspiration
const deleteInspiration = async (req, res) => {
    const { id } = req.params; // destructures the id from the request params

    // check if id is (not) a valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // if it is not valid -> send 'bad request' response status (400) with error message
        return res.status(404).json({ error: "The id is not a valid mongoose id." });
    }

    // find the inspiration via its id and delete it
    const inspiration = await Inspiration.findOneAndDelete({ _id: id });

    // check if inspiration exists
    if (!inspiration) {
        // if it does not exist -> send 'bad request' response status (400) with error message
        return res.status(404).json({ error: "No inspiration with the corresponding id in database." });
    }

    // send 'success' response status (200) with data in json
    res.status(200).json(inspiration);
};

// UPDATE an inspiration
const updateInspiration = async (req, res) => {
    const { id } = req.params; // destructures the id from the request params

    // check if id is (not) a valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // if it is not valid -> send 'bad request' response status (400) with error message
        return res.status(404).json({ error: "The id is not a valid mongoose id." });
    }

    // find the inspiration via its id and update it
    const inspiration = await Inspiration.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    // check if inspiration exists
    if (!inspiration) {
        // if it does not exist -> send 'bad request' response status (400) with error message
        return res.status(404).json({ error: "No inspiration with the corresponding id in database." });
    }

    // send 'success' response status (200) with data in json
    res.status(200).json(inspiration);
};

// EXPORT CONTROLLER FUNCTIONS
module.exports = { getInspirations, getInspiration, createInspiration, deleteInspiration, updateInspiration };
