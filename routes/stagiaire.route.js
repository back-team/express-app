const stg = require("../controllers/stagiaire.controller");

require("../controllers/stagiaire.controller")
const router = require("express").Router();

router.post("/" , stg.add);


module.exports = router;