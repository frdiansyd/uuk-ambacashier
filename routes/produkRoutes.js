const produkController = require("../controllers/produkController");
const express = require("express");
const router = express.Router();
const checkSession = require("../middleware/checkSession");
const uploadImage = require("../middleware/uploadImage");
const checkRole = require("../middleware/checkRole");

// Routes untuk admin dan petugas
router.get("/", checkSession, checkRole(['admin', 'petugas']), produkController.getDaftarProduk);

router.get("/tambah", checkSession, checkRole(['admin', 'petugas']), produkController.getTambahProduk);

router.get("/pelanggan", checkSession, checkRole(['pelanggan', 'admin', 'petugas']), produkController.getDaftarProdukPelanggan);

router.get("/edit/:id", checkSession, checkRole(['admin', 'petugas']), produkController.getEditProduk);

router.post("/tambah", checkSession, checkRole(['admin', 'petugas']), uploadImage.single("foto"), produkController.tambahProduk);

router.post("/edit/:id", checkSession, checkRole(['admin', 'petugas']), uploadImage.single("foto"), produkController.editProduk);

router.get("/delete/:id", checkSession, checkRole(['admin', 'petugas']), produkController.deleteProduk);

module.exports = router;