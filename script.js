/* ==========================================================
   JUDY × LEO
   CINEMATIC INTERACTION ENGINE
========================================================== */


/* ==========================================================
   GLOBAL STATE
========================================================== */

const TOTAL_PAGES = 10;

let currentPage = 1;

let isChangingPage = false;


/* ==========================================================
   ELEMENTS
========================================================== */

const screens =
    document.querySelectorAll(".screen");

const nextButtons =
    document.querySelectorAll("[data-next]");

const progressValue =
    document.getElementById("progressValue");

const currentPageDisplay =
    document.getElementById("currentPage");

const particlesContainer =
    document.getElementById("particles");

const confettiContainer =
    document.getElementById("confetti");

const cursorGlow =
    document.querySelector(".cursor-glow");

const yesButton =
    document.getElementById("yesButton");

const obviouslyButton =
    document.getElementById("obviouslyButton");


/* ==========================================================
   PAGE NAVIGATION
========================================================== */

function goToPage(pageNumber) {

    if (isChangingPage) {
        return;
    }

    if (pageNumber < 1) {
        pageNumber = 1;
    }

    if (pageNumber > TOTAL_PAGES) {
        pageNumber = TOTAL_PAGES;
    }

    if (pageNumber === currentPage) {
        return;
    }

    isChangingPage = true;


    /*
        Remove active class
        from every screen.
    */

    screens.forEach(screen => {
        screen.classList.remove("active");
    });


    /*
        Find requested page.
    */

    const target =
        document.querySelector(
            `.screen[data-page="${pageNumber}"]`
        );


    if (!target) {

        isChangingPage = false;

        return;
    }


    /*
        Activate requested page.
    */

    target.classList.add("active");


    currentPage =
        pageNumber;


    /*
        Update interface.
    */

    updateProgress();


    /*
        Return scroll position
        to the top of the page.
    */

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    /*
        Generate a few new
        particles on each page.
    */

    createPageParticles();


    /*
        Unlock navigation.
    */

    setTimeout(() => {

        isChangingPage = false;

    }, 850);

}


/* ==========================================================
   NEXT PAGE
========================================================== */

function nextPage() {

    if (currentPage < TOTAL_PAGES) {

        goToPage(
            currentPage + 1
        );

    }

}


/* ==========================================================
   NEXT BUTTON EVENTS
========================================================== */

nextButtons.forEach(button => {

    button.addEventListener(
        "click",
        nextPage
    );

});


/* ==========================================================
   PROGRESS BAR
========================================================== */

function updateProgress() {

    const percentage =
        (currentPage / TOTAL_PAGES) * 100;


    progressValue.style.width =
        `${percentage}%`;


    currentPageDisplay.textContent =
        String(currentPage).padStart(2, "0");

}


/* ==========================================================
   FLIP CARDS
========================================================== */

const memoryCards =
    document.querySelectorAll(".memory-card");


memoryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            card.classList.toggle(
                "flipped"
            );

        }
    );

});


/* ==========================================================
   MOUSE FOLLOWING GLOW
========================================================== */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            event.clientX;

        const y =
            event.clientY;


        cursorGlow.style.left =
            `${x}px`;

        cursorGlow.style.top =
            `${y}px`;

    }
);


/* ==========================================================
   HIDE CURSOR GLOW ON MOBILE
========================================================== */

if (
    window.matchMedia(
        "(max-width: 700px)"
    ).matches
) {

    cursorGlow.style.display =
        "none";

}


/* ==========================================================
   FLOATING PARTICLES
========================================================== */

function createParticle() {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    const size =
        Math.random() * 3 + 1;


    const left =
        Math.random() * 100;


    const duration =
        Math.random() * 8 + 7;


    const delay =
        Math.random() * 4;


    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;

    particle.style.left =
        `${left}%`;

    particle.style.animationDuration =
        `${duration}s`;

    particle.style.animationDelay =
        `${delay}s`;


    particlesContainer.appendChild(
        particle
    );


    setTimeout(
        () => {

            particle.remove();

        },
        (duration + delay) * 1000
    );

}


/* ==========================================================
   INITIAL PARTICLES
========================================================== */

function createInitialParticles() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        createParticle();

    }

}


/* ==========================================================
   PAGE PARTICLES
========================================================== */

function createPageParticles() {

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        setTimeout(
            createParticle,
            i * 100
        );

    }

}


/* ==========================================================
   CONFETTI
========================================================== */

