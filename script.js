/* ============================================================
   MAYBE US
   Leo × Judy
   ============================================================ */


/* ============================================================
   DOM
============================================================ */

const pages = Array.from(
    document.querySelectorAll(".page")
);

const nextButtons = document.querySelectorAll(
    "[data-next]"
);

const currentPageElement =
    document.getElementById("currentPage");

const transitionLayer =
    document.getElementById("transitionLayer");

const yesButton =
    document.getElementById("yesButton");

const thinkButton =
    document.getElementById("thinkButton");

const confettiContainer =
    document.getElementById("confetti");


/* ============================================================
   STATE
============================================================ */

let currentPage = 0;
let isTransitioning = false;


/* ============================================================
   INITIALIZE
============================================================ */

function initialize() {

    pages.forEach((page, index) => {

        page.classList.remove(
            "active",
            "exit"
        );

        if (index === 0) {
            page.classList.add("active");
        }

    });

    updatePageIndicator();

    setupFlipCards();

    setupMouseGlow();

}


/* ============================================================
   PAGE INDICATOR
============================================================ */

function updatePageIndicator() {

    if (!currentPageElement) {
        return;
    }

    const number =
        String(currentPage + 1)
            .padStart(2, "0");

    currentPageElement.textContent = number;
}


/* ============================================================
   PAGE TRANSITION
============================================================ */

function goToPage(targetIndex) {

    if (isTransitioning) {
        return;
    }

    if (
        targetIndex < 0 ||
        targetIndex >= pages.length
    ) {
        return;
    }

    if (targetIndex === currentPage) {
        return;
    }

    isTransitioning = true;

    const oldPage = pages[currentPage];
    const newPage = pages[targetIndex];

    oldPage.classList.add("exit");

    transitionLayer.classList.add("show");

    setTimeout(() => {

        oldPage.classList.remove(
            "active",
            "exit"
        );

        newPage.classList.add("active");

        currentPage = targetIndex;

        updatePageIndicator();

        resetPageScroll(newPage);

        setTimeout(() => {

            transitionLayer.classList.remove("show");

            setTimeout(() => {

                isTransitioning = false;

            }, 350);

        }, 220);

    }, 360);
}


/* ============================================================
   RESET INTERNAL SCROLL
============================================================ */

function resetPageScroll(page) {

    if (!page) {
        return;
    }

    const scrollContainer =
        page.querySelector(".scroll-page");

    if (scrollContainer) {

        scrollContainer.scrollTop = 0;

    }

}


/* ============================================================
   NEXT BUTTONS
============================================================ */

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        goToPage(currentPage + 1);

    });

});


/* ============================================================
   FLIP CARDS
============================================================ */

function setupFlipCards() {

    const cards =
        document.querySelectorAll(".flip-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("flipped");

        });

    });

}


/* ============================================================
   YES BUTTON
============================================================ */

if (yesButton) {

    yesButton.addEventListener("click", () => {

        createConfetti();

        setTimeout(() => {

            goToPage(8);

        }, 500);

    });

}


/* ============================================================
   THINK BUTTON
============================================================ */

if (thinkButton) {

    thinkButton.addEventListener("click", () => {

        goToPage(9);

    });

}


/* ============================================================
   CONFETTI
============================================================ */

function createConfetti() {

    if (!confettiContainer) {
        return;
    }

    confettiContainer.innerHTML = "";

    const symbols = [
        "✦",
        "♡",
        "✧",
        "•"
    ];

    const total = 70;

    for (let i = 0; i < total; i++) {

        const piece =
            document.createElement("span");

        piece.className = "confetti";

        const left =
            Math.random() * 100;

        const duration =
            2.5 + Math.random() * 3;

        const delay =
            Math.random() * 0.8;

        const drift =
            (Math.random() - 0.5) * 300;

        const rotation =
            Math.random() * 360;

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            `${left}%`;

        piece.style.setProperty(
            "--duration",
            `${duration}s`
        );

        piece.style.setProperty(
            "--drift",
            `${drift}px`
        );

        piece.style.animationDelay =
            `${delay}s`;

        piece.style.transform =
            `rotate(${rotation}deg)`;

        piece.style.fontSize =
            `${8 + Math.random() * 10}px`;

        confettiContainer.appendChild(piece);

    }

    setTimeout(() => {

        confettiContainer.innerHTML = "";

    }, 6500);

}


/* ============================================================
   MOUSE GLOW
============================================================ */

