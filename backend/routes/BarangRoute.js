import express from "express";
import {
    getBarang, 
    getBarangById,
    createBarang,
    updateBarang,
    deleteBarang,
    beliBarang
} from "../controllers/BarangController.js";

const router = express.Router();

router.get('/barang', getBarang);
router.get('/barang/:id', getBarangById);
router.post('/barang', createBarang);
router.patch('/barang/:id', updateBarang);
router.delete('/barang/:id', deleteBarang);
router.patch('/barang/:id', beliBarang);


export default router;