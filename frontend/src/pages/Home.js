// Fetch inspiration data from the backend

// IMPORT MODULES
import { useEffect, useState } from "react";

// HOME COMPONENT (STATELESS)
const Home = () => {
    // Create state for the inspiration data
    const [inspirations, setInspirations] = useState(null);

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
                setInspirations(responseJson);
            }
        };

        // Call the function to fetch the data
        fetchInspirations();
    }, []);

    return (
        // Render the main part of the / route
        <main>
            <h2>HOME Page</h2>
            <br />

            {/* If there are courses -> show them */}
            {inspirations &&
                inspirations.map((inspiration) => (
                    <div key={inspiration._id}>
                        <p>{inspiration.content}</p>
                        <br />
                    </div>
                ))}
        </main>
    );
};

// EXPORT HOME COMPONENT
export default Home;
