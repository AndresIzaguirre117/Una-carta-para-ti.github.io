/* =========================================
   ELEMENTOS
========================================= */

const envelope = document.getElementById("envelopeContainer");
const instruction = document.getElementById("instruction");
const intro = document.getElementById("intro");


/* =========================================
   ESTADO DE LA ANIMACIÓN

   0 = sobre cerrado
   1 = sobre abierto
   2 = carta saliendo
   3 = carta completa
========================================= */

let state = 0;


/* =========================================
   CLICK PRINCIPAL
========================================= */

envelope.addEventListener("click", () => {

    /* -----------------------------
       PASO 1
       Abrir sobre
    ----------------------------- */

    if (state === 0) {

        state = 1;

        envelope.classList.add("open");

        intro.classList.add("hidden");

        instruction.textContent =
            "Haz clic en la carta";

        return;
    }


    /* -----------------------------
       PASO 2
       Sacar carta
    ----------------------------- */

    if (state === 1) {

        state = 2;

        envelope.classList.add("out");

        instruction.textContent =
            "Haz clic en la carta para abrirla";

        return;
    }


    /* -----------------------------
       PASO 3
       Mostrar carta completa
    ----------------------------- */

    if (state === 2) {

        state = 3;

        envelope.classList.add("full");

        instruction.classList.add("hide");

        return;
    }

});