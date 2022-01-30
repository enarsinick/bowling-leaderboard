import PageHeader from "../PageHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddScores = () => {
    // ------------- Getting all players in league -------------
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");

    const handleRequest = () => {
        axios
            .get("http://localhost:5015/api/getAll")
            .then((res) => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                setLoaded(true);
                setError(err);
                console.log(error);
            });
    };

    useEffect(handleRequest, []);

    // ------------- Send new scores to the database -------------
    const [playerId, setPlayerId] = useState(0);
    const [winLose, setWinLose] = useState(false);
    const [playerScore, setPlayerScore] = useState(0);
    const [spares, setSpares] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const navigate = useNavigate();

    // Validate the form data in realtime whenever there is a change
    const validateOnChange = (e, min, max, callback) => {
        if (e.target.value < min || e.target.value > max) {
            e.target.classList.add("missing-info");
            callback(0);
        } else {
            e.target.classList.remove("missing-info");
            callback(e.target.value);
        }
    };

    // Validate the form data when someone clicks submit button
    const validateOnSubmit = () => {
        const nameField = document.querySelector("#name");
        const winField = document.querySelector("#win");
        const scoreField = document.querySelector("#score");
        const sparesField = document.querySelector("#spares");
        const strikesField = document.querySelector("#strikes");

        if (nameField.value === "DEFAULT") {
            nameField.classList.add("missing-info");
            return "Please select a player";
        } else {
            nameField.classList.remove("missing-info");
        }

        if (winField.value === "DEFAULT") {
            winField.classList.add("missing-info");
            return "Did they win or lose?";
        } else {
            winField.classList.remove("missing-info");
        }

        if (
            scoreField.classList.contains("missing-info") ||
            scoreField.value == ""
        ) {
            scoreField.classList.add("missing-info");
            return "Please provide a score";
        }

        if (
            sparesField.classList.contains("missing-info") ||
            sparesField.value == ""
        ) {
            sparesField.classList.add("missing-info");
            return "Please provide a number of spares";
        }

        if (
            strikesField.classList.contains("missing-info") ||
            strikesField == ""
        ) {
            strikesField.classList.add("missing-info");
            return "Please provide a a number of strikes";
        }

        return "valid";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validate = validateOnSubmit();

        if (validate === "valid") {
            // Build object of form data
            const data = {
                id: playerId,
                total: parseInt(playerScore),
                spares: parseInt(spares),
                strikes: parseInt(strikes),
                win: winLose === "true" ? true : false,
                date: new Date(),
            };

            // console.log(`http://localhost:5015/api/add-score/${playerId}`);

            axios
                .put(`http://localhost:5015/api/add-score/${playerId}`, data)
                .then((res) => navigate("/"))
                .catch((err) => console.log(err));
        } else {
            console.log(validate);
        }
    };

    return (
        <main>
            <PageHeader eyebrow="Add scores" title="How did you do?" />
            <form onSubmit={handleSubmit} className="form">
                <fieldset>
                    <label>Player Name</label>
                    <div className="select-wrapper">
                        <select
                            id="name"
                            defaultValue={"DEFAULT"}
                            onChange={(e) => setPlayerId(e.target.value)}
                        >
                            <option value="DEFAULT" disabled hidden>
                                Select a player
                            </option>
                            {players.map((player) => {
                                return (
                                    <option key={player._id} value={player._id}>
                                        {player.playerName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Did they win?</label>
                    <div className="select-wrapper">
                        <select
                            id="win"
                            defaultValue={"DEFAULT"}
                            onChange={(e) => {
                                setWinLose(e.target.value);
                                e.target.classList.remove("missing-info");
                            }}
                        >
                            <option value="DEFAULT" disabled hidden>
                                Select an answer
                            </option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Score</label>
                    <input
                        id="score"
                        type="number"
                        placeholder="Add player score"
                        onChange={(e) =>
                            validateOnChange(e, 0, 300, setPlayerScore)
                        }
                    />
                </fieldset>
                <div className="form-2-col">
                    <fieldset>
                        <label>Spares</label>
                        <input
                            id="spares"
                            type="number"
                            placeholder="Add spares..."
                            onChange={(e) =>
                                validateOnChange(e, 0, 10, setSpares)
                            }
                        />
                    </fieldset>
                    <fieldset>
                        <label>Strikes</label>
                        <input
                            id="strikes"
                            type="number"
                            placeholder="Add strikes..."
                            onChange={(e) =>
                                validateOnChange(e, 0, 12, setStrikes)
                            }
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
