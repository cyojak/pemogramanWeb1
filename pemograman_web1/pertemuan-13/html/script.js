// let nama = "Busdi" //string
// let umur = 25; //number
// let tinggi badan = 167.3 //float
// let berat badan; //undifine
// let pacar = nul //nul

// beratBadan = 55;

// // if else
// // if (pacar == null) {
// //    pacar ="jomblo"
// // } else {
// //    pacar ="sudah punya pacar"
// // }

// // switch case
// switch (pacar){
//     case 1:
//         pacar = "sudah punya pacar";
//         break;
//     case 2:
//         pacar = "sudah punya pacar pacar";
//         break;
//     case 3:
//         pacar = "sudah banyak pacar";
//         break;
//     default:
//         pacar = "jomblo"
//         break;    

// }


// //alert('Hallo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya sekitar ${tinggi badan}cm dengan berat badan saya saat ini ${berat badan} dan untuk status hubungan saya saat ini ${pacar}');

// console.log('Hallo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya sekitar ${tinggi badan}cm dengan berat badan saya saat ini ${berat badan} dan untuk status hubungan saya saat ini ${pacar}');

// let saldoAwal = 12000000;
// let saldoTambahan = 2000000;
// let hutang = 8000000;
// let saldoAkhir = saldoAwal + saldoTambahan - hutang;

// console.log('saldo awal bulan saya sebesar ${saldoAwal} dengan tambahan saldo sebesar ${saldoTambahan}, akan tetapi saya mempunyai hutang paylatter sebesar ${hutang} jadi sisa saldo saya saat ini sebesar ${saldoAkhir}');

// // ARRAY
// namaMhs = ["Budi","joko","ahmad"];
// namaMhs.push("Ghina","devi");
// console.log(namaMhs);

// //FOR
// for (i=0; i<=20; i++){
//     console.log("hey bro!!");    
// }

// for (let i = 0; i < namaMhs, length; i++){
//     console.log(namaMhs[i]);
// }
     
function  hitungNilai(){


    // ambil data input
    let nama = document.getElementById("nama").value;
    let nilai = Number(document.getElementById ("nilai").value);
    
    let hasil ="";
    let status = "";   // lulus | gagal | peringatan
    let ikon = "";

    //validasi input
    if (nama==="" || document.getElementById ("nilai").value === ""){
        hasil = "Nama dan nilai harus di isi!!";
        status = "peringatan";
        ikon = "⚠️";
    }

    //cek rentang Nilai
    else if (nilai < 0 || nilai > 100){
        hasil = "Nilai harus di isi 0-100";
        status = "peringatan";
        ikon = "⚠️";
    }

    //check kelulusan
    else if (nilai>= 75){
        hasil = nama + " dinyatakan Lulus";
        status = "lulus";
        ikon = "🎉";
    } else {
        hasil = nama + " dinyatakan Tidak Lulus";
        status = "gagal";
        ikon = "😢";
    }

    //menampilkan hasil ke halaman web
    let kotak = document.getElementById("hasil");
    kotak.className = "";
    void kotak.offsetWidth;   // reset agar animasi bisa diulang
    kotak.className = status;
    kotak.innerHTML = '<span class="ikon">' + ikon + '</span><span>' + hasil + '</span>';

    // efek confetti jika lulus
    if (status === "lulus") {
        confetti();
    }
}

// efek confetti
function confetti() {
    const warna = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];
    for (let i = 0; i < 60; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = warna[Math.floor(Math.random() * warna.length)];
        c.style.animationDuration = 2 + Math.random() * 2 + "s";
        c.style.animationDelay = Math.random() * 0.5 + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 4500);
    }
}