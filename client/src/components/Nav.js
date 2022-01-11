// Imports
import logo from "../img/logo.svg";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <img className="logo" src={logo} alt="logo" />
                <button className="btn">Add scores</button>
            </div>
        </nav>
    );
};

export default Nav;
