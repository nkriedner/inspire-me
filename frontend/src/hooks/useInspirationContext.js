// IMPORT MODULES
import { useContext } from "react";

// IMPORT INSPIRATION CONTEXT
import { InspirationContext } from "../context/InspirationContext";

// CREATE CUSTOM HOOK (to access inspiration context)
export const useInspirationContext = () => {
    // Access inspiration context using useContext hook
    const context = useContext(InspirationContext);

    // If context is not available, throw an error
    if (!context) {
        throw Error("useInspirationContext must be used inside an InspirationContextProvider");
    }

    return context;
};
