// Imports
import "./styles/css/index.min.css";
import Nav from "./components/Nav";
import LeaderboardPage from "./components/pages/LeaderboardPage";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <LeaderboardPage />
        </div>
    );
};

export default App;
