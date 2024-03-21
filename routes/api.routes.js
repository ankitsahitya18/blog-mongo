const router = require("express").Router()

//API v1


//health-checkup
router.get("/health-check", (req, res) => {
    res.status(200).send({ message: "working fine" })
})
//API Error Routes
router.use(function (req, res) {
    return res.status(404).json({
        message: "Not found.",
    });
});

module.exports = router



