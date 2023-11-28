import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const KasirList = () => {
  const [Kasir, setKasir] = useState([]);

  useEffect(() => {
    getKasir();
  }, []);

  const getKasir = async () => {
    const response = await axios.get("http://localhost:5000/kasir");
    setKasir(response.data);
  };

  const deleteKasir = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kasir/${id}`);
      getKasir();
    } catch (error) {
      console.log(error);
    }
  };

  const beliKasir = async (id, stok) => {
    const jumlahBeli = prompt(`Masukkan jumlah barang yang akan dibeli (Stok: ${stok}):`);

    if (jumlahBeli !== null) {
        try {
            await axios.post("http://localhost:5000/barang/beli", {
                id: id,
                jumlahBeli: parseInt(jumlahBeli),
            });
            getKasir();
        } catch (error) {
            console.log(error);
        }
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Kode kasir</th>
              <th>Nama kasir</th>
              <th>NoHp</th>
            </tr>
          </thead>
          <tbody>
            {Kasir.map((Kasir, index) => (
              <tr key={Kasir.id}>
                <td>{index + 1}</td>
                <td>{Kasir.kode_Kasir}</td>
                <td>{Kasir.nama_Kasir}</td>
                <td>{Kasir.satuan}</td>
                <td>
                  <Link
                    to={`edit/${Kasir.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteKasir(Kasir.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                  <Link
                    to={`beli/${Kasir.id}`}
                    className="button is-small is-info mr-2"
                >
                    beli
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KasirList;