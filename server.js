// --------- Imports --------- //
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initializing express
const app = express();

// Import routes
const scoresRoute = require("./routes/scores");

// --------- Imports --------- //

// Common Middleware
app.use(express.json());
app.use(cors());

// --------- Database Connection --------- //
mongoose.connect(
    `mongodb://localhost:27017/strike`,
    { useNewUrlParser: true },
    (error) => {
        error
            ? console.log("Can't connect to DB")
            : console.log("Database connected!...");
    }
);

// --------- Routes --------- //
app.use("/api", scoresRoute);

// --------- Error Handling Middleware --------- //
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
});

// --------- Listen on 5015 --------- //
const server = app.listen(5015, () => {
    console.log(`Listening on port ${server.address().port}`);
});

module.exports = server;
