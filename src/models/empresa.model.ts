import { DataTypes } from 'sequelize';
const db = require('../configs/database.config');

module.exports = db.define('empresa',{
    id : {
        type            : DataTypes.INTEGER,
        autoIncrement   : true,
        primaryKey      : true
    },
    razonSocial : {
        type        : DataTypes.STRING(200),
        allowNull   : false
    },
    nombreComercial : DataTypes.STRING(200),
    rfc             : DataTypes.STRING(13),
    cliente         : DataTypes.INTEGER,
    calle           : DataTypes.STRING(45),
    numeroExterior  : DataTypes.STRING(45),
    numeroInterior  : DataTypes.STRING(45),
    colonia         : DataTypes.STRING(100),
    localidad       : DataTypes.STRING(100),
    estado          : DataTypes.INTEGER,
    codigoPostal    : DataTypes.STRING(45),
    telefono        : DataTypes.STRING(45),
    email           : DataTypes.STRING(45),
    estatus         : DataTypes.INTEGER,
    userAdd         : DataTypes.INTEGER,
    userEdit        : DataTypes.INTEGER
},{
    timestamps: false,
    tableName : "empresa"
});