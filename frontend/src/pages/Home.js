// IMPORT MODULES & HOOKS
import { useEffect } from "react";
import { useInspirationContext } from "../hooks/useInspirationContext";

// IMPORT COMPONENTS
import InspirationForm from "../components/InspirationForm";
import InspirationDetails from "../components/InspirationDetails";

// HOME COMPONENT (STATEFUL)
const Home = () => {
    // Invoke Inspiration Context Hook for state updates
    const { inspirations, dispatch } = useInspirationContext();

    // Fetch inspiration data when component renders with useEffect hook
    useEffect(() => {
        // Function for fetching the data
        const fetchInspirations = async () => {
            const response = await fetch("http://localhost:4000/api/inspirations");
            // Parse the json from the response to have an array of inspirations
            const responseJson = await response.json();

            // Check if the response is ok (= no error)
            if (response.ok) {
                // Update state with received data
                dispatch({ type: "SET_INSPIRATIONS", payload: responseJson });
            }
        };

        // Call the function to fetch the data
        fetchInspirations();
    }, [dispatch]);

    return (
        // Render the main part of the / route
        <main>
            <InspirationForm />

            <h2>Inspiration List</h2>
            {/* Show courses list once they are fetched from database */}
            {inspirations &&
                inspirations.map((inspiration) => (
                    <InspirationDetails key={inspiration._id} inspiration={inspiration} />
                ))}
        </main>
    );
};

// EXPORT HOME COMPONENT
export default Home;
