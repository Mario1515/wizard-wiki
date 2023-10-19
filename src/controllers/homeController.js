const router = require("express").Router();

//routes
router.get("/", (req, res) => {
    res.render("home")
});

module.exports = router;