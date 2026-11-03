let tombol = document.getElementById("tombolAtas");

window.onscroll = function() {

    if (window.scrollY > 500) {
        tombol.classList.add("muncul");
    } else {
        tombol.classList.remove("muncul");
    }

};

function kembaliKeAtas() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}