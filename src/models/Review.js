const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {freezeTableName: true, timesStamp: true}
    );
};