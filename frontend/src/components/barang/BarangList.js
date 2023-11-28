import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BarangList = () => {
  const [barang, setBarang] = useState([]);

  useEffect(() => {
    getBarang();
  }, []);

  const getBarang = async () => {
    const response = await axios.get("http://localhost:5000/barang");
    setBarang(response.data);
  };

  const deleteBarang = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/barang/${id}`);
      getBarang();
    } catch (error) {
      console.log(error);
    }
  };

  const beliBarang = async (id, stok) => {
    const jumlahBeli = prompt(`Masukkan jumlah barang yang akan dibeli (Stok: ${stok}):`);

    if (jumlahBeli !== null) {
        try {
            await axios.post("http://localhost:5000/barang/beli", {
                id: id,
                jumlahBeli: parseInt(jumlahBeli),
            });
            getBarang();
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
              <th>Kode Barang</th>
              <th>Nama Barang</th>
              <th>Satuan</th>
              <th>Harga satuan</th>
              <th>stok</th>
            </tr>
          </thead>
          <tbody>
            {barang.map((barang, index) => (
              <tr key={barang.id}>
                <td>{index + 1}</td>
                <td>{barang.kode_barang}</td>
                <td>{barang.nama_barang}</td>
                <td>{barang.satuan}</td>
                <td>{barang.harga_satuan}</td>
                <td>{barang.stok}</td>
                <td>
                  <Link
                    to={`edit/${barang.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBarang(barang.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                  <Link
                    to={`beli/${barang.id}`}
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

export default BarangList;