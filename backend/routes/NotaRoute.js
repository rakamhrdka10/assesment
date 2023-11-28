import express from "express";
import {
    getNota, 
    getNotaById,
    createNota,
    updateNota,
    deleteNota
} from "../controllers/NotaController.js";

const router = express.Router();

router.get('/nota', getNota);
router.get('/nota/:id', getNotaById);
router.post('/nota', createNota);
router.patch('/nota/:id', updateNota);
router.delete('/nota/:id', deleteNota);

export default router;