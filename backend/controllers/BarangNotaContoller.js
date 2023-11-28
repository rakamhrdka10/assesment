import BarangNota from "../models/BarangNotaModel.js";

export const getBarangNota = async(req, res) =>{
    try {
        const response = await BarangNota.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBarangNotaById = async(req, res) =>{
    try {
        const response = await BarangNota.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarangNota = async(req, res) =>{
    try {
        await BarangNota.create(req.body);
        res.status(201).json({msg: "Barang Nota behasil ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBarangNota = async(req, res) =>{
    try {
        await BarangNota.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Barang Nota Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarangNota = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Barang Nota Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}