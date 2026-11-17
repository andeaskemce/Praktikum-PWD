const hasilGenap = document.getElementById("hasilGenap");

for (let angka = 1; angka <= 10; angka++) {
    if (angka % 2 === 0) {
        const item = document.createElement("span");
        item.textContent = angka;
        hasilGenap.appendChild(item);
    }
}

const tabelPerkalian = document.getElementById("tabelPerkalian");

let isiTabel = "<thead><tr><th>bilangan</th>";

for (let kolom = 1; kolom <= 10; kolom++) {
    isiTabel += `<th>${kolom}</th>`;
}

isiTabel += "</tr></thead><tbody>";

for (let baris = 1; baris <= 10; baris++) {
    isiTabel += `<tr><th>${baris}</th>`;

    for (let kolom = 1; kolom <= 10; kolom++) {
        isiTabel += `<td>${baris * kolom}</td>`;
    }

    isiTabel += "</tr>";
}

isiTabel += "</tbody>";
tabelPerkalian.innerHTML = isiTabel;