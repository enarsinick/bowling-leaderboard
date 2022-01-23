// Imports
import { ReactComponent as Img } from "../../img/img-icon.svg";
import PageHeader from "../PageHeader";

const PlayerCreation = () => {
    return (
        <main>
            <PageHeader eyebrow="Add player" title="Create a new player" />
            <form className="form">
                <fieldset>
                    <label>Player Name</label>
                    <input type="text" placeholder="John Doe" />
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
