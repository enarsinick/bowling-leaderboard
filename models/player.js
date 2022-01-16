const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Score Schema
const scoreSchema = new Schema({
    total: {
        type: Number,
        required: [true, "Please provide a score total"],
        min: [0, "Score can not less than 0"],
        max: [300, "Score can not be over 300"],
    },
    spares: {
        type: Number,
        required: [true, "Please provide number of spares"],
        max: [10, "Max of 10 spares in one game per player"],
    },
    strikes: {
        type: Number,
        required: [true, "Please provide number of strikes"],
        max: [12, "Max of 12 strikes in one game per player"],
    },
    win: {
        type: Boolean,
        required: [true, "Did the player win or lose?"],
    },
    date: {
        type: Date,
        required: [true, "Please provide date of game"],
    },
});

// Player Schema
const playerSchema = new Schema({
    playerName: {
        type: String,
        required: [true, "Please provide a player name"],
    },
    image: {
        type: String,
    },
    scores: [scoreSchema],
});

// Create the player model and export
const Player = model("Player", playerSchema);
module.exports = { Player: Player };
