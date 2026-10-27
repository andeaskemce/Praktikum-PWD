console.log("=== KALKULATOR BANGUN DATAR DAN RUANG ===");

// A. SEGITIGA SAMA SISI
function segitiga(sisi) {
    let luas = (Math.sqrt(3) / 4) * sisi * sisi;
    let keliling = 3 * sisi;

    console.log("\nA. SEGITIGA");
    console.log("Panjang sisi:", sisi);
    console.log("Luas:", luas.toFixed(2));
    console.log("Keliling:", keliling);
}

// B. PERSEGI PANJANG
function persegiPanjang(p, l) {
    let luas = p * l;
    let keliling = 2 * (p + l);

    console.log("\nB. PERSEGI PANJANG");
    console.log("Panjang:", p);
    console.log("Lebar:", l);
    console.log("Luas:", luas);
    console.log("Keliling:", keliling);
}

// C. PRISMA SEGITIGA
function prisma(a, b, c, t) {
    let setengahKeliling = (a + b + c) / 2;
    let luasAlas = Math.sqrt(
        setengahKeliling *
        (setengahKeliling - a) *
        (setengahKeliling - b) *
        (setengahKeliling - c)
    );

    let luas = 2 * luasAlas + (a + b + c) * t;
    let volume = luasAlas * t;
    let rusuk = 2 * (a + b + c) + 3 * t;

    console.log("\nC. PRISMA SEGITIGA");
    console.log("Luas permukaan:", luas.toFixed(2));
    console.log("Total panjang rusuk:", rusuk);
    console.log("Volume:", volume.toFixed(2));
}

// D. LIMAS SEGIEMPAT
function limas(s, t) {
    let luasAlas = s * s;
    let tinggiMiring = Math.sqrt(t * t + (s / 2) ** 2);
    let luas = luasAlas + 2 * s * tinggiMiring;
    let volume = luasAlas * t / 3;

    let rusukTegak = Math.sqrt(t * t + s * s / 2);
    let totalRusuk = 4 * s + 4 * rusukTegak;

    console.log("\nD. LIMAS SEGIEMPAT");
    console.log("Luas permukaan:", luas.toFixed(2));
    console.log("Total panjang rusuk:", totalRusuk.toFixed(2));
    console.log("Volume:", volume.toFixed(2));
}

// E. SEGITIGA SEMBARANG
function segitigaSembarang(a, b, c) {
    let keliling = a + b + c;
    let s = keliling / 2;
    let luas = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log("\nE. SEGITIGA SEMBARANG");
    console.log("Sisi A:", a);
    console.log("Sisi B:", b);
    console.log("Sisi C:", c);
    console.log("Luas:", luas.toFixed(2));
    console.log("Keliling:", keliling);
}

// MENJALANKAN PERHITUNGAN
segitiga(6);
persegiPanjang(10, 5);
prisma(3, 4, 5, 10);
limas(6, 4);
segitigaSembarang(7, 8, 9);