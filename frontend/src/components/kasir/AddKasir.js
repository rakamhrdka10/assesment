import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBarang = () => {
  const [kode_kasir, setKodeKasir] = useState("");
  const [nama_kasir, setNamaKasir] = useState("");
  const [NoHp, setNoHp] = useState("");
  const navigate = useNavigate();

  const saveKasir = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kasir", {
        kode_kasir,
        nama_kasir,
        NoHp,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveKasir}>
          <div className="field">
            <label className="label">Kode Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kode_kasir}
                onChange={(e) => setKodeKasir(e.target.value)}
                placeholder="kode_kasir"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama kasir</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_kasir}
                onChange={(e) => setNamaKasir(e.target.value)}
                placeholder="nama_kasir"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NoHp</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NoHp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder="NoHp"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBarang;