/* =========================
   DATA PROJECT
========================= */

const projects = [

    {
        title: "Penyusunan Laporan & Dokumen",
        desc: "Pembuatan format dokumen formal dan penyusunan laporan otomatis menggunakan fitur-fitur lanjutan Microsoft Word."
    },

    {
        title: "Pengolahan Data Excel",
        desc: "Penggunaan rumus/fungsi standar dan pengolahan tabel data untuk kebutuhan analisis sederhana di Microsoft Excel."
    },

    {
        title: "Desain Presentasi",
        desc: "Perancangan slide presentasi materi perkuliahan yang rapi dan komunikatif menggunakan Microsoft PowerPoint."
    },

    {
        title: "Database Dasar",
        desc: "Latihan pembuatan struktur tabel data dasar dan tampilan form input menggunakan Microsoft Access."
    }

];


/* =========================
   MENGAMBIL ELEMENT HTML
========================= */

const projectList =
    document.getElementById("projectList");


/* =========================
   MENAMPILKAN PROJECT
========================= */

projects.forEach(function(project) {

    // Membuat element div

    const card =
        document.createElement("div");


    // Menambahkan class

    card.className =
        "project";


    // Menambahkan isi HTML

    card.innerHTML =

        "<h3>" +
        project.title +
        "</h3>" +

        "<p>" +
        project.desc +
        "</p>";


    // Menampilkan card ke halaman

    projectList.appendChild(card);

});


/* =========================
   TOGGLE SECTION
========================= */

function toggle(element) {

    // Mengambil elemen setelah h2

    const content =
        element.nextElementSibling;


    // Mengecek kondisi tampilan

    if (
        content.style.display === "none"
    ) {

        // Jika sebelumnya hidden

        content.style.display =
            "block";

    }

    else {

        // Jika sebelumnya tampil

        content.style.display =
            "none";

    }

}


/* =========================
   THEME SWITCHER
========================= */

function setTheme(mode) {


    // Jika memilih DARK

    if (mode === "dark") {

        document.body.classList.add(
            "dark"
        );

    }

    else {

        // Menghapus mode dark

        document.body.classList.remove(
            "dark"
        );


        // Jika memilih GREEN

        if (mode === "green") {

            document.documentElement
                .style
                .setProperty(

                    "--primary",

                    "#16a34a"

                );

        }


        // Jika memilih BLUE

        else {

            document.documentElement
                .style
                .setProperty(

                    "--primary",

                    "#2563eb"

                );

        }

    }

}