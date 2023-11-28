import Nota from "../models/NotaModel.js";

export const getNota = async(req, res) =>{
    try {
        const response = await Nota.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getNotaById = async(req, res) =>{
    try {
        const response = await Nota.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createNota = async(req, res) =>{
    try {
        await Nota.create(req.body);
        res.status(201).json({msg: "Nota behasil ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNota = async(req, res) =>{
    try {
        await Nota.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Nota Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNota = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Nota Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}