// const sequelize = require('sequelize');
import { DataTypes, Sequelize, Model, Options  } from 'sequelize';
const sequelize = require('../configs/database.config');
const db = require('../configs/database.config');

class UserModel extends Model {}

UserModel.init(
    {
        idUsuario : {
            type            : DataTypes.INTEGER,
            autoIncrement   : true,
            primaryKey      : true
        },
        nombre                  : DataTypes.STRING,
        tipoUsuario             : DataTypes.STRING,
        password                : DataTypes.STRING,
        status                  : DataTypes.STRING,
        genero                  : DataTypes.STRING,
        edad                    : DataTypes.INTEGER,
        estudios                : DataTypes.STRING,
        domicilio               : DataTypes.STRING,
        correo                  : DataTypes.STRING,
        telefono                : DataTypes.STRING,
        disc                    : DataTypes.BOOLEAN,
        comunicacion            : DataTypes.BOOLEAN,
        manejoConflictos        : DataTypes.BOOLEAN,
        valoresEIntereses       : DataTypes.BOOLEAN,
        coeficienteIntelectual  : DataTypes.BOOLEAN,
    },
    {
        sequelize : sequelize,
        modelName : 'usuarios'
    }
);


module.exports = UserModel;


// module.exports = db.define('usuarios',{
//     idUsuario : {
//         type            : sequelize.INTEGER(11),
//         autoIncrement   : true,
//         primaryKey      : true
//     },
//     nombre                  : sequelize.STRING,
//     tipoUsuario             : sequelize.STRING,
//     password                : sequelize.STRING,
//     status                  : sequelize.STRING,
//     genero                  : sequelize.STRING,
//     edad                    : sequelize.INTEGER,
//     estudios                : sequelize.STRING,
//     domicilio               : sequelize.STRING,
//     correo                  : sequelize.STRING,
//     telefono                : sequelize.STRING,
//     disc                    : sequelize.BOOLEAN,
//     comunicacion            : sequelize.BOOLEAN,
//     manejoConflictos        : sequelize.BOOLEAN,
//     valoresEIntereses       : sequelize.BOOLEAN,
//     coeficienteIntelectual  : sequelize.BOOLEAN,
// });