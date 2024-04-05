// IMPORT MODULES
import { Link, NavLink } from "react-router-dom";

// HEADER COMPONENT (STATELESS)
const Header = () => {
    return (
        <header>
            {/* Header logo */}
            <Link to="/">
                <h1>InspireMe</h1>
            </Link>

            {/* Header navigation */}
            <nav>
                <ul>
                    <li>
                        <NavLink to="#">Signup</NavLink>
                        <NavLink to="#">Signin</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

// EXPORT HEADER COMPONENT
export default Header;
