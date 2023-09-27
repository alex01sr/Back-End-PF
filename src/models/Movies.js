const { DataTypes } = require('sequelize/types');

module.exports = (Sequelize) => {
    sequelize.define('Movies',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        torrent:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {freezeTableName: true, timesStamp: true}
    );
};