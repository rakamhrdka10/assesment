import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Barang from "./BarangModel.js";
import Nota from "./NotaModel.js";

const {DataTypes} = Sequelize;

const BarangNota  = db.define('kode_nota',{
    kode_nota: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TglNota: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    JamNota: {
        type: DataTypes.TIME,
        allowNull: false,
    },
},{
    freezeTableName:true
});

BarangNota.hasMany(Nota);
Nota.belongsTo(BarangNota, { foreignKey: 'kode_nota' });
BarangNota.hasOne(Barang);
Barang.belongsTo(BarangNota, { foreignKey: 'KodeKasir' });

export default BarangNota;

// (async()=>{
//     await db.sync();
// })();