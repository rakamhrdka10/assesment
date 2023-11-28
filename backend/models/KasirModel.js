import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kasir  = db.define('kasir',{
    kode_kasir: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama_kasir: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NoHp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    freezeTableName:true
});

export default Kasir;

// (async()=>{
//     await db.sync();
// })();