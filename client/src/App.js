// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/css/index.min.css";
import Nav from "./components/Nav";
import LeaderboardPage from "./components/pages/LeaderboardPage";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import AddScores from "./components/pages/AddScores";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<LeaderboardPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/add-scores" element={<AddScores />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
