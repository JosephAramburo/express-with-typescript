const sequelize = require('sequelize');
const db = require('../configs/database.config');


module.exports = db.define('usuarios',{
    idUsuario : {
        type            : sequelize.INTEGER(11),
        autoIncrement   : true,
        primaryKey      : true
    },
    nombre                  : sequelize.STRING,
    tipoUsuario             : sequelize.STRING,
    password                : sequelize.STRING,
    status                  : sequelize.STRING,
    genero                  : sequelize.STRING,
    edad                    : sequelize.INTEGER,
    estudios                : sequelize.STRING,
    domicilio               : sequelize.STRING,
    correo                  : sequelize.STRING,
    telefono                : sequelize.STRING,
    disc                    : sequelize.BOOLEAN,
    comunicacion            : sequelize.BOOLEAN,
    manejoConflictos        : sequelize.BOOLEAN,
    valoresEIntereses       : sequelize.BOOLEAN,
    coeficienteIntelectual  : sequelize.BOOLEAN,
});