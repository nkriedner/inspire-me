// IMPORT MODULES
import { Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Home from "./pages/Home";

// HOME COMPONENT (STATELESS)
function App() {
    return (
        <div className="App">
            <Header />

            {/* Wrap individual Route components in Routes component */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

// EXPORT APP COMPONENT
export default App;
