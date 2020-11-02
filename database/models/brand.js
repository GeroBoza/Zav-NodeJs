module.exports = (sequelize, dataTypes) => {
    const Brand = sequelize.define(
        "Brand",
        {
            name: {
                type: dataTypes.STRING,
            },
            cartera: {
                type: dataTypes.BOOLEAN,
            },
        },
        {
            tableName: "brands",
            timestamps: false,
        }
    );

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "brandId",
        });
    };

    return Brand;
};
