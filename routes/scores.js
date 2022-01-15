const router = require("express").Router();

// Get all scores for homepage
router.get("/all", (req, res, next) => {
    res.status(200).send("This is the get all route").end();
});

// Get a single score based on an id
router.get("/:id", (req, res, next) => {
    res.status(200).send("This is the get single score route");
});

// Update scores in the database
router.put("/update/:id", (req, res, next) => {
    res.status(200).send("This is the update/add new scores route").end();
});

module.exports = router;
