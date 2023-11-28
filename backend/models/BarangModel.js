import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Barang  = db.define('barang',{
    kode_barang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    satuan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga_satuan : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stok : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    freezeTableName:true
});


export default Barang;

