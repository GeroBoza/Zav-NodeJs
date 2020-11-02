module.exports = (sequelize, dataTypes) => {
    const ProductImages = sequelize.define(
        "ProductImages",
        {
            name: {
                type: dataTypes.STRING,
            },
        },
        {
            tableName: "productsimages",
            timestamps: false,
        }
    );

    ProductImages.associate = (models) => {
        ProductImages.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productId",
        });
    };

    return ProductImages;
};
