function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function hitungTotal() {
  var nama = document.getElementById("nama").value.trim();
  var totalInput = document.getElementById("total").value;
  var hasil = document.getElementById("hasil");

  // Validasi input
  if (nama === "" || totalInput === "") {
    hasil.innerHTML = "<span style='color:red'>Nama pembeli dan total belanja harus diisi!</span>";
    return;
  }

  var total = Number(totalInput);

  if (isNaN(total) || total < 0) {
    hasil.innerHTML = "<span style='color:red'>Total belanja harus berupa angka yang valid (tidak boleh negatif)!</span>";
    return;
  }

  // Percabangan diskon
  var diskon;
  if (total >= 500000) {
    diskon = 20;
  } else if (total >= 300000) {
    diskon = 15;
  } else if (total >= 100000) {
    diskon = 10;
  } else {
    diskon = 0;
  }

  var potongan = total * diskon / 100;
  var totalBayar = total - potongan;

  hasil.innerHTML =
    "Nama Pembeli: " + nama + "<br>" +
    "Total Belanja: " + formatRupiah(total) + "<br>" +
    "Diskon: " + diskon + "%<br>" +
    "Potongan: " + formatRupiah(potongan) + "<br>" +
    "Total Bayar: " + formatRupiah(totalBayar);
}