module.exports = (sequelize, dataTypes) => {
    const Mujer = sequelize.define(
        "Mujer",
        {
            name: {
                type: dataTypes.STRING,
            },
            image: {
                type: dataTypes.STRING,
            },
        },
        {
            tableName: "mujer",
            timestamps: false,
        }
    );

    Mujer.associate = (models) => {
        Mujer.hasMany(models.Subcategory, {
            as: "subcategories",
            foreignKey: "categoryId",
        });

        Mujer.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId",
        });
    };

    return Mujer;
};
