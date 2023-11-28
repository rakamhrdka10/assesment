import Kasir from "../models/KasirModel.js";

export const getKasir = async(req, res) =>{
    try {
        const response = await Kasir.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKasirById = async(req, res) =>{
    try {
        const response = await Kasir.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKasir = async(req, res) =>{
    try {
        await Kasir.create(req.body);
        res.status(201).json({msg: "Kasir behasil ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKasir = async(req, res) =>{
    try {
        await Kasir.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kasir Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKasir = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kasir Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}