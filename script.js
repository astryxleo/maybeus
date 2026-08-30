/* ============================================================
   JUDY × LEO EXPERIENCE
   Main interaction controller
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* ========================================================
       SELECT ELEMENTS
    ======================================================== */

    const pages = Array.from(
        document.querySelectorAll(".page")
    );

    const nextButtons =
        document.querySelectorAll(
            "[data-next]"
        );

    const dots =
        document.querySelectorAll(
            ".page-dot"
        );

    const progressFill =
        document.getElementById(
            "progressFill"
        );

    const progressCounter =
        document.getElementById(
            "progressCounter"
        );

    const transitionOverlay =
        document.getElementById(
            "transitionOverlay"
        );

    const cursorLight =
        document.querySelector(
            ".cursor-light"
        );

    const cursorRing =
        document.querySelector(
            ".cursor-ring"
        );

    const yesButton =
        document.getElementById(
            "yesButton"
        );

    const timeButton =
        document.getElementById(
            "timeButton"
        );

    const answerMessage =
        document.getElementById(
            "answerMessage"
        );

    const particleContainer =
        document.getElementById(
            "proposalParticles"
        );


    /* ========================================================
       STATE
    ======================================================== */

    let currentPage = 0;

    let isChangingPage = false;

    let touchStartY = 0;

    let touchStartX = 0;

    let scrollDebounce = null;


    /* ========================================================
       PAGE COUNT
    ======================================================== */

    const totalPages =
        pages.length;


    /* ========================================================
       INITIAL SETUP
    ======================================================== */

    pages.forEach(
        (page, index) => {

            page.classList.toggle(
                "active",
                index === 0
            );

        }
    );


    /* ========================================================
       UPDATE PROGRESS
    ======================================================== */

    function updateProgress(index) {

        const percentage =
            ((index + 1) / totalPages) * 100;


        if (progressFill) {

            progressFill.style.width =
                percentage + "%";

        }


        if (progressCounter) {

            const current =
                String(index + 1)
                    .padStart(2, "0");

            const total =
                String(totalPages)
                    .padStart(2, "0");

            progressCounter.textContent =
                current + " / " + total;

        }

    }


    /* ========================================================
       UPDATE DOTS
    ======================================================== */

    function updateDots(index) {

        dots.forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    "active",
                    dotIndex === index
                );

                dot.classList.toggle(
                    "locked",
                    dotIndex < index
                );

            }
        );

    }


    /* ========================================================
       ACTIVATE PAGE
    ======================================================== */

    function activatePage(index) {

        pages.forEach(
            (page, pageIndex) => {

                page.classList.toggle(
                    "active",
                    pageIndex === index
                );

            }
        );


        updateProgress(index);

        updateDots(index);

    }


    /* ========================================================
       PAGE TRANSITION
    ======================================================== */

    function goToPage(index) {

        if (isChangingPage) {
            return;
        }


        if (index < 0) {
            return;
        }


        if (index >= totalPages) {
            return;
        }


        if (index === currentPage) {
            return;
        }


        /*
         * The experience is intentionally forward-only.
         */

        if (index < currentPage) {
            return;
        }


        isChangingPage = true;


        if (transitionOverlay) {

            transitionOverlay.classList.add(
                "active"
            );

        }


        setTimeout(() => {

            currentPage = index;

            activatePage(index);


            pages[index].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


        }, 180);


        setTimeout(() => {

            if (transitionOverlay) {

                transitionOverlay.classList.remove(
                    "active"
                );

            }

            isChangingPage = false;

        }, 800);

    }


    /* ========================================================
       NEXT BUTTONS
    ======================================================== */

    nextButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const target =
                        Number(
                            button.dataset.next
                        );


                    goToPage(target);

                }
            );

        }
    );


    /* ========================================================
       DOT NAVIGATION
       
       Forward only.
       Previous pages cannot be selected.
    ======================================================== */

    dots.forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    if (
                        index <= currentPage
                    ) {
                        return;
                    }


                    goToPage(index);

                }
            );

        }
    );


    /* ========================================================
       MANUAL SCROLL DETECTION
       
       Allows natural scrolling while maintaining
       the progress UI.
    ======================================================== */

    function detectPageFromScroll() {

        let bestIndex =
            currentPage;

        let bestDistance =
            Infinity;


        const viewportCenter =
            window.innerHeight / 2;


        pages.forEach(
            (page, index) => {

                const rect =
                    page.getBoundingClientRect();


                const center =
                    rect.top +
                    rect.height / 2;


                const distance =
                    Math.abs(
                        center -
                        viewportCenter
                    );


                if (
                    distance <
                    bestDistance
                ) {

                    bestDistance =
                        distance;

                    bestIndex =
                        index;

                }

            }
        );


        /*
         * Only move the experience forward.
         */

        if (
            bestIndex >
            currentPage
        ) {

            currentPage =
                bestIndex;

            activatePage(
                currentPage
            );

        }

    }


    window.addEventListener(
        "scroll",
        () => {

            clearTimeout(
                scrollDebounce
            );


            scrollDebounce =
                setTimeout(
                    detectPageFromScroll,
                    100
                );

        },
        {
            passive: true
        }
    );


    /* ========================================================
       CARD FLIPS
    ======================================================== */

    const reasonCards =
        document.querySelectorAll(
            ".reason-card"
        );


    reasonCards.forEach(
        card => {

            card.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    card.classList.toggle(
                        "flipped"
                    );

                }
            );

        }
    );


    /* ========================================================
       CURSOR SYSTEM
    ======================================================== */

    let mouseX = 0;

    let mouseY = 0;

    let ringX = 0;

    let ringY = 0;


    if (
        cursorLight &&
        cursorRing
    ) {

        window.addEventListener(
            "pointermove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                cursorLight.style.left =
                    mouseX + "px";

                cursorLight.style.top =
                    mouseY + "px";

            },
            {
                passive: true
            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX) *
                0.18;

            ringY +=
                (mouseY - ringY) *
                0.18;


            cursorRing.style.left =
                ringX + "px";

            cursorRing.style.top =
                ringY + "px";


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();

    }


    /* ========================================================
       MAGNETIC BUTTON EFFECT
    ======================================================== */

    const magneticElements =
        document.querySelectorAll(
            ".main-button, .answer-button"
        );


    magneticElements.forEach(
        element => {

            element.addEventListener(
                "pointermove",
                event => {

                    if (
                        window.matchMedia(
                            "(hover: none)"
                        ).matches
                    ) {
                        return;
                    }


                    const rect =
                        element.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    const moveX =
                        x * 0.08;

                    const moveY =
                        y * 0.08;


                    element.style.transform =
                        "translate(" +
                        moveX +
                        "px, " +
                        moveY +
                        "px)";

                }
            );


            element.addEventListener(
                "pointerleave",
                () => {

                    element.style.transform =
                        "";

                }
            );

        }
    );


    /* ========================================================
       PROPOSAL PARTICLES
    ======================================================== */

    function createProposalParticles() {

        if (!particleContainer) {
            return;
        }


        const particleCount = 55;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "proposal-particle";


            particle.style.left =
                Math.random() * 100 +
                "%";


            particle.style.animationDuration =
                8 +
                Math.random() * 14 +
                "s";


            particle.style.animationDelay =
                Math.random() * 12 +
                "s";


            const size =
                2 +
                Math.random() * 3;


            particle.style.width =
                size + "px";

            particle.style.height =
                size + "px";


            particleContainer.appendChild(
                particle
            );

        }

    }


    createProposalParticles();


    /* ========================================================
       YES RESPONSE
    ======================================================== */

    if (yesButton) {

        yesButton.addEventListener(
            "click",
            () => {

                if (
                    yesButton.disabled
                ) {
                    return;
                }


                yesButton.disabled =
                    true;

                timeButton.disabled =
                    true;


                answerMessage.textContent =
                    "That made Leo very happy. ♡";


                yesButton.style.opacity =
                    "0.65";

                timeButton.style.opacity =
                    "0.4";


                launchCelebration();


                createBigHeart();


            }
        );

    }


    /* ========================================================
       TIME RESPONSE
    ======================================================== */

    if (timeButton) {

        timeButton.addEventListener(
            "click",
            () => {

                answerMessage.textContent =
                    "Of course. Take all the time you need. ♡";


                timeButton.animate(
                    [
                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(0.96)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }
                    ],
                    {
                        duration: 350,
                        easing:
                            "ease-out"
                    }
                );

            }
        );

    }


    /* ========================================================
       CELEBRATION
    ======================================================== */

    function launchCelebration() {

        const symbols = [
            "♡",
            "✦",
            "✧",
            "·"
        ];


        for (
            let i = 0;
            i < 50;
            i++
        ) {

            const item =
                document.createElement(
                    "div"
                );


            item.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            item.style.position =
                "fixed";

            item.style.left =
                Math.random() *
                100 +
                "vw";

            item.style.top =
                55 +
                Math.random() *
                15 +
                "vh";


            item.style.zIndex =
                "10000";

            item.style.pointerEvents =
                "none";


            item.style.color =
                "#f1c5ff";


            item.style.fontSize =
                12 +
                Math.random() *
                22 +
                "px";


            item.style.textShadow =
                "0 0 20px rgba(255,180,240,0.9)";


            document.body.appendChild(
                item
            );


            const x =
                (Math.random() - 0.5) *
                650;


            const y =
                -(250 +
                Math.random() *
                550);


            const rotate =
                (Math.random() - 0.5) *
                720;


            item.animate(
                [
                    {
                        transform:
                            "translate(0,0) rotate(0deg) scale(0.4)",
                        opacity: 0
                    },

                    {
                        transform:
                            "translate(0,-60px) rotate(30deg) scale(1)",
                        opacity: 1,
                        offset: 0.12
                    },

                    {
                        transform:
                            "translate(" +
                            x +
                            "px," +
                            y +
                            "px) rotate(" +
                            rotate +
                            "deg) scale(0.7)",
                        opacity: 0
                    }
                ],
                {
                    duration:
                        1800 +
                        Math.random() *
                        1500,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }
            );


            setTimeout(
                () => {

                    item.remove();

                },
                3500
            );

        }

    }


    /* ========================================================
       BIG HEART
    ======================================================== */

    function createBigHeart() {

        const heart =
            document.createElement(
                "div"
            );


        heart.textContent =
            "♡";


        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";


        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";


        heart.style.transform =
            "translate(-50%,-50%) scale(0)";


        heart.style.color =
            "#f2c5e7";


        heart.style.fontSize =
            "120px";


        heart.style.textShadow =
            "0 0 70px rgba(255,150,220,0.5)";


        document.body.appendChild(
            heart
        );


        heart.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%,-50%) scale(1.2)",
                    opacity: 1,
                    offset: 0.35
                },

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 0
                }
            ],
            {
                duration: 1800,
                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );


        setTimeout(
            () => {
                heart.remove();
            },
            1900
        );

    }


    /* ========================================================
       KEYBOARD
       
       ArrowRight / PageDown / Space
       = NEXT
       
       ArrowLeft intentionally does nothing.
    ======================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "ArrowRight" ||
                event.key === "PageDown"
            ) {

                event.preventDefault();

                goToPage(
                    currentPage + 1
                );

            }


            if (
                event.key === " "
            ) {

                const target =
                    event.target;


                if (
                    target.tagName !==
                    "BUTTON"
                ) {

                    event.preventDefault();

                    goToPage(
                        currentPage + 1
                    );

                }

            }

        }
    );


    /* ========================================================
       TOUCH SWIPE
    ======================================================== */

    document.addEventListener(
        "touchstart",
        event => {

            if (
                !event.touches.length
            ) {
                return;
            }


            touchStartY =
                event.touches[0].clientY;

            touchStartX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "touchend",
        event => {

            if (
                !event.changedTouches.length
            ) {
                return;
            }


            const endY =
                event.changedTouches[0]
                    .clientY;


            const endX =
                event.changedTouches[0]
                    .clientX;


            const differenceY =
                touchStartY -
                endY;


            const differenceX =
                touchStartX -
                endX;


            /*
             * Only strong vertical upward
             * swipe triggers next.
             */

            if (
                Math.abs(differenceY) >
                70 &&
                Math.abs(differenceY) >
                Math.abs(differenceX)
            ) {

                if (
                    differenceY > 0
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


    /* ========================================================
       RESIZE
    ======================================================== */

    window.addEventListener(
        "resize",
        () => {

            /*
             * Don't forcibly scroll on resize.
             * This prevents the page from jumping.
             */

            activatePage(
                currentPage
            );

        }
    );


    /* ========================================================
       INITIAL UI
    ======================================================== */

    updateProgress(0);

    updateDots(0);

});
