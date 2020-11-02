module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            name: {
                type: dataTypes.STRING,
            },
        },
        {
            tableName: "categories",
            timestamps: false,
        }
    );

    Category.associate = (models) => {
        Category.hasMany(models.Subcategory, {
            as: "subcategories",
            foreignKey: "categoryId",
        });
        Category.hasMany(models.Mujer, {
            as: "mujer",
            foreignKey: "categoryId",
        });
    };

    return Category;
};
