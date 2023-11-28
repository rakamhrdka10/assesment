import express from "express";
import {
    getTenan, 
    getTenanById,
    createTenan,
    updateTenan,
    deleteTenan
} from "../controllers/TenanController.js";

const router = express.Router();

router.get('/tenan', getTenan);
router.get('/tenan/:id', getTenanById);
router.post('/tenan', createTenan);
router.patch('/tenan/:id', updateTenan);
router.delete('/tenan/:id', deleteTenan);

export default router;