import Barang from "../models/BarangModel.js";

export const getBarang = async(req, res) =>{
    try {
        const response = await Barang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBarangById = async(req, res) =>{
    try {
        const response = await Barang.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarang = async(req, res) =>{
    try {
        await Barang.create(req.body);
        res.status(201).json({msg: "Barang behasil ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBarang = async(req, res) =>{
    try {
        await Barang.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Barang Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarang = async(req, res) =>{
    try {
        await Barang.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Barang Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

// BarangController.js

export const beliBarang = async (req, res) => {
    try {
        const { id, jumlahBeli } = req.body;

        // Validasi jumlah pembelian harus lebih dari 0
        if (jumlahBeli <= 0) {
            return res.status(400).json({ msg: 'Jumlah pembelian harus lebih dari 0' });
        }

        const barang = await Barang.findByPk(id);

        // Validasi stok cukup untuk pembelian
        if (!barang || barang.stok < jumlahBeli) {
            return res.status(400).json({ msg: 'Stok tidak mencukupi untuk pembelian ini' });
        }

        // Kurangi stok barang
        await Barang.update(
            { stok: barang.stok - jumlahBeli },
            { where: { id: id } }
        );

        res.status(200).json({ msg: 'Barang berhasil dibeli', stokSekarang: barang.stok - jumlahBeli });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: 'Terjadi kesalahan server' });
    }
};
