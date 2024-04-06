// IMPORT MODULES & HOOKS
import { useState } from "react";
import { useInspirationContext } from "../hooks/useInspirationContext";

// INSPIRATION FORM COMPONENT (STATELESS)
const InspirationForm = () => {
    // Invoke Inspiration Context Hook for state updates
    const { dispatch } = useInspirationContext();

    // Create state for the inspiration, error and emptyfields data
    const [content, setContent] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]); // holds the array of required but empty form fields

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
            // set the emptyFields state with the emptyFields array received in the response
            setEmptyFields(responseJson.emptyFields);
        }
        // If there was no problem with the response
        if (response.ok) {
            // Reset state
            setContent("");
            setSource("");
            setCategory("");
            setError(null);
            setEmptyFields([]);

            console.log("New inspiration added:", responseJson);

            // Update global inspiration state with new inspiration
            dispatch({ type: "CREATE_INSPIRATION", payload: responseJson });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a New Inspiration</h3>

            <div>
                <label htmlFor="content">Content:</label>

                {/* Give this (required) input a conditional error class based on wether it was empty when form was sent  */}
                <input
                    type="text"
                    id="content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    placeholder="(required)"
                    className={emptyFields.includes("content") ? "error" : ""}
                />
            </div>

            <div>
                <label htmlFor="source">Source:</label>
                <input
                    type="text"
                    id="source"
                    onChange={(e) => setSource(e.target.value)}
                    value={source}
                    placeholder="(optional)"
                />
            </div>

            <div>
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    placeholder="(optional)"
                />
            </div>

            <button type="submit">Add inspiration</button>

            {/* Show the error(s) if there are any */}
            {error && <div className="error">{error}</div>}
        </form>
    );
};

// EXPORT INSPIRATIONDETAILS COMPONENT
export default InspirationForm;
