/* =========================================================
   JUDY × LEO
   CINEMATIC INTERACTION ENGINE
   ========================================================= */

(() => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const pages =
        [...document.querySelectorAll(".page")];

    const dots =
        [...document.querySelectorAll(".dot")];

    const nextButtons =
        [...document.querySelectorAll(".next")];

    const progress =
        document.getElementById("progress");

    const counter =
        document.getElementById("counter");

    const cursorGlow =
        document.querySelector(".cursor-glow");


    /* =====================================================
       STATE
    ====================================================== */

    let currentPage = 0;

    let changing = false;

    let celebrationUnlocked = false;


    /* =====================================================
       CREATE BACKGROUND PARTICLES
    ====================================================== */

    const particleContainer =
        document.getElementById("particles");


    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.setProperty(
            "--duration",
            `${5 + Math.random() * 9}s`
        );

        particle.style.setProperty(
            "--delay",
            `${Math.random() * -10}s`
        );

        particleContainer.appendChild(
            particle
        );

    }


    /* =====================================================
       UPDATE UI
    ====================================================== */

    function updateUI() {

        const total =
            pages.length;

        const number =
            currentPage + 1;


        progress.style.width =
            `${number / total * 100}%`;


        counter.textContent =
            `${String(number).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;


        dots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentPage
                );

            }
        );

    }


    /* =====================================================
       RESET PAGE SCROLL
    ====================================================== */

    function resetScroll(page) {

        const scroll =
            page.querySelector(
                ".page-scroll"
            );


        if (scroll) {

            scroll.scrollTop = 0;

        }

    }


    /* =====================================================
       PAGE TRANSITION
    ====================================================== */

    function goToPage(target) {

        if (changing) return;

        if (
            target < 0 ||
            target >= pages.length
        ) {

            return;

        }


        /*
         * PAGE 09 IS LOCKED
         */

        if (
            target === 8 &&
            !celebrationUnlocked
        ) {

            return;

        }


        if (
            target === currentPage
        ) {

            return;

        }


        changing = true;


        const previous =
            pages[currentPage];

        const next =
            pages[target];


        previous.classList.remove(
            "active"
        );


        next.classList.add(
            "active"
        );


        resetScroll(next);


        currentPage =
            target;


        updateUI();


        setTimeout(
            () => {

                changing = false;

            },
            950
        );

    }


    /* =====================================================
       NEXT BUTTONS
    ====================================================== */

    nextButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    goToPage(
                        currentPage + 1
                    );

                }
            );

        }
    );


    /* =====================================================
       FLIP CARDS
    ====================================================== */

    const cards =
        [...document.querySelectorAll(".flip-card")];


    cards.forEach(
        card => {

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
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        card.classList.toggle(
                            "flipped"
                        );

                    }

                }
            );


            card.setAttribute(
                "tabindex",
                "0"
            );

        }
    );


    /* =====================================================
       CARD 3D TILT
    ====================================================== */

    cards.forEach(
        card => {

            const flip =
                card.querySelector(
                    ".flip"
                );


            card.addEventListener(
                "pointermove",
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


                    const rotateY =
                        (
                            x /
                            rect.width -
                            .5
                        ) * 10;


                    const rotateX =
                        (
                            .5 -
                            y /
                            rect.height
                        ) * 10;


                    flip.style.transform =
                        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "pointerleave",
                () => {

                    if (
                        !card.classList.contains(
                            "flipped"
                        )
                    ) {

                        flip.style.transform =
                            "";

                    }

                }
            );

        }
    );


    /* =====================================================
       CURSOR LIGHT
    ====================================================== */

    window.addEventListener(
        "pointermove",
        event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       MAGNETIC BUTTONS
    ====================================================== */

    document
        .querySelectorAll(
            ".main-button, .answer, .replay"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "pointermove",
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
                            `translate(${x * .04}px,${y * .04}px)`;

                    }
                );


                button.addEventListener(
                    "pointerleave",
                    () => {

                        button.style.transform =
                            "";

                    }
                );

            }
        );


    /* =====================================================
       KEYBOARD
    ====================================================== */

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

        }
    );


    /* =====================================================
       PROPOSAL RESPONSE
    ====================================================== */

    const yes =
        document.getElementById(
            "yes"
        );


    const maybe =
        document.getElementById(
            "maybe"
        );


    const answerMessage =
        document.getElementById(
            "answerMessage"
        );


    const messageIcon =
        document.getElementById(
            "messageIcon"
        );


    const messageTitle =
        document.getElementById(
            "messageTitle"
        );


    const messageText =
        document.getElementById(
            "messageText"
        );


    const messageClose =
        document.getElementById(
            "messageClose"
        );


    /* =====================================================
       MAYBE
    ====================================================== */

    maybe.addEventListener(
        "click",
        () => {

            messageIcon.textContent =
                "✦";


            messageTitle.textContent =
                "Take your time.";


            messageText.textContent =
                "There is no pressure. I just wanted to be honest about how I feel.";


            answerMessage.classList.add(
                "show"
            );

        }
    );


    /* =====================================================
       CLOSE MESSAGE
    ====================================================== */

    messageClose.addEventListener(
        "click",
        () => {

            answerMessage.classList.remove(
                "show"
            );

        }
    );


    /* =====================================================
       YES
    ====================================================== */

    yes.addEventListener(
        "click",
        () => {

            celebrationUnlocked =
                true;


            unlockCelebration();

        }
    );


    /* =====================================================
       UNLOCK PAGE 09
    ====================================================== */

    function unlockCelebration() {

        /*
         * BIG SCREEN FLASH
         */

        const flash =
            document.getElementById(
                "screenFlash"
            );


        flash.classList.remove(
            "flash"
        );


        void flash.offsetWidth;


        flash.classList.add(
            "flash"
        );


        /*
         * CREATE CELEBRATION
         */

        createCelebrationParticles();

        createConfetti();


        /*
         * GO TO PAGE 09
         */

        setTimeout(
            () => {

                goToPage(8);

            },
            450
        );

    }


    /* =====================================================
       CELEBRATION PARTICLES
    ====================================================== */

    function createCelebrationParticles() {

        const container =
            document.getElementById(
                "celebrationParticles"
            );


        container.innerHTML = "";


        const symbols = [
            "♥",
            "✦",
            "✧",
            "⋆",
            "♡"
        ];


        for (
            let i = 0;
            i < 45;
            i++
        ) {

            const element =
                document.createElement(
                    "span"
                );


            element.className =
                "celeb-particle";


            element.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            const angle =
                Math.random() *
                Math.PI *
                2;


            const distance =
                150 +
                Math.random() *
                500;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            element.style.setProperty(
                "--x",
                `${x}px`
            );


            element.style.setProperty(
                "--y",
                `${y}px`
            );


            element.style.setProperty(
                "--rotate",
                `${Math.random() * 720 - 360}deg`
            );


            element.style.setProperty(
                "--size",
                `${10 + Math.random() * 18}px`
            );


            element.style.setProperty(
                "--delay",
                `${Math.random() * .7}s`
            );


            container.appendChild(
                element
            );

        }

    }


    /* =====================================================
       CONFETTI
    ====================================================== */

    function createConfetti() {

        const pieces =
            100;


        for (
            let i = 0;
            i < pieces;
            i++
        ) {

            const piece =
                document.createElement(
                    "span"
                );


            piece.className =
                "celeb-confetti";


            piece.style.left =
                `${Math.random() * 100}%`;


            piece.style.setProperty(
                "--duration",
                `${2.5 + Math.random() * 3}s`
            );


            piece.style.setProperty(
                "--delay",
                `${Math.random() * 1.5}s`
            );


            piece.style.setProperty(
                "--drift",
                `${Math.random() * 300 - 150}px`
            );


            /*
             * Use CSS custom properties for
             * varied appearance without
             * creating another stylesheet.
             */

            const variants = [
                "rgba(237,169,195,.9)",
                "rgba(255,255,255,.75)",
                "rgba(211,181,220,.8)",
                "rgba(245,210,190,.8)"
            ];


            piece.style.background =
                variants[
                    Math.floor(
                        Math.random() *
                        variants.length
                    )
                ];


            piece.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            document.body.appendChild(
                piece
            );


            setTimeout(
                () => {

                    piece.remove();

                },
                6500
            );

        }

    }


    /* =====================================================
       REPLAY CELEBRATION
    ====================================================== */

    const replay =
        document.getElementById(
            "replay"
        );


    replay.addEventListener(
        "click",
        () => {

            const page =
                pages[8];


            page.classList.remove(
                "active"
            );


            void page.offsetWidth;


            page.classList.add(
                "active"
            );


            createCelebrationParticles();

            createConfetti();

        }
    );


    /* =====================================================
       CLICK OUTSIDE MESSAGE
    ====================================================== */

    answerMessage.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                answerMessage
            ) {

                answerMessage.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =====================================================
       TOUCH SUPPORT
    ====================================================== */

    let touchStartX = 0;

    let touchStartY = 0;


    document.addEventListener(
        "touchstart",
        event => {

            const touch =
                event.touches[0];


            touchStartX =
                touch.clientX;


            touchStartY =
                touch.clientY;

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
                touch.clientX -
                touchStartX;


            const deltaY =
                touch.clientY -
                touchStartY;


            /*
             * Only a clear horizontal swipe
             * advances the experience.
             */

            if (
                Math.abs(deltaX) > 100 &&
                Math.abs(deltaX) >
                Math.abs(deltaY) * 1.5 &&
                deltaX < 0
            ) {

                goToPage(
                    currentPage + 1
                );

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       INITIALIZE
    ====================================================== */

    updateUI();


})();
