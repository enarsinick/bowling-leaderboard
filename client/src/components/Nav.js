// Imports
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <Link to="/add-scores">
                    <button className="btn">Add scores</button>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
