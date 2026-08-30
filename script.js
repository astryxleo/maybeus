/* ==========================================================
   MAYBE US
   Judy × Leo
========================================================== */


/* ==========================================================
   GLOBAL STATE
========================================================== */

const pages = Array.from(
    document.querySelectorAll(".page")
);

const totalPages = pages.length;

let currentPage = 1;
let isTransitioning = false;


/* ==========================================================
   ELEMENTS
========================================================== */

const pageNumber =
    document.getElementById("pageNumber");

const totalPagesElement =
    document.getElementById("totalPages");

const progressFill =
    document.querySelector(".progress-fill");

const cursorGlow =
    document.querySelector(".cursor-glow");

const yesButton =
    document.getElementById("yesButton");

const thinkButton =
    document.getElementById("thinkButton");

const confettiContainer =
    document.getElementById("confettiContainer");


/* ==========================================================
   INITIALIZATION
========================================================== */

totalPagesElement.textContent =
    String(totalPages).padStart(2, "0");

updatePageUI();

setTimeout(() => {
    animateCurrentPage();
}, 100);


/* ==========================================================
   PAGE NAVIGATION
========================================================== */

function goToPage(targetPage) {

    if (isTransitioning) {
        return;
    }

    if (
        targetPage < 1 ||
        targetPage > totalPages ||
        targetPage === currentPage
    ) {
        return;
    }

    isTransitioning = true;

    const oldPage =
        pages[currentPage - 1];

    const newPage =
        pages[targetPage - 1];

    oldPage.classList.remove("active");

    setTimeout(() => {

        currentPage = targetPage;

        newPage.classList.add("active");

        updatePageUI();

        setTimeout(() => {
            animateCurrentPage();
            isTransitioning = false;
        }, 80);

    }, 300);
}


/* ==========================================================
   NEXT BUTTONS
========================================================== */

document.querySelectorAll("[data-next]")
    .forEach(button => {

        button.addEventListener("click", () => {

            if (currentPage < 9) {
                goToPage(currentPage + 1);
            }

        });

    });


/* ==========================================================
   PROPOSAL ANSWERS
========================================================== */

if (yesButton) {

    yesButton.addEventListener("click", () => {

        if (isTransitioning) {
            return;
        }

        createConfetti();

        goToPage(10);

    });

}


if (thinkButton) {

    thinkButton.addEventListener("click", () => {

        goToPage(11);

    });

}


/* ==========================================================
   UPDATE PAGE UI
========================================================== */

function updatePageUI() {

    const formatted =
        String(currentPage).padStart(2, "0");

    pageNumber.textContent =
        formatted;

    const progress =
        (currentPage / totalPages) * 100;

    progressFill.style.width =
        `${progress}%`;

}


/* ==========================================================
   PAGE ANIMATION REFRESH
========================================================== */

function animateCurrentPage() {

    const current =
        pages[currentPage - 1];

    if (!current) {
        return;
    }

    const revealElements =
        current.querySelectorAll(".reveal");

    revealElements.forEach(element => {

        element.style.animation = "none";

        void element.offsetWidth;

        element.style.animation = "";

    });

}


/* ==========================================================
   FLIP CARDS
========================================================== */

const flipCards =
    document.querySelectorAll(".flip-card");

flipCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});


/* ==========================================================
   CURSOR GLOW
========================================================== */

document.addEventListener("mousemove", event => {

    if (!cursorGlow) {
        return;
    }

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* ==========================================================
   BUTTON MAGNETIC EFFECT
========================================================== */

const buttons =
    document.querySelectorAll(
        ".luxury-button, .answer-button"
    );

buttons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.06}px, ${y * 0.06}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ==========================================================
   FLIP CARD TILT
========================================================== */

flipCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -5;

        const rotateY =
            ((x / rect.width) - 0.5) * 5;

        const inner =
            card.querySelector(".flip-inner");

        if (!card.classList.contains("flipped")) {

            inner.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }

    });


    card.addEventListener("mouseleave", () => {

        const inner =
            card.querySelector(".flip-inner");

        if (card.classList.contains("flipped")) {

            inner.style.transform =
                "rotateY(180deg)";

        } else {

            inner.style.transform =
                "";

        }

    });

});


/* ==========================================================
   CONFETTI
========================================================== */

