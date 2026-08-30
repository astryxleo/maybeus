/* ==========================================================
   JUDY — PROPOSAL WEBSITE
   BY LEO
========================================================== */


/* ==========================================================
   DOM
========================================================== */

const pages = Array.from(
    document.querySelectorAll(".page")
);

const nextButtons = document.querySelectorAll(
    "[data-next]"
);

const progress = document.getElementById(
    "progress"
);

const currentPageText =
    document.getElementById("currentPage");

const starsContainer =
    document.getElementById("stars");

const reasonCards =
    document.querySelectorAll(".reason-card");

const yesButton =
    document.getElementById("yesButton");

const maybeButton =
    document.getElementById("maybeButton");

const answerOverlay =
    document.getElementById("answerOverlay");

const closeAnswer =
    document.getElementById("closeAnswer");


/* ==========================================================
   STATE
========================================================== */

let currentPage = 0;

let isAnimating = false;

const totalPages = pages.length;


/* ==========================================================
   STAR FIELD
========================================================== */

function createStars() {

    if (!starsContainer) {
        return;
    }

    const amount =
        window.innerWidth < 600
            ? 45
            : 85;

    const fragment =
        document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        const x =
            Math.random() * 100;

        const y =
            Math.random() * 100;

        const delay =
            Math.random() * 4;

        const duration =
            2.5 + Math.random() * 4;

        const size =
            Math.random() > 0.85
                ? 3
                : 1 + Math.random();

        star.style.left = `${x}%`;

        star.style.top = `${y}%`;

        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;

        star.style.animationDelay =
            `${delay}s`;

        star.style.animationDuration =
            `${duration}s`;

        fragment.appendChild(star);
    }

    starsContainer.appendChild(fragment);
}

createStars();


/* ==========================================================
   UPDATE UI
========================================================== */

function updateUI() {

    const pageNumber =
        currentPage + 1;

    const percentage =
        (pageNumber / totalPages) * 100;

    progress.style.width =
        `${percentage}%`;

    currentPageText.textContent =
        String(pageNumber).padStart(2, "0");

}


/* ==========================================================
   ACTIVATE PAGE
========================================================== */

function activatePage(
    newIndex,
    direction = "forward"
) {

    if (
        newIndex < 0 ||
        newIndex >= totalPages
    ) {
        return;
    }

    if (
        isAnimating ||
        newIndex === currentPage
    ) {
        return;
    }

    isAnimating = true;

    const oldPage =
        pages[currentPage];

    const newPage =
        pages[newIndex];


    /* ----------------------------------------------
       Prepare incoming page
    ---------------------------------------------- */

    newPage.classList.remove(
        "exit-left"
    );

    newPage.classList.add(
        "active"
    );


    /* ----------------------------------------------
       Old page animation
    ---------------------------------------------- */

    if (direction === "forward") {

        oldPage.classList.add(
            "exit-left"
        );

    }


    /* ----------------------------------------------
       Update state
    ---------------------------------------------- */

    currentPage =
        newIndex;

    updateUI();


    /* ----------------------------------------------
       Clean old page
    ---------------------------------------------- */

    window.setTimeout(() => {

        oldPage.classList.remove(
            "active",
            "exit-left"
        );

        isAnimating = false;

    }, 850);

}


/* ==========================================================
   NEXT PAGE
========================================================== */

function goNext() {

    if (
        currentPage >=
        totalPages - 1
    ) {
        return;
    }

    activatePage(
        currentPage + 1,
        "forward"
    );

}


/* ==========================================================
   BUTTON EVENTS
========================================================== */

nextButtons.forEach(button => {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            goNext();

        }
    );

});


/* ==========================================================
   CARD FLIP
========================================================== */

reasonCards.forEach(card => {

    function flipCard() {

        card.classList.toggle(
            "flipped"
        );

    }

    card.addEventListener(
        "click",
        flipCard
    );

    card.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                flipCard();

            }

        }
    );

});


/* ==========================================================
   YES BUTTON
========================================================== */

if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            showAnswerOverlay();

            createCelebration();

        }
    );

}


/* ==========================================================
   MAYBE BUTTON
========================================================== */

if (maybeButton) {

    maybeButton.addEventListener(
        "click",
        function () {

            const phrases = [
                "Take your time ♡",
                "Okay... I'll wait 😭",
                "No pressure, Judy ♡",
                "I'll still be here :)"
            ];

            const randomPhrase =
                phrases[
                    Math.floor(
                        Math.random() *
                        phrases.length
                    )
                ];

            maybeButton.querySelector(
                "span"
            ).textContent =
                randomPhrase;

            maybeButton.animate(
                [
                    {
                        transform:
                            "translateX(0)"
                    },
                    {
                        transform:
                            "translateX(-7px)"
                    },
                    {
                        transform:
                            "translateX(7px)"
                    },
                    {
                        transform:
                            "translateX(0)"
                    }
                ],
                {
                    duration: 450,
                    easing: "ease-out"
                }
            );

        }
    );

}


/* ==========================================================
   ANSWER OVERLAY
========================================================== */

function showAnswerOverlay() {

    if (!answerOverlay) {
        return;
    }

    answerOverlay.classList.add(
        "show"
    );

}


function hideAnswerOverlay() {

    if (!answerOverlay) {
        return;
    }

    answerOverlay.classList.remove(
        "show"
    );

}


if (closeAnswer) {

    closeAnswer.addEventListener(
        "click",
        hideAnswerOverlay
    );

}


if (answerOverlay) {

    answerOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                answerOverlay
            ) {

                hideAnswerOverlay();

            }

        }
    );

}


/* ==========================================================
   CELEBRATION PARTICLES
========================================================== */

function createCelebration() {

    const symbols = [
        "✦",
        "♡",
        "✧",
        "·",
        "✦"
    ];

    const amount =
        window.innerWidth < 600
            ? 22
            : 40;

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        particle.style.position =
            "fixed";

        particle.style.left =
            `${50 + (Math.random() - 0.5) * 50}%`;

        particle.style.top =
            `${50 + (Math.random() - 0.5) * 20}%`;

        particle.style.zIndex =
            "600";

        particle.style.pointerEvents =
            "none";

        particle.style.color =
            Math.random() > 0.5
                ? "#e9d19b"
                : "#c98d99";

        particle.style.fontSize =
            `${10 + Math.random() * 14}px`;

        document.body.appendChild(
            particle
        );

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            120 +
            Math.random() * 300;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 0
                },
                {
                    transform:
                        "translate(-50%, -50%) scale(1)",
                    opacity: 1,
                    offset: 0.2
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(${Math.random() * 360}deg)
                        scale(0.5)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1100 +
                    Math.random() * 900,

                easing:
                    "cubic-bezier(.2,.8,.2,1)",

                fill: "forwards"
            }
        );

        window.setTimeout(
            () => {
                particle.remove();
            },
            2200
        );

    }

}


/* ==========================================================
   KEYBOARD NAVIGATION
========================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "ArrowRight" ||
            event.key === "Enter"
        ) {

            const tag =
                document.activeElement.tagName;

            const isInput =
                tag === "INPUT" ||
                tag === "TEXTAREA";

            if (!isInput) {
                goNext();
            }

        }

    }
);


/* ==========================================================
   BLOCK WHEEL NAVIGATION
   Navigation stays button-based.
========================================================== */

document.addEventListener(
    "wheel",
    function (event) {

        /*
         * We intentionally prevent wheel navigation.
         * The website uses the NEXT buttons.
         */

        event.preventDefault();

    },
    {
        passive: false
    }
);


/* ==========================================================
   TOUCH SWIPE
   Only forward swipe is allowed.
========================================================== */

let touchStartX = 0;

let touchStartY = 0;


document.addEventListener(
    "touchstart",
    function (event) {

        if (!event.touches.length) {
            return;
        }

        touchStartX =
            event.touches[0].clientX;

        touchStartY =
            event.touches[0].clientY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    function (event) {

        if (!event.changedTouches.length) {
            return;
        }

        const touch =
            event.changedTouches[0];

        const endX =
            touch.clientX;

        const endY =
            touch.clientY;

        const deltaX =
            endX - touchStartX;

        const deltaY =
            endY - touchStartY;


        /*
         * Horizontal swipe only.
         */

        if (
            Math.abs(deltaX) >
            90 &&
            Math.abs(deltaX) >
            Math.abs(deltaY)
        ) {

            /*
             * Only right-to-left swipe
             * moves forward.
             */

            if (deltaX < 0) {
                goNext();
            }

        }

    },
    {
        passive: true
    }
);


/* ==========================================================
   INITIAL UI
========================================================== */

updateUI();


/* ==========================================================
   PREVENT CONTEXT MENU
   Keeps the presentation cleaner.
========================================================== */

document.addEventListener(
    "contextmenu",
    function (event) {

        /*
         * Don't interfere with normal text
         * interaction. Only prevent it on the
         * decorative background.
         */

        if (
            event.target === document.body ||
            event.target.classList.contains(
                "background"
            )
        ) {

            event.preventDefault();

        }

    }
);


/* ==========================================================
   PAGE LOAD ENTRANCE
========================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "loaded"
        );

        updateUI();

    }
);
