const express = require("express");
const router = express.Router();
const productApiRouter = require("./api/products");
const categoriesApiRouter = require("./api/categories");
const subcategoriesApiRouter = require("./api/subcategories");
const manApiRouter = require("./api/man");

/* Ruta de productos API */
router.use("/products", productApiRouter);

/* Ruta de categories API */
router.use("/categories", categoriesApiRouter);

/* Ruta de subcategories API */
router.use("/subcategories", subcategoriesApiRouter);

/* Ruta de man API */
router.use("/man", manApiRouter);



module.exports = router;
