const kichikRasm = document.querySelectorAll('.kichik-rasm'); // Barcha bayroqlarni olish
const modallar = document.querySelectorAll('.modal'); // Barcha modal oynalar
const yopishTugmalar = document.querySelectorAll('.yopish'); // Barcha yopish tugmalari

// Har bir bayroq uchun event qo‘shamiz
kichikRasm.forEach((rasm, index) => {
    rasm.addEventListener('click', function () {
        // Modalni ochamiz
        modallar[index].style.display = 'flex';
        setTimeout(() => {
            modallar[index].style.opacity = '1';
        }, 10);
    });
});

// Har bir yopish tugmasi uchun event qo‘shamiz
yopishTugmalar.forEach((tugma, index) => {
    tugma.addEventListener('click', function () {
        // Modalni yopamiz
        modallar[index].style.opacity = '0';
        setTimeout(() => {
            modallar[index].style.display = 'none';
        }, 300);
    });
});

// Modalni bosganda yopish
modallar.forEach((modal, index) => {
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            yopishTugmalar[index].click();
        }
    });
});
