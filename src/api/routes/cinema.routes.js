const express = require("express");
// const router = require("../controllers/cinema.controller");

const router = express.Router();

const { getCinema, 
        getCinemaById,
        postCinema, 
        putCinema, 
        deleteCinema
    } = require("../controllers/cinema.controller");

router.get("/", getCinema);
router.get("/:id", getCinemaById);
router.put("/:id", putCinema);
router.post("/", postCinema);
router.delete("/:id", deleteCinema);

module.exports = router;
