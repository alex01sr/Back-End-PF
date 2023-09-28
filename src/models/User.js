const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        provider:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {freezeTableName: true, timesStamp: true}
    );
};