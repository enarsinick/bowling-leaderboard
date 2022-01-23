// Imports
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Img } from "../../img/img-icon.svg";
import PageHeader from "../PageHeader";

const PlayerCreation = () => {
    const [playerName, setPlayerName] = useState("");
    const [playerImage, setPlayerImage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const player = {
            playerName: playerName,
            image: playerImage,
            scores: [],
        };

        axios
            .post("http://localhost:5015/api/create-player", player)
            .then((res) => navigate("/"))
            .catch((err) => setError(err));
    };

    return (
        <main>
            <PageHeader eyebrow="Add player" title="Create a new player" />
            <form onSubmit={handleSubmit} className="form">
                <fieldset>
                    <label>Player Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label>Profile image</label>
                    <div className="image-upload-wrap">
                        <input
                            className="file-upload-input"
                            type="file"
                            accept="image/*"
                        />
                        <div className="drag-text">
                            <Img />
                            <h3>Drag and drop or click to upload</h3>
                        </div>
                    </div>
                </fieldset>
                <button className="btn">Create</button>
            </form>
        </main>
    );
};

export default PlayerCreation;
