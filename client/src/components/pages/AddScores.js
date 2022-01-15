import PageHeader from "../PageHeader";

const AddScores = () => {
    return (
        <main>
            <PageHeader eyebrow="Add scores" title="How did you do?" />
            <form className="form">
                <fieldset>
                    <label>Player Name</label>
                    <div className="select-wrapper">
                        <select>
                            <option selected disabled hidden>
                                Select a player
                            </option>
                            <option>Nick Cave</option>
                            <option>Rich Parnell</option>
                            <option>Blake Meadows</option>
                            <option>Lottie Levick</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Did they win?</label>
                    <div className="select-wrapper">
                        <select>
                            <option selected disabled hidden>
                                Select an answer
                            </option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Score</label>
                    <input type="number" placeholder="Add player score" />
                </fieldset>
                <div className="form-2-col">
                    <fieldset>
                        <label>Spares</label>
                        <input type="number" placeholder="Add spares..." />
                    </fieldset>
                    <fieldset>
                        <label>Strikes</label>
                        <input type="number" placeholder="Add strikes..." />
                    </fieldset>
                </div>
                <button className="btn">Submit</button>
            </form>
        </main>
    );
};

export default AddScores;
