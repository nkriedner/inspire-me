// IMPORT INSPIRATION CONTEXT
import { useInspirationContext } from "../hooks/useInspirationContext";

// INSPIRATION DETAILS COMPONENT (STATELESS)
const InspirationDetails = ({ inspiration }) => {
    // Invoke Inspiration Context Hook for state updates
    const { dispatch } = useInspirationContext();

    // Function for deleting inspiration data (triggered by delete button clicks)
    const deleteInspiration = async () => {
        console.log("btn-delete clicked...");

        // Delete an inspiration from database
        const response = await fetch("http://localhost:4000/api/inspirations/" + inspiration._id, {
            method: "DELETE",
        });

        // Parse the json from the response
        const responseJson = await response.json();

        // Check if response was ok
        if (response.ok) {
            // Update global inspiration state
            dispatch({ type: "DELETE_INSPIRATION", payload: responseJson });
        }
    };

    return (
        <div className="inspiration">
            <button className="btn-delete" onClick={deleteInspiration}>
                delete
            </button>
            <p>
                {inspiration.content} <em>#{inspiration.category}</em>
            </p>
            <span>({inspiration.source})</span>
            <br />
        </div>
    );
};

// EXPORT INSPIRATIONDETAILS COMPONENT
export default InspirationDetails;
