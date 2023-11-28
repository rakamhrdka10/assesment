import {Sequelize} from "sequelize";

const db = new Sequelize('pujasera_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;