function setupMouseGlow() {

    const isTouchDevice =
        window.matchMedia(
            "(hover: none)"
        ).matches;

    if (isTouchDevice) {
        return;
    }

    const glow =
        document.createElement("div");

    glow.className =
        "cursor-glow";

    document.body.appendChild(glow);

    Object.assign(
        glow.style,
        {
            position: "fixed",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: "-1",
            opacity: "0",
            background:
                "radial-gradient(circle, rgba(220,180,255,.08), transparent 65%)",
            filter: "blur(10px)",
            transform:
                "translate(-50%, -50%)",
            transition:
                "opacity .4s ease"
        }
    );

    window.addEventListener(
        "mousemove",
        event => {

            glow.style.left =
                `${event.clientX}px`;

            glow.style.top =
                `${event.clientY}px`;

            glow.style.opacity = "1";

        }
    );

}


/* ============================================================
   KEYBOARD NAVIGATION
   ============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "ArrowRight") {

            goToPage(currentPage + 1);

        }

    }
);


/* ============================================================
   PREVENT ACCIDENTAL MAIN PAGE SCROLL
============================================================ */

document.addEventListener(
    "wheel",
    event => {

        const activePage =
            pages[currentPage];

        const scrollContainer =
            activePage.querySelector(
                ".scroll-page"
            );

        if (!scrollContainer) {

            event.preventDefault();

        }

    },
    {
        passive: false
    }
);


/* ============================================================
   TOUCH SWIPE
   NOTE:
   Swipe does NOT navigate pages.
   It only allows internal section scrolling.
============================================================ */

let touchStartY = 0;

document.addEventListener(
    "touchstart",
    event => {

        if (!event.touches.length) {
            return;
        }

        touchStartY =
            event.touches[0].clientY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchmove",
    event => {

        const activePage =
            pages[currentPage];

        const scrollContainer =
            activePage.querySelector(
                ".scroll-page"
            );

        if (!scrollContainer) {
            return;
        }

        /*
         * Let the browser handle natural
         * internal scrolling.
         */

    },
    {
        passive: true
    }
);


/* ============================================================
   BUTTON RIPPLE
============================================================ */

document
    .querySelectorAll(
        ".next-btn, .answer-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const rect =
                    button.getBoundingClientRect();

                const ripple =
                    document.createElement(
                        "span"
                    );

                Object.assign(
                    ripple.style,
                    {
                        position: "absolute",
                        left:
                            `${event.clientX - rect.left}px`,
                        top:
                            `${event.clientY - rect.top}px`,
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background:
                            "rgba(255,255,255,.25)",
                        transform:
                            "translate(-50%,-50%) scale(0)",
                        pointerEvents: "none",
                        animation:
                            "buttonRipple .6s ease-out forwards"
                    }
                );

                button.style.position =
                    "relative";

                button.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 650);

            }
        );

    });


/* ============================================================
   RIPPLE KEYFRAMES
============================================================ */

const rippleStyle =
    document.createElement("style");

rippleStyle.textContent = `

@keyframes buttonRipple {

    0% {
        transform:
            translate(-50%, -50%)
            scale(0);
        opacity: 1;
    }

    100% {
        transform:
            translate(-50%, -50%)
            scale(35);
        opacity: 0;
    }

}

`;

document.head.appendChild(rippleStyle);


/* ============================================================
   CARD TILT
============================================================ */

function setupCardTilt() {

    const cards =
        document.querySelectorAll(
            ".flip-card"
        );

    const touchDevice =
        window.matchMedia(
            "(hover: none)"
        ).matches;

    if (touchDevice) {
        return;
    }

    cards.forEach(card => {

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
                    ((y - centerY) /
                        centerY) *
                    -4;

                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    4;

                card.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}

setupCardTilt();


/* ============================================================
   ACTIVE PAGE CARD ANIMATION
============================================================ */

function animateVisibleCards() {

    const activePage =
        pages[currentPage];

    if (!activePage) {
        return;
    }

    const cards =
        activePage.querySelectorAll(
            ".flip-card"
        );

    cards.forEach(
        (card, index) => {

            card.style.animationDelay =
                `${index * 80}ms`;

        }
    );

}


/* ============================================================
   OBSERVE PAGE CHANGES
============================================================ */

const pageObserver =
    new MutationObserver(() => {

        animateVisibleCards();

    });

pages.forEach(page => {

    pageObserver.observe(
        page,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );

});


/* ============================================================
   INIT
============================================================ */

initialize();
animateVisibleCards();


/* ============================================================
   FINAL CONSOLE MESSAGE
============================================================ */

console.log(
    "%cMaybe Us — Leo × Judy",
    `
        font-size:18px;
        font-weight:bold;
        color:#e9c8ff;
    `
);

console.log(
    "%cMade with a little too much effort.",
    `
        font-size:12px;
        color:#aaa;
    `
);
