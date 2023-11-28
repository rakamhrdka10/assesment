import express from "express";
import cors from "cors";
import BarangRoute from "./routes/BarangRoute.js"
import BarangNotaRoute from "./routes/BarangNotaRoute.js"
import KasirRoute from "./routes/KasirRoute.js"
import NotaRoute from "./routes/NotaRoute.js"
import TenanRoute from "./routes/TenanRoute.js"
import db from "./config/Database.js";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(BarangRoute);
app.use(BarangNotaRoute);
app.use(KasirRoute);
app.use(NotaRoute);

// (async () => {
//   try {
//       await db.sync();
//       console.log('Database synced successfully');
//   } catch (error) {
//       console.error('Error syncing database:', error);
//   }
// })();

app.listen(5000, () => {
    console.log("server up and running...");
  });