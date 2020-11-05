const express = require("express");
const router = express.Router();
const categoriesApiController = require("../../controllers/api/categoriesApiController");

/* Listado de productos por GET */
router.get("/", categoriesApiController.showCategories);
router.get("/mujer", categoriesApiController.showWomanCategories);
router.get("/hombre", categoriesApiController.showManCategories);
router.get("/invierno", categoriesApiController.showInviernoCategories);
router.get("/verano", categoriesApiController.showVeranoCategories);

module.exports = router;