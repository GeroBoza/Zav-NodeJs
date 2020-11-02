const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController");

/* Listado de productos por GET */
router.get("/detail/:id", productsApiController.showProductDetail);
router.get("/:id", productsApiController.showProducts);

module.exports = router;