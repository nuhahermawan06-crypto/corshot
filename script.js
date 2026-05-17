// ========== CAROUSEL (STATIS) ==========
function initCarousel() {
    const mainCourse = document.querySelector(".main-course-carousel");
    const drinks = document.querySelector(".drinks-carousel");
    const snacks = document.querySelector(".snacks-carousel");

    const mainCourseSlide = document.querySelector(".main-course-carousel-slide");
    const drinksSlide = document.querySelector(".drinks-carousel-slide");
    const snacksSlide = document.querySelector(".snacks-carousel-slide");

    if (mainCourse && mainCourseSlide) {
    for (let i = 0; i < 2; i++) {
        mainCourse.appendChild(mainCourseSlide.cloneNode(true));
    }
    }
    if (drinks && drinksSlide) {
    for (let i = 0; i < 2; i++) {
        drinks.appendChild(drinksSlide.cloneNode(true));
    }
    }
    if (snacks && snacksSlide) {
    for (let i = 0; i < 2; i++) {
        snacks.appendChild(snacksSlide.cloneNode(true));
    }
}
}

initCarousel();

// ========== RESERVASI (NOTIFIKASI SAJA, TIDAK KE DATABASE) ==========
const form = document.querySelector("#reservation-item-form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Ambil nilai dari form
        const tableName = document.querySelector("#table_name")?.value || '';
        const tableSize = document.querySelector("#table_capacity")?.value || '';
        const date = document.querySelector("#order_date")?.value || '';
        const order = document.querySelector("#order")?.value || '';

        // Validasi sederhana
        if (!tableName || !tableSize || !date) {
            alert("❌ Harap isi Nama, Jumlah Orang, dan Tanggal/Waktu!");
            return;
        }

        // Format tanggal ke format lokal
        const formattedDate = date ? new Date(date).toLocaleString('id-ID') : date;

        // Teks pesan (hanya notifikasi, tidak dikirim ke mana pun)
        let message = `🍽️ RESERVASI CORSHOT CAFÉ 🍽️\n\n`;
        message += `👤 Nama: ${tableName}\n`;
        message += `👥 Jumlah Orang: ${tableSize}\n`;
        message += `📅 Tanggal/Jam: ${formattedDate}\n`;
        message += `📝 Catatan: ${order || "Pesan di tempat"}\n\n`;
        message += `Terima kasih! Kami akan segera menghubungi Anda.`;

        // Tampilkan alert dengan data reservasi (simulasi)
        alert(message);
        
        // Reset form (opsional)
        form.reset();
    });
} else {
    console.log("Form reservasi tidak ditemukan di halaman ini");
}