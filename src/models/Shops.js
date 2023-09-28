const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Shops',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
        },
        total:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        articlesQt:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
       status:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        provider:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mercadoPagoId:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {freezeTableName: true, timesStamp: true}
    );
};