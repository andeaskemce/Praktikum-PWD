const produk = [
    { id: 1, nama: "Buku Tulis", harga: 8000, stok: 10 },
    { id: 2, nama: "Pulpen", harga: 5000, stok: 8 },
    { id: 3, nama: "Pensil", harga: 3000, stok: 12 },
    { id: 4, nama: "Penghapus", harga: 2500, stok: 7 },
    new Object({ id: 5, nama: "Penggaris", harga: 6000, stok: 5 }),
    { id: 6, nama: "Tipe X", harga: 15000, stok: 4 }
];

const keranjang = [];

const daftarProduk = document.getElementById("product-list");
const daftarKeranjang = document.getElementById("cart-list");

const totalItems = document.getElementById("total-items");
const totalHarga = document.getElementById("total-price");

const tombolCheckout = document.querySelector("#checkout-button");

function rupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

function tampilkanProduk() {

    daftarProduk.innerHTML = "";

    for (let i = 0; i < produk.length; i++) {

        const item = produk[i];

        const kartu = document.createElement("div");
        kartu.className = "product-card";

        const nama = document.createElement("h3");
        nama.appendChild(document.createTextNode(item.nama));

        const harga = document.createElement("p");
        harga.className = "product-price";
        harga.appendChild(document.createTextNode(rupiah(item.harga)));

        const stok = document.createElement("span");
        stok.className = "stock-label";
        stok.appendChild(document.createTextNode("Stok: " + item.stok));

        const tombol = document.createElement("button");
        tombol.className = "add-button";
        tombol.appendChild(
            document.createTextNode("Tambah ke Keranjang")
        );

        if (item.stok === 0) {
            stok.style.backgroundColor = "#fde8e7";
            stok.style.color = "red";
        } else if (item.stok <= 3) {
            stok.style.backgroundColor = "#fff1d6";
            stok.style.color = "#8a5a00";
        }

        tombol.addEventListener("click", function() {
            tambahKeranjang(item);
        });

        kartu.appendChild(nama);
        kartu.appendChild(harga);
        kartu.appendChild(stok);
        kartu.appendChild(tombol);

        daftarProduk.appendChild(kartu);
    }

    const semuaTombol = document.getElementsByClassName("add-button");

    for (let i = 0; i < semuaTombol.length; i++) {
        semuaTombol[i].title = "Tambahkan produk";
    }
}

function tambahKeranjang(item) {

    if (item.stok <= 0) {
        alert("Maaf, stok produk sudah habis!");
        return;
    }

    keranjang.push(item);

    item.stok--;

    tampilkanProduk();
    tampilkanKeranjang();
}

function hitungTotal() {

    let total = 0;

    for (let i = 0; i < keranjang.length; i++) {
        total += keranjang[i].harga;
    }

    return total;
}

function tampilkanKeranjang() {

    daftarKeranjang.innerHTML = "";

    if (keranjang.length === 0) {

        const pesan = document.createElement("li");
        pesan.className = "kosong";
        pesan.appendChild(
            document.createTextNode("Keranjang masih kosong.")
        );

        daftarKeranjang.appendChild(pesan);

    } else {

        for (let i = 0; i < keranjang.length; i++) {

            const item = keranjang[i];

            const baris = document.createElement("li");
            baris.className = "cart-item";

            const informasi = document.createElement("div");

            const nama = document.createElement("strong");
            nama.appendChild(document.createTextNode(item.nama));

            const harga = document.createElement("small");
            harga.appendChild(
                document.createTextNode(rupiah(item.harga))
            );

            const tombolHapus = document.createElement("button");
            tombolHapus.appendChild(
                document.createTextNode("Hapus")
            );

            tombolHapus.addEventListener("click", function() {

                const yakin = confirm(
                    "Yakin ingin menghapus " + item.nama + "?"
                );

                if (yakin) {

                    daftarKeranjang.removeChild(baris);

                    keranjang.splice(i, 1);
                    item.stok++;

                    tampilkanProduk();
                    tampilkanKeranjang();
                }
            });

            informasi.appendChild(nama);
            informasi.appendChild(harga);

            baris.appendChild(informasi);
            baris.appendChild(tombolHapus);

            daftarKeranjang.appendChild(baris);
        }
    }

    totalItems.innerHTML = keranjang.length;
    totalHarga.innerHTML = rupiah(hitungTotal());
}

function batalkanItem() {

    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    const yakin = confirm("Batalkan item terakhir?");

    if (yakin) {

        const item = keranjang.pop();

        item.stok++;

        tampilkanProduk();
        tampilkanKeranjang();
    }
}

function kosongkanKeranjang() {

    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    const yakin = confirm("Yakin ingin mengosongkan keranjang?");

    if (yakin) {

        for (let i = 0; i < keranjang.length; i++) {
            keranjang[i].stok++;
        }

        keranjang.length = 0;

        tampilkanProduk();
        tampilkanKeranjang();
    }
}

function checkout() {

    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    const namaPembeli = prompt("Masukkan nama pembeli:");

    if (namaPembeli === null || namaPembeli.trim() === "") {
        alert("Checkout dibatalkan.");
        return;
    }

    const daftarNama = [];

    for (let i = 0; i < keranjang.length; i++) {
        daftarNama.push(keranjang[i].nama);
    }

    const barang = daftarNama.join(", ");

    const total = hitungTotal();

    const ringkasan = document.createElement("div");

    ringkasan.innerHTML =
        "<h3>Ringkasan Pesanan</h3>" +
        "<p>Nama pembeli: " +
        namaPembeli.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
        "</p>" +
        "<p>Daftar barang: " + barang + "</p>" +
        "<p>Total harga: " + rupiah(total) + "</p>";

    document.querySelector(".bagian:last-child").appendChild(ringkasan);

    alert(
        "Terima kasih " + namaPembeli +
        "! Total belanja kamu " + rupiah(total)
    );

    keranjang.length = 0;

    tampilkanKeranjang();
}

document.getElementById("undo-button").addEventListener(
    "click", batalkanItem
);

document.getElementById("clear-button").addEventListener(
    "click", kosongkanKeranjang
);

tombolCheckout.addEventListener("click", checkout);

tampilkanProduk();
tampilkanKeranjang();