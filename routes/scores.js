const router = require("express").Router();

// Import the player model
const { Player } = require("../models/player.js");

// Get all scores for homepage
router.get("/getAll", (req, res, next) => {
    // res.status(200).send("This is the get all route").end();
    Player.find((err, players) => {
        if (err) {
            res.status(500).send(`There been an error: ${err}`);
        } else {
            res.status(200).json(players);
        }
    });
});

// Get a single player score based on an id
router.get("/:id", (req, res, next) => {
    res.status(200).send("This is the get single score route");
});

// Update player scores in the database
router.put("/add-score/:id", (req, res, next) => {
    // console.log(req.params.id);
    Player.findByIdAndUpdate(
        req.params.id,
        { $push: { scores: req.body } },
        (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(result);
                res.status(200).send(
                    `${result.playerName}'s score has been added...`
                );
            }
        }
    );
});

router.post("/create-player", (req, res, next) => {
    console.log(req.body);
    const player = new Player(req.body);
    player
        .save()
        .then((result) =>
            res.status(201).send(`${result.playerName} has been created...`)
        )
        .catch((error) => next(new Error(error.message)));
});

module.exports = router;
