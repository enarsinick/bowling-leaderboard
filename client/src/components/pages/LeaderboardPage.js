import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../PageHeader";
import StatsPanel from "../StatsPanel";
import StatsEyebrow from "../StatsEyebrow";

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
            });
    };

    useEffect(handleRequest, []);

    return (
        <main>
            <PageHeader eyebrow="Leaderboard" title="Stroud Bowling League" />
            <div className="stats">
                <StatsEyebrow />
                {scores.map((scores, i) => {
                    return (
                        <StatsPanel key={i} position={i + 1} data={scores} />
                    );
                })}
            </div>
        </main>
    );
};

export default LeaderboardPage;
