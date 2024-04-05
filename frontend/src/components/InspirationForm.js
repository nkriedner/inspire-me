// IMPORT MODULES
import { useState } from "react";

// INSPIRATION FORM COMPONENT (STATELESS)
const InspirationForm = () => {
    // Create state for the inspiration and error data
    const [content, setContent] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(null);

    // HandleSubmit function for form submissions
    const handleSubmit = async (e) => {
        console.log("handleSubmit running...");
        e.preventDefault(); // prevents the default form submission

        // Store new inspiration data
        const newInspiration = { content, source, category };

        // Post the new inspiration data to database
        const response = await fetch("http://localhost:4000/api/inspirations", {
            method: "POST",
            body: JSON.stringify(newInspiration),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Parse the json from the response
        const responseJson = await response.json();

        // Check if there is any problem with the response
        if (!response.ok) {
            // set / update error state
            setError(responseJson.error);
        }
        // If there was no problem with the response
        if (response.ok) {
            // Reset state
            setContent("");
            setSource("");
            setCategory("");
            setError(null);

            console.log("New inspiration added:", responseJson);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a New Inspiration</h3>

            <div>
                <label htmlFor="content">Content:</label>
                <input type="text" id="content" onChange={(e) => setContent(e.target.value)} value={content} />
            </div>

            <div>
                <label htmlFor="source">Source:</label>
                <input type="text" id="source" onChange={(e) => setSource(e.target.value)} value={source} />
            </div>

            <div>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" onChange={(e) => setCategory(e.target.value)} value={category} />
            </div>

            <button type="submit">Add inspiration</button>

            {/* Show the error(s) if there are any */}
            {error && <div>ERROR: {error}</div>}
        </form>
    );
};

// EXPORT INSPIRATIONDETAILS COMPONENT
export default InspirationForm;
