import { Sequelize } from 'sequelize';

module.exports =  new Sequelize(process.env.DATABASE_DB,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD,{
    host              : process.env.DATABASE_HOST,
    dialect           : 'mysql',
    pool: {
      max     : 5,
      min     : 0,
      acquire : 30000,
      idle    : 10000
    }
});