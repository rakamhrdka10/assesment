import express from "express";
import {
    getBarangNota, 
    getBarangNotaById,
    createBarangNota,
    updateBarangNota,
    deleteBarangNota
} from "../controllers/BarangNotaContoller.js";

const router = express.Router();

router.get('/barangNota', getBarangNota);
router.get('/barangNota/:id', getBarangNotaById);
router.post('/barangNota', createBarangNota);
router.patch('/barangNota/:id', updateBarangNota);
router.delete('/barangNota/:id', deleteBarangNota);

export default router;