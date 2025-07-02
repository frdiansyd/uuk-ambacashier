// Struktur ideal Penjualan (penjualanModel.js)
const mongoose = require('mongoose');

const penjualanSchema = new mongoose.Schema({
    pelanggan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pelanggan' },
    items: [{
        produk_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Produk' },
        jumlah: Number,
        harga: Number,
        total: Number
    }],
    totalHarga: Number,
    tanggalPenjualan: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Penjualan', penjualanSchema);
