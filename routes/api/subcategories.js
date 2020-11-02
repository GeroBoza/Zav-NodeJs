const express = require("express");
const router = express.Router();
const subcategoriesApiController = require("../../controllers/api/subcategoriesApiController");

/* Listado de productos por GET */
router.get("/:id", subcategoriesApiController.showSubategory);

module.exports = router;