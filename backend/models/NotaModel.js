import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Kasir from "./KasirModel.js";
import Tenan from "./TenanModel.js";

const {DataTypes} = Sequelize;

const Nota  = db.define('nota',{

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
    JumlahBelanja: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Diskon: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    freezeTableName:true
});

Nota.hasOne(Tenan);
Nota.belongsTo(Tenan, { foreignKey: 'KodeTenan' });
Nota.hasOne(Kasir);
Nota.belongsTo(Kasir, { foreignKey: 'KodeKasir' });

export default Nota;

