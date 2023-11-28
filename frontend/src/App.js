import {BrowserRouter, Routes, Route} from "react-router-dom";
import BarangList from "./components/barang/BarangList";
import AddBarang from "./components/barang/AddBarang";
import EditBarang from "./components/barang/EditBarang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarangList/>}/>
        <Route path="add" element={<AddBarang/>}/>
        <Route path="edit/:id" element={<EditBarang/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;