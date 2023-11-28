import express from "express";
import {
    getKasir, 
    getKasirById,
    createKasir,
    updateKasir,
    deleteKasir
} from "../controllers/KasirController.js";

const router = express.Router();

router.get('/kasir', getKasir);
router.get('/kasir/:id', getKasirById);
router.post('/kasir', createKasir);
router.patch('/kasir/:id', updateKasir);
router.delete('/kasir/:id', deleteKasir);

export default router;