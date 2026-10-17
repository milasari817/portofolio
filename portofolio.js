// Menampilkan tahun secara otomatis
const tahun = document.getElementById("tahun");

if (tahun) {
    tahun.textContent = new Date().getFullYear();
}

// Animasi elemen ketika masuk ke layar
const elemenAnimasi = document.querySelectorAll(".animasi-muncul");

if ("IntersectionObserver" in window) {
    const pengamat = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("terlihat");
                pengamat.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elemenAnimasi.forEach((elemen) => {
        pengamat.observe(elemen);
    });
} else {
    elemenAnimasi.forEach((elemen) => {
        elemen.classList.add("terlihat");
    });
}