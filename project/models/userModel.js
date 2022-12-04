module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            notNull: true,    
        },
        phone: {
            type: DataTypes.INTEGER,
            isNumeric: true,
            notNull: true
        },
        email: {
            type: DataTypes.TEXT,
            isEmail: true,
            notNull: true   
        },
        gender: {
            type: DataTypes.STRING,
            isIn: [['Male', 'female', 'other']],
            notNull: true,    
            msg: "Value Must be Male or female"
        },
        password: {
            require: true,
            type: DataTypes.STRING,
            trim: true
        },
        address: {
            type: DataTypes.TEXT,
        }
    }
    )
    return User;
}