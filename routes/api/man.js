var express = require("express");
var router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController");

/* GET home page. */
router.get("/:id", productsApiController.showProducts);

module.exports = router;
