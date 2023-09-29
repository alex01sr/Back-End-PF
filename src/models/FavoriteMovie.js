const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('FavoriteMovie',{
        id:{
            type: DataTypes.UUID,
            autoincrement: true,
            allowNull: false,
            primaryKey: true,
        },
        userId:{
            type: DataTypes.UUID,
            allowNull: false,  
        },
        Adventure:{
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        movieId: {
            type: DataTypes.UUID,
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