function createConfetti() {

    const amount = 110;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        const size =
            Math.random() * 8 + 4;


        const left =
            Math.random() * 100;


        const duration =
            Math.random() * 1.8 + 2.2;


        const delay =
            Math.random() * 0.8;


        const rotation =
            Math.random() * 360;


        const hue =
            Math.floor(
                Math.random() * 360
            );


        piece.style.width =
            `${size}px`;

        piece.style.height =
            `${size * 1.5}px`;

        piece.style.left =
            `${left}%`;

        piece.style.animationDuration =
            `${duration}s`;

        piece.style.animationDelay =
            `${delay}s`;

        piece.style.transform =
            `rotate(${rotation}deg)`;

        piece.style.background =
            `hsl(${hue}, 55%, 75%)`;


        confettiContainer.appendChild(
            piece
        );


        setTimeout(
            () => {

                piece.remove();

            },
            (duration + delay) * 1000
        );

    }

}


/* ==========================================================
   ANSWER BUTTONS
========================================================== */

function handleAnswer() {

    /*
        Small celebration first.
    */

    createConfetti();


    /*
        Then move forward.
    */

    setTimeout(
        () => {

            goToPage(9);

        },
        650
    );

}


yesButton.addEventListener(
    "click",
    handleAnswer
);


obviouslyButton.addEventListener(
    "click",
    handleAnswer
);


/* ==========================================================
   KEYBOARD NAVIGATION
========================================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
            Right arrow and Enter
            move forward only.
        */

        if (
            event.key === "ArrowRight" ||
            event.key === "Enter"
        ) {

            /*
                Don't trigger Enter
                while clicking a button.
            */

            if (
                event.key === "Enter" &&
                document.activeElement &&
                document.activeElement.tagName === "BUTTON"
            ) {

                return;

            }


            nextPage();

        }

    }
);


/* ==========================================================
   TOUCH SWIPE
========================================================== */

let touchStartX = 0;

let touchStartY = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

        touchStartY =
            event.changedTouches[0].screenY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        const touchEndX =
            event.changedTouches[0].screenX;

        const touchEndY =
            event.changedTouches[0].screenY;


        const horizontalDistance =
            touchStartX - touchEndX;

        const verticalDistance =
            Math.abs(
                touchStartY - touchEndY
            );


        /*
            Only count horizontal
            swipes.
        */

        if (
            horizontalDistance > 80 &&
            verticalDistance < 120
        ) {

            nextPage();

        }

    },
    {
        passive: true
    }
);


/* ==========================================================
   BUTTON MAGNETIC EFFECT
========================================================== */

const magneticButtons =
    document.querySelectorAll(
        ".main-button, .answer-button"
    );


magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});


/* ==========================================================
   CARD TILT EFFECT
========================================================== */

memoryCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (
                card.classList.contains(
                    "flipped"
                )
            ) {

                return;

            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -3;


            const rotateY =
                ((x - centerX) / centerX) * 3;


            card.querySelector(
                ".memory-card-inner"
            ).style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            const inner =
                card.querySelector(
                    ".memory-card-inner"
                );


            if (
                card.classList.contains(
                    "flipped"
                )
            ) {

                inner.style.transform =
                    "rotateY(180deg)";

            } else {

                inner.style.transform =
                    "";

            }

        }
    );

});


/* ==========================================================
   DISABLE TILT ON TOUCH DEVICES
========================================================== */

if (
    "ontouchstart" in window
) {

    memoryCards.forEach(card => {

        card.style.transform =
            "none";

    });

}


/* ==========================================================
   SCROLL BEHAVIOUR
========================================================== */

/*
    IMPORTANT:

    The website remains naturally scrollable.
    Scrolling does NOT change pages.

    Pages only advance through:
    - buttons
    - Enter
    - right arrow
    - left swipe

    This prevents accidental navigation
    while still allowing long sections to
    be viewed comfortably.
*/


document.addEventListener(
    "wheel",
    () => {

        /*
            Intentionally empty.
            Native scrolling remains enabled.
        */

    },
    {
        passive: true
    }
);


/* ==========================================================
   INITIALIZATION
========================================================== */

function initializeWebsite() {

    currentPage = 1;

    screens.forEach(
        screen => {
            screen.classList.remove(
                "active"
            );
        }
    );


    const firstScreen =
        document.querySelector(
            '[data-page="1"]'
        );


    if (firstScreen) {

        firstScreen.classList.add(
            "active"
        );

    }


    updateProgress();

    createInitialParticles();

}


/* ==========================================================
   RESIZE HANDLER
========================================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth <= 700
        ) {

            cursorGlow.style.display =
                "none";

        } else {

            cursorGlow.style.display =
                "block";

        }

    }
);


/* ==========================================================
   START
========================================================== */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );

} else {

    initializeWebsite();

}
