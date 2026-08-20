console.log("Guardianes de Nuestra Tierra - página cargada correctamente");


// =============================
// EFECTO AL HACER SCROLL
// =============================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});