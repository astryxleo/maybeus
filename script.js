/* ============================================================
   LEO × JUDY
   Interactive Proposal Website
============================================================ */


/* ============================================================
   DOM
============================================================ */

const pages = Array.from(
    document.querySelectorAll(".page")
);

const nextButtons = Array.from(
    document.querySelectorAll("[data-next]")
);

const currentPageElement =
    document.getElementById("currentPage");

const transitionLayer =
    document.getElementById("transitionLayer");

const starsContainer =
    document.getElementById("stars");

const yesButton =
    document.getElementById("yesButton");

const maybeButton =
    document.getElementById("maybeButton");

const answerMessage =
    document.getElementById("answerMessage");

const celebration =
    document.getElementById("celebration");

const confettiContainer =
    document.getElementById("confetti");


/* ============================================================
   STATE
============================================================ */

let currentPage = 1;

let isTransitioning = false;

const totalPages = pages.length;


/* ============================================================
   INITIAL SETUP
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createStars();

        setupFlipCards();

        setupButtons();

        setupProposalButtons();

        updatePageCounter();

        resetAllPageScroll();

    }
);


/* ============================================================
   CREATE STARS
============================================================ */

function createStars() {

    if (!starsContainer) {
        return;
    }

    const numberOfStars =
        window.innerWidth < 700
            ? 45
            : 85;


    for (
        let index = 0;
        index < numberOfStars;
        index++
    ) {

        const star =
            document.createElement("span");


        star.className =
            "star";


        const x =
            Math.random() * 100;

        const y =
            Math.random() * 100;


        const size =
            Math.random() > 0.85
                ? 3
                : 1.5;


        const duration =
            2.5 +
            Math.random() * 5;


        const delay =
            Math.random() * 5;


        star.style.left =
            `${x}%`;

        star.style.top =
            `${y}%`;

        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;

        star.style.setProperty(
            "--duration",
            `${duration}s`
        );

        star.style.setProperty(
            "--delay",
            `${delay}s`
        );


        starsContainer.appendChild(
            star
        );

    }

}


/* ============================================================
   NEXT BUTTONS
============================================================ */

function setupButtons() {

    nextButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const target =
                        currentPage + 1;


                    if (
                        target <= totalPages
                    ) {

                        goToPage(target);

                    }

                }
            );

        }
    );

}


/* ============================================================
   PAGE NAVIGATION
============================================================ */

function goToPage(targetPage) {

    if (isTransitioning) {
        return;
    }


    if (
        targetPage < 1 ||
        targetPage > totalPages
    ) {
        return;
    }


    if (
        targetPage === currentPage
    ) {
        return;
    }


    isTransitioning = true;


    transitionLayer.classList.add(
        "active"
    );


    setTimeout(
        () => {

            const oldPage =
                pages[currentPage - 1];

            const newPage =
                pages[targetPage - 1];


            oldPage.classList.remove(
                "active"
            );

            oldPage.classList.add(
                "exit"
            );


            newPage.classList.remove(
                "exit"
            );

            newPage.classList.add(
                "active"
            );


            currentPage =
                targetPage;


            updatePageCounter();


            scrollPageToTop(
                newPage
            );


            setTimeout(
                () => {

                    transitionLayer.classList.remove(
                        "active"
                    );

                },
                80
            );


            setTimeout(
                () => {

                    oldPage.classList.remove(
                        "exit"
                    );

                    isTransitioning =
                        false;

                },
                850
            );

        },
        420
    );

}


/* ============================================================
   PAGE COUNTER
============================================================ */

function updatePageCounter() {

    if (!currentPageElement) {
        return;
    }


    currentPageElement.textContent =
        String(currentPage)
            .padStart(2, "0");

}


/* ============================================================
   SCROLL RESET
============================================================ */

function scrollPageToTop(page) {

    const content =
        page.querySelector(
            ".page-content"
        );


    if (!content) {
        return;
    }


    content.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "instant"
        }
    );

}


function resetAllPageScroll() {

    pages.forEach(
        (page) => {

            scrollPageToTop(
                page
            );

        }
    );

}


/* ============================================================
   FLIP CARDS
============================================================ */

function setupFlipCards() {

    const cards =
        document.querySelectorAll(
            ".flip-card"
        );


    cards.forEach(
        (card) => {

            card.addEventListener(
                "click",
                () => {

                    card.classList.toggle(
                        "flipped"
                    );

                }
            );


            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key ===
                        "Enter" ||
                        event.key ===
                        " "
                    ) {

                        event.preventDefault();

                        card.classList.toggle(
                            "flipped"
                        );

                    }

                }
            );

        }
    );

}


/* ============================================================
   PROPOSAL BUTTONS
============================================================ */

function setupProposalButtons() {

    if (yesButton) {

        yesButton.addEventListener(
            "click",
            handleYes
        );

    }


    if (maybeButton) {

        maybeButton.addEventListener(
            "click",
            handleMaybe
        );

    }

}


/* ============================================================
   YES
============================================================ */

function handleYes() {

    if (
        celebration.classList.contains(
            "active"
        )
    ) {
        return;
    }


    answerMessage.textContent =
        "Okay... that made me smile.";


    createConfetti();


    setTimeout(
        () => {

            celebration.classList.add(
                "active"
            );

        },
        650
    );

}


/* ============================================================
   MAYBE
============================================================ */

