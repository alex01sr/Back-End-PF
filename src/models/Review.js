const { DataTypes } = require('sequelize/types');

module.exports = (Sequelize) => {
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