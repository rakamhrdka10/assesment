import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBarang = () => {
  const [kode_barang, setKodeBarang] = useState("");
  const [nama_barang, setNamaBarang] = useState("");
  const [satuan, setSatuan] = useState("");
  const [harga_satuan, setHargaSatuan] = useState("");
  const [stok, setStok] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBarangById();
  }, []);

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/barang/${id}`, {
        kode_barang,
        nama_barang,
        satuan,
        harga_satuan,
        stok
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getBarangById = async () => {
    const response = await axios.get(`http://localhost:5000/barang/${id}`);
    setKodeBarang(response.data.kode_barang);
    setNamaBarang(response.data.nama_barang);
    setHargaSatuan(response.data.harga_satuan);
    setSatuan(response.data.satuan);
    setStok(response.data.stok);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBarang}>
          <div className="field">
            <label className="label">Kode Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kode_barang}
                onChange={(e) => setKodeBarang(e.target.value)}
                placeholder="kode_barang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_barang}
                onChange={(e) => setNamaBarang(e.target.value)}
                placeholder="nama_barang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">satuan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={satuan}
                onChange={(e) => setSatuan(e.target.value)}
                placeholder="satuan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">stok</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={stok}
                onChange={(e) => setStok(e.target.value)}
                placeholder="stok"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">harga satuan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga_satuan}
                onChange={(e) => setHargaSatuan(e.target.value)}
                placeholder="harga_satuan"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBarang;