// Function untuk memproses transaksi (contoh sederhana)
function processBooking() {
    var namaPemesan = document.getElementById('nama').value;
    var tanggalCheckIn = document.getElementById('checkin').value;
    var tanggalCheckOut = document.getElementById('checkout').value;
    var jumlahKamar = parseInt(document.getElementById('jumlahKamar').value);
    var hargaKamar = parseInt(document.getElementById('hargaKamar').value);

    // Validasi form (contoh sederhana)
    if (namaPemesan === '' || tanggalCheckIn === '' || tanggalCheckOut === '' || isNaN(jumlahKamar) || isNaN(hargaKamar)) {
        alert('Harap lengkapi formulir dengan benar!');
        return;
    }

    // Hitung total biaya
    var totalBiaya = jumlahKamar * hargaKamar;

    // Contoh penggunaan JavaScript untuk menampilkan konfirmasi
    var konfirmasi = 'Terima kasih, ' + namaPemesan + '! Total biaya yang harus Anda bayar adalah Rp ' + totalBiaya.toLocaleString() + '.';
    alert(konfirmasi);
}