function handleMaybe() {

    if (!answerMessage) {
        return;
    }


    answerMessage.textContent =
        "Take all the time you need. ♡";


    maybeButton.animate(
        [
            {
                transform:
                    "translateY(0)"
            },

            {
                transform:
                    "translateY(-4px)"
            },

            {
                transform:
                    "translateY(0)"
            }
        ],
        {
            duration: 500,
            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );

}


/* ============================================================
   CONFETTI
============================================================ */

function createConfetti() {

    if (!confettiContainer) {
        return;
    }


    confettiContainer.innerHTML =
        "";


    const amount =
        window.innerWidth < 700
            ? 70
            : 120;


    for (
        let index = 0;
        index < amount;
        index++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti";


        const left =
            Math.random() * 100;


        const drift =
            (
                Math.random() * 240
            ) - 120;


        const duration =
            3 +
            Math.random() * 4;


        const delay =
            Math.random() * 1.4;


        const rotation =
            Math.random() * 360;


        const width =
            4 +
            Math.random() * 5;


        const height =
            8 +
            Math.random() * 8;


        piece.style.left =
            `${left}%`;


        piece.style.width =
            `${width}px`;


        piece.style.height =
            `${height}px`;


        piece.style.setProperty(
            "--drift",
            `${drift}px`
        );


        piece.style.setProperty(
            "--fall-duration",
            `${duration}s`
        );


        piece.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );


        piece.style.animationDelay =
            `${delay}s`;


        confettiContainer.appendChild(
            piece
        );

    }

}


/* ============================================================
   MOUSE PARALLAX
============================================================ */

let mouseX = 0;

let mouseY = 0;

let targetX = 0;

let targetY = 0;


window.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            (
                event.clientX /
                window.innerWidth
            ) - 0.5;


        mouseY =
            (
                event.clientY /
                window.innerHeight
            ) - 0.5;

    }
);


function animateParallax() {

    targetX +=
        (
            mouseX -
            targetX
        ) * 0.025;


    targetY +=
        (
            mouseY -
            targetY
        ) * 0.025;


    const orbs =
        document.querySelectorAll(
            ".floating-orb"
        );


    orbs.forEach(
        (orb, index) => {

            const multiplier =
                (index + 1) * 7;


            orb.style.transform =
                `translate3d(
                    ${targetX * multiplier}px,
                    ${targetY * multiplier}px,
                    0
                )`;

        }
    );


    requestAnimationFrame(
        animateParallax
    );

}


animateParallax();


/* ============================================================
   CARD TILT
============================================================ */

function setupCardTilt() {

    const cards =
        document.querySelectorAll(
            ".glass-card"
        );


    cards.forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    if (
                        window.innerWidth <
                        800
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
                        (
                            y -
                            centerY
                        ) / 30;


                    const rotateY =
                        (
                            centerX -
                            x
                        ) / 30;


                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}


setupCardTilt();


/* ============================================================
   BUTTON RIPPLE
============================================================ */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {
            return;
        }


        const rect =
            button.getBoundingClientRect();


        const ripple =
            document.createElement(
                "span"
            );


        ripple.style.position =
            "absolute";


        ripple.style.left =
            `${event.clientX - rect.left}px`;


        ripple.style.top =
            `${event.clientY - rect.top}px`;


        ripple.style.width =
            "10px";


        ripple.style.height =
            "10px";


        ripple.style.borderRadius =
            "50%";


        ripple.style.background =
            "rgba(255,255,255,0.18)";


        ripple.style.transform =
            "translate(-50%,-50%) scale(0)";


        ripple.style.pointerEvents =
            "none";


        ripple.style.transition =
            "transform .65s ease, opacity .65s ease";


        ripple.style.zIndex =
            "10";


        button.appendChild(
            ripple
        );


        requestAnimationFrame(
            () => {

                ripple.style.transform =
                    "translate(-50%,-50%) scale(25)";

                ripple.style.opacity =
                    "0";

            }
        );


        setTimeout(
            () => {

                ripple.remove();

            },
            700
        );

    }
);


/* ============================================================
   TOUCH SUPPORT FOR FLIP CARDS
============================================================ */

let touchStartX = 0;

let touchStartY = 0;


document.addEventListener(
    "touchstart",
    (event) => {

        if (
            event.touches.length !== 1
        ) {
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
    (event) => {

        if (
            event.changedTouches.length !== 1
        ) {
            return;
        }


        const endX =
            event.changedTouches[0].clientX;


        const endY =
            event.changedTouches[0].clientY;


        const distanceX =
            endX -
            touchStartX;


        const distanceY =
            endY -
            touchStartY;


        if (
            Math.abs(distanceX) > 80 &&
            Math.abs(distanceX) >
            Math.abs(distanceY)
        ) {

            if (
                distanceX < 0 &&
                currentPage <
                totalPages
            ) {

                goToPage(
                    currentPage + 1
                );

            }

        }

    },
    {
        passive: true
    }
);


/* ============================================================
   KEYBOARD
============================================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight" ||
            event.key === "Enter"
        ) {

            if (
                currentPage <
                totalPages
            ) {

                goToPage(
                    currentPage + 1
                );

            }

        }

    }
);


/* ============================================================
   PREVENT HORIZONTAL OVERFLOW
============================================================ */

function preventHorizontalOverflow() {

    document.documentElement.style
        .overflowX = "hidden";

    document.body.style
        .overflowX = "hidden";

}


preventHorizontalOverflow();


/* ============================================================
   RESIZE
============================================================ */

window.addEventListener(
    "resize",
    () => {

        preventHorizontalOverflow();

    }
);


/* ============================================================
   FINAL CONSOLE
============================================================ */

console.log(
    "%cLEO × JUDY",
    "font-size:24px;font-weight:bold;"
);

console.log(
    "A little website made with a lot of effort."
);
