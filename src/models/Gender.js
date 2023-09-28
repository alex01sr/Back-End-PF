const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
    sequelize.define('Gender',{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // GenderId:{
        //     type: DataTypes.INTEGER,
        //     autoincrement: true,
        //     allowNull: false,
        //     primaryKey: true,
        // },
        // Accion:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // Adventure:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // Animation:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // Biografia:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // comedy:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // documentary: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // drama: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // family: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // fantasy: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // FilmNoir: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // history: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // terror: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // musical: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // mistery: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // romance: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // scienceFiction: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // shorts: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // sports: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // suspense: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // warlike: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // west: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
    },
    {freezeTableName: true, timesStamp: true}
    );
};