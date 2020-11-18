const { Product, Category, Subcategory } = require("../../database/models");

const controller = {
    //Listado de todos los productos por GET
    showProducts: async (req, res) => {
        try {
            // res.send("hola");
            let id = req.params.id;
            const subcategory = await Subcategory.findByPk(id, {
                include: [
                    {
                        association: "products",
                        include: [{ association: "brand" }],
                    },
                    "category",
                ],
            });
            // res.send(subcategory);

            let products = subcategory.products;

            /*ACOMODA LOS PRODUCTOS ALFABETICAMENTE TENIENDO EN CUENTA EL NOMBRE DE MARCA Y ARTICULO*/
            function compare(a, b) {
                if (a.brand.name + a.article < b.brand.name + b.article) {
                    return -1;
                }
                if (a.brand.name + a.article > b.brand.name + b.article) {
                    return 1;
                }
                return 0;
            }

            products.sort(compare);

            // res.send(products);

            let menuItems = await Subcategory.findAll({
                where: {
                    categoryId: subcategory.categoryId,
                    mujerId: subcategory.mujerId,
                },
                order: ["name"],
                include: [
                    {
                        association: "mujer",
                    },
                ],
            });

            let sex;
            if (subcategory.categoryId == 1) {
                sex = "mujer";
            } else {
                sex = "hombre";
            }

            let obj = {
                data: products,
                menuItems: menuItems,
                url: sex,
            };

            res.send(obj);

            // res.render("products", {
            //     category: subcategory.category.name,
            //     products,
            //     menuItems,
            //     selected: subcategory.name,
            // });
        } catch (error) {
            res.send(error);
        }
    },
    showProductDetail: async (req, res) => {
        try {
            let id = req.params.id;
            const product = await Product.findOne({
                where: {
                    id: id,
                },
                include: [
                    {
                        association: "subcategory",
                        include: ["category"],
                    },
                    "brand",
                    "images",
                ],
            });

            // res.send(product);
            const menuItems = await Subcategory.findAll({
                where: {
                    categoryId: product.subcategory.category.id,
                    mujerId: product.subcategory.mujerId,
                },
                include: ["mujer"],
                order: ["name"],
            });

            let sex;
            if (product.subcategory.categoryId == 1) {
                sex = "mujer";
            } else {
                sex = "hombre";
            }

            let obj = {
                data: product,
                menuItems: menuItems,
                url: sex,
            };

            res.send(obj);
        } catch (error) {
            res.send(error);
        }
    },

    addProduct: async (req, res) => {
        res.send(req);
    },
};

module.exports = controller;
