const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('FavoriteMovie',{
        id:{
            type: DataTypes.INTEGER,
            autoincrement: true,
            allowNull: false,
            primaryKey: true,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,  
        },
        Adventure:{
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        movieId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Movie',
                key: 'id',
            },
        },
    },
    {freezeTableName: true, timesStamp: true}
    );
};