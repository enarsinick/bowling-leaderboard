import PageHeader from "../PageHeader";
import { useEffect, useState } from "react";
import axios from "axios";

const AddScores = () => {
    // ------------- Getting all players in league -------------
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");

    const handleRequest = () => {
        axios
            .get("http://localhost:5015/scores/1")
            .then((res) => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                setLoaded(true);
                setError(err);
            });
    };

    useEffect(handleRequest, []);

    useEffect(() => {
        if (error) {
            console.log(error);
        } else {
            console.log(players);
        }
    }, [loaded]);

    // ------------- Send new scores to the database -------------
    const [playerId, setPlayerId] = useState("");
    const [winLose, setWinLose] = useState(false);
    const [playerScore, setPlayerScore] = useState(0);
    const [spares, setSpares] = useState(0);
    const [strikes, setStrikes] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build object of form data
        const data = {
            id: playerId,
            winOrLost: winLose,
            score: playerScore,
            spares: spares,
            strikes: strikes,
        };

        axios
            .put(`http://localhost:5015/scores/update/${data.id}}`, data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <main>
            <PageHeader eyebrow="Add scores" title="How did you do?" />
            <form onSubmit={handleSubmit} className="form">
                <fieldset>
                    <label>Player Name</label>
                    <div className="select-wrapper">
                        <select
                            defaultValue={"DEFAULT"}
                            onChange={(e) => setPlayerId(e.target.value)}
                        >
                            <option value="DEFAULT" disabled hidden>
                                Select a player
                            </option>
                            <option value="1">Nick Cave</option>
                            <option value="2">Rich Parnell</option>
                            <option value="3">Blake Meadows</option>
                            <option value="4">Lottie Levick</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Did they win?</label>
                    <div className="select-wrapper">
                        <select
                            defaultValue={"DEFAULT"}
                            onChange={(e) => setWinLose(e.target.value)}
                        >
                            <option value="DEFAULT" disabled hidden>
                                Select an answer
                            </option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Score</label>
                    <input
                        type="number"
                        placeholder="Add player score"
                        onChange={(e) => setPlayerScore(e.target.value)}
                    />
                </fieldset>
                <div className="form-2-col">
                    <fieldset>
                        <label>Spares</label>
                        <input
                            type="number"
                            placeholder="Add spares..."
                            onChange={(e) => setSpares(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Strikes</label>
                        <input
                            type="number"
                            placeholder="Add strikes..."
                            onChange={(e) => setStrikes(e.target.value)}
                        />
                    </fieldset>
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </main>
    );
};

export default AddScores;
