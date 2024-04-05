// IMPORT MODULES
import { createContext, useReducer } from "react";

// CREATE AND EXPORT INSPIRATION CONTEXT
export const InspirationContext = createContext();

// REDUCER FUNCTION (to manage state updates based on dispatched actions)
export const inspirationReducer = (state, action) => {
    // Check the type of action
    switch (action.type) {
        case "SET_INSPIRATIONS":
            return {
                inspirations: action.payload,
            };
        case "CREATE_INSPIRATION":
            return {
                inspirations: [action.payload, ...state.inspirations], // adds the payload (new inspiration) to the existing array of inspirations
            };
        case "DELETE_INSPIRATION":
            return {
                // filter through the inspirations and keep only those not matching the payload
                inspirations: state.inspirations.filter((inspiration) => inspiration._id !== action.payload._id),
            };
        // Default case for unknown actions
        default:
            return state;
    }
};

// PROVIDE INSPIRATION CONTEXT TO COMPONENT TREE
export const InspirationContextProvider = ({ children }) => {
    // Use reducer hook to manage state updates
    const [state, dispatch] = useReducer(inspirationReducer, {
        inspirations: null, // initial state with inspirations set to null
    });

    return (
        // Wrap whole app with Inspiration Context Provider
        <InspirationContext.Provider value={{ ...state, dispatch }}>
            {/* 'children' represents the App component with all its children */}
            {children}
        </InspirationContext.Provider>
    );
};
