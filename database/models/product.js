module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define(
        "Product",
        {
            article: {
                type: dataTypes.STRING,
            },
            color: {
                type: dataTypes.STRING,
            },
            price: {
                type: dataTypes.INTEGER,
            },
            numeration: {
                type: dataTypes.STRING,
            },
            stock: {
                type: dataTypes.INTEGER,
            },
            description: {
                type: dataTypes.TEXT,
            },
            imageppal: {
                type: dataTypes.STRING,
            },
        },
        {
            tableName: "products",
            timestamps: false,
        }
    );

    Product.associate = (models) => {
        Product.belongsTo(models.Subcategory, {
            as: "subcategory",
            foreignKey: "subcategoryId",
        });
        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "brandId",
        });
        Product.hasMany(models.ProductImages, {
            as: "images",
            foreignKey: "productId",
        });
    };

    return Product;
};
