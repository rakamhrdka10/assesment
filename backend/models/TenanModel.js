import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Tenan  = db.define('tenan',{
    kode_tenan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama_tenan: {
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

export default Tenan;

// (async()=>{
//     await db.sync();
// })();