module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define(
        "User",
        {
            email: {
                type: dataTypes.STRING,
            },
            password: {
                type: dataTypes.STRING,
            },
            rol: {
                type: dataTypes.INTEGER,
            },
        },
        {
            tableName: "users",
            timestamps: false,
        }
    );

    return User;
};
