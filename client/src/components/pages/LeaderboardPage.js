import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomepageHeader from "../HomepageHeader";
import Loader from "../Loader";
import StatsPanel from "../StatsPanel";
import StatsEyebrow from "../StatsEyebrow";
import { ReactComponent as PersonIcon } from "../../img/person-icon.svg";
import { ReactComponent as PlusIcon } from "../../img/plus-icon.svg";

const LeaderboardPage = () => {
    const [scores, setScores] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");

    const handleRequest = () => {
        axios
            .get("http://localhost:5015/api/getAll")
            .then((res) => {
                setScores(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                setLoaded(true);
                setError(err);
                console.log(error);
            });
    };

    useEffect(handleRequest, []);

    return (
        <main>
            <div className="homepage-header-wrapper">
                <HomepageHeader
                    eyebrow="Leaderboard"
                    title="Stroud Bowling League"
                />
                <div className="homepage-button-wrapper">
                    <Link to="/add-scores">
                        <div className="homepage-button">
                            <PlusIcon />
                        </div>
                    </Link>
                    <Link to="/add-player">
                        <div className="homepage-button">
                            <PersonIcon />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="stats">
                <StatsEyebrow />
                {loaded ? (
                    scores.map((scores, i) => {
                        return (
                            <StatsPanel
                                key={i}
                                position={i + 1}
                                data={scores}
                            />
                        );
                    })
                ) : (
                    <Loader />
                )}
            </div>
        </main>
    );
};

export default LeaderboardPage;