function createConfetti() {

    if (!confettiContainer) {
        return;
    }

    confettiContainer.innerHTML = "";

    const pieces = 100;

    for (let i = 0; i < pieces; i++) {

        const piece =
            document.createElement("span");

        piece.className = "confetti";

        const left =
            Math.random() * 100;

        const x =
            (Math.random() - 0.5) * 500;

        const duration =
            3 + Math.random() * 4;

        const rotation =
            Math.random() * 360;

        const delay =
            Math.random() * 1.4;

        const width =
            4 + Math.random() * 6;

        const height =
            7 + Math.random() * 13;

        piece.style.left =
            `${left}%`;

        piece.style.setProperty(
            "--x",
            `${x}px`
        );

        piece.style.setProperty(
            "--duration",
            `${duration}s`
        );

        piece.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        piece.style.width =
            `${width}px`;

        piece.style.height =
            `${height}px`;

        piece.style.animationDelay =
            `${delay}s`;

        confettiContainer.appendChild(piece);

    }

}


/* ==========================================================
   KEYBOARD NAVIGATION
========================================================== */

document.addEventListener("keydown", event => {

    if (
        event.key === "ArrowRight" ||
        event.key === "Enter"
    ) {

        if (
            currentPage < 9 &&
            !isTransitioning
        ) {
            goToPage(currentPage + 1);
        }

    }

});


/* ==========================================================
   TOUCH SWIPE
   Forward only.
========================================================== */

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener(
    "touchstart",
    event => {

        const touch =
            event.changedTouches[0];

        touchStartX =
            touch.screenX;

        touchStartY =
            touch.screenY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        const touch =
            event.changedTouches[0];

        const deltaX =
            touch.screenX - touchStartX;

        const deltaY =
            touch.screenY - touchStartY;

        if (
            Math.abs(deltaX) > 100 &&
            Math.abs(deltaX) > Math.abs(deltaY)
        ) {

            if (
                deltaX < 0 &&
                currentPage < 9
            ) {
                goToPage(currentPage + 1);
            }

        }

    },
    {
        passive: true
    }
);


/* ==========================================================
   PREVENT ACCIDENTAL BACK NAVIGATION
   INSIDE THE WEBSITE.
========================================================== */

window.addEventListener(
    "popstate",
    () => {

        history.pushState(
            null,
            "",
            window.location.href
        );

    }
);

history.pushState(
    null,
    "",
    window.location.href
);


/* ==========================================================
   RANDOM FLOATING PARTICLES
========================================================== */

function createParticles() {

    const particleLayer =
        document.createElement("div");

    particleLayer.className =
        "particle-layer";

    particleLayer.style.position =
        "fixed";

    particleLayer.style.inset =
        "0";

    particleLayer.style.pointerEvents =
        "none";

    particleLayer.style.zIndex =
        "-1";

    document.body.appendChild(
        particleLayer
    );


    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement("span");

        particle.style.position =
            "absolute";

        particle.style.width =
            `${1 + Math.random() * 3}px`;

        particle.style.height =
            particle.style.width;

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            "rgba(220,180,230,0.35)";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.opacity =
            `${0.1 + Math.random() * 0.4}`;

        particle.style.animation =
            `particleDrift ${
                8 + Math.random() * 12
            }s ease-in-out infinite`;

        particle.style.animationDelay =
            `${Math.random() * 5}s`;

        particleLayer.appendChild(
            particle
        );

    }

}


/* ==========================================================
   PARTICLE KEYFRAMES
========================================================== */

const particleStyle =
    document.createElement("style");

particleStyle.textContent = `

@keyframes particleDrift {

    0%,
    100% {
        transform:
            translate3d(0, 0, 0);
    }

    50% {
        transform:
            translate3d(
                ${Math.random() * 50 - 25}px,
                ${Math.random() * 80 - 40}px,
                0
            );
    }

}

`;

document.head.appendChild(
    particleStyle
);


/* ==========================================================
   START PARTICLES
========================================================== */

createParticles();


/* ==========================================================
   SOFT PAGE LOAD
========================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);


/* ==========================================================
   CONSOLE
========================================================== */

console.log(
    "%cMaybe Us — Judy × Leo",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "%cMade with a little courage. ♡",
    "font-size:12px;"
);
