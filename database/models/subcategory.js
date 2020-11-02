module.exports = (sequelize, dataTypes) => {
    const Subcategory = sequelize.define(
        "Subcategory",
        {
            name: {
                type: dataTypes.STRING,
            },
            image: {
                type: dataTypes.STRING,
            },
        },
        {
            tableName: "subcategories",
            timestamps: false,
        }
    );

    Subcategory.associate = (models) => {
        Subcategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId",
        });
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "subcategoryId",
        });
        Subcategory.belongsTo(models.Mujer, {
            as: "mujer",
            foreignKey: "mujerId",
        });
    };

    return Subcategory;
};
