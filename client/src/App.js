// Imports
import "./styles/css/index.min.css";
import Nav from "./components/Nav";
import LeaderboardPage from "./components/pages/LeaderboardPage";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <LeaderboardPage />
            <Footer />
        </div>
    );
};

export default App;
