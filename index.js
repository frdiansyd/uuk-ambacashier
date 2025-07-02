const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
const session = require("express-session");
require("dotenv").config();
const port = process.env.PORT;
const laporanRoutes = require('./routes/laporanRoutes');

const authRoutes = require("./routes/authRoutes");
const produkRoutes = require("./routes/produkRoutes");
const penjualanRoutes = require("./routes/penjualanRoutes");
const keranjangRoutes = require("./routes/keranjangRoutes");
const pembelianRoutes = require("./routes/pembelianRoutes");
const generateLaporanRoutes = require('./routes/generateLaporanRoutes');

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ exten: true }));

app.use(
    session({
        secret: "secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60
        }
    })
);

app.get("/", (req, res) => {
    res.redirect("/auth/login");
});
app.use("/auth", authRoutes);
app.use("/produk", produkRoutes);
app.use("/penjualan", penjualanRoutes);
app.use("/keranjang", keranjangRoutes);
app.use("/pembelianStruk", pembelianRoutes);
app.use('/laporan', generateLaporanRoutes);
app.use('/assets', express.static('assets'));
app.use('/laporan', laporanRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});