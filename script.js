/* =========================================================
   JUDY × LEO
   INTERACTION ENGINE
   ========================================================= */

(() => {

    "use strict";


    /* =====================================================
       SELECT ELEMENTS
    ====================================================== */

    const pages =
        [...document.querySelectorAll(".page")];

    const nextButtons =
        [...document.querySelectorAll("[data-next]")];

    const dots =
        [...document.querySelectorAll(".side-dot")];

    const progressFill =
        document.getElementById("progressFill");

    const pageCounter =
        document.getElementById("pageCounter");

    const toast =
        document.getElementById("toast");


    /* =====================================================
       STATE
    ====================================================== */

    let currentPage = 0;

    let isAnimating = false;


    /* =====================================================
       UPDATE TOP UI
    ====================================================== */

    function updateUI() {

        const total =
            pages.length;

        const shown =
            currentPage + 1;


        progressFill.style.width =
            `${(shown / total) * 100}%`;


        pageCounter.textContent =
            `${String(shown).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentPage
            );

        });

    }


    /* =====================================================
       RESET INNER SCROLL
    ====================================================== */

    function resetPageScroll(page) {

        const inner =
            page.querySelector(".page-inner");

        if (!inner) return;

        inner.scrollTop = 0;

    }


    /* =====================================================
       GO TO PAGE
    ====================================================== */

    function goToPage(index) {

        if (isAnimating) return;

        if (index < 0) return;

        if (index >= pages.length) return;

        if (index === currentPage) return;


        isAnimating = true;


        const oldPage =
            pages[currentPage];

        const newPage =
            pages[index];


        oldPage.classList.remove(
            "active"
        );


        newPage.classList.add(
            "active"
        );


        currentPage =
            index;


        updateUI();

        resetPageScroll(
            newPage
        );


        window.setTimeout(() => {

            isAnimating = false;

        }, 850);

    }


    /* =====================================================
       NEXT BUTTONS
    ====================================================== */

    nextButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                goToPage(
                    currentPage + 1
                );

            }
        );

    });


    /* =====================================================
       SIDE DOTS
       ONLY ALLOW FORWARD MOVEMENT
    ====================================================== */

    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                if (
                    index >
                    currentPage
                ) {

                    goToPage(index);

                }

            }
        );

    });


    /* =====================================================
       FLIP CARDS
    ====================================================== */

    const flipCards =
        [...document.querySelectorAll(".flip-card")];


    flipCards.forEach(card => {


        function flip() {

            card.classList.toggle(
                "flipped"
            );


            card.setAttribute(
                "aria-pressed",
                card.classList.contains(
                    "flipped"
                )
                    ? "true"
                    : "false"
            );

        }


        card.setAttribute(
            "role",
            "button"
        );


        card.setAttribute(
            "aria-pressed",
            "false"
        );


        card.addEventListener(
            "click",
            flip
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    flip();

                }

            }
        );

    });


    /* =====================================================
       PAGE SCROLL
       WHEEL STAYS INSIDE PAGE
    ====================================================== */

    pages.forEach(page => {

        const inner =
            page.querySelector(
                ".page-inner"
            );


        if (!inner) return;


        inner.addEventListener(
            "wheel",
            event => {

                event.stopPropagation();

            },
            {
                passive: true
            }
        );


        inner.addEventListener(
            "touchmove",
            event => {

                event.stopPropagation();

            },
            {
                passive: true
            }
        );

    });


    /* =====================================================
       KEYBOARD NAVIGATION
       RIGHT / PAGEDOWN = NEXT
       NO BACKWARD NAVIGATION
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                ["INPUT", "TEXTAREA", "SELECT"]
                    .includes(
                        document.activeElement?.tagName
                    )
            ) {

                return;

            }


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
                event.key === "Home" &&
                currentPage === 0
            ) {

                const inner =
                    pages[0]
                        .querySelector(
                            ".page-inner"
                        );


                inner?.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }

        }
    );


    /* =====================================================
       POINTER GLOW
    ====================================================== */

    const app =
        document.getElementById(
            "app"
        );


    window.addEventListener(
        "pointermove",
        event => {

            const pointerX =
                (
                    event.clientX /
                    window.innerWidth
                ) * 100;


            const pointerY =
                (
                    event.clientY /
                    window.innerHeight
                ) * 100;


            app.style.background = `

                radial-gradient(
                    circle at
                    ${pointerX}%
                    ${pointerY}%,

                    rgba(
                        233,
                        168,
                        193,
                        .055
                    ),

                    transparent 26%
                ),

                radial-gradient(
                    circle at 50% 0%,
                    rgba(
                        216,
                        130,
                        164,
                        .08
                    ),
                    transparent 38%
                ),

                radial-gradient(
                    circle at 0% 100%,
                    rgba(
                        151,
                        98,
                        179,
                        .06
                    ),
                    transparent 34%
                ),

                #08070c

            `;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOAST
    ====================================================== */

    function showToast(
        message,
        duration = 2300
    ) {

        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        window.clearTimeout(
            showToast.timer
        );


        showToast.timer =
            window.setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                duration
            );

    }


    window.setTimeout(
        () => {

            showToast(
                "Tap the cards when you reach them ✦"
            );

        },
        1500
    );


    /* =====================================================
       PROPOSAL RESPONSE
    ====================================================== */

    const yesBtn =
        document.getElementById(
            "yesBtn"
        );


    const maybeBtn =
        document.getElementById(
            "maybeBtn"
        );


    const responseCard =
        document.getElementById(
            "responseCard"
        );


    const responseIcon =
        document.getElementById(
            "responseIcon"
        );


    const responseTitle =
        document.getElementById(
            "responseTitle"
        );


    const responseText =
        document.getElementById(
            "responseText"
        );


    const closeResponse =
        document.getElementById(
            "closeResponse"
        );


    function showResponse(type) {


        if (type === "yes") {

            responseIcon.textContent =
                "♥";


            responseTitle.textContent =
                "You just made Leo smile.";


            responseText.textContent =
                "Thank you, Judy. I'm really happy I finally said it.";

        }


        else {

            responseIcon.textContent =
                "✦";


            responseTitle.textContent =
                "Take your time.";


            responseText.textContent =
                "There is genuinely no pressure. I just wanted you to know how I feel.";

        }


        responseCard.classList.add(
            "show"
        );

    }


    yesBtn?.addEventListener(
        "click",
        () => {

            showResponse(
                "yes"
            );

        }
    );


    maybeBtn?.addEventListener(
        "click",
        () => {

            showResponse(
                "maybe"
            );

        }
    );


    closeResponse?.addEventListener(
        "click",
        () => {

            responseCard.classList.remove(
                "show"
            );

        }
    );


    /* =====================================================
       MAGNETIC BUTTON EFFECT
    ====================================================== */

    document
        .querySelectorAll(
            ".next-btn, .answer-btn"
        )
        .forEach(button => {


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
                        `translate(
                            ${x * .035}px,
                            ${y * .035}px
                        )`;

                }
            );


            button.addEventListener(
                "pointerleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        });


    /* =====================================================
       INTERSECTION OBSERVER
    ====================================================== */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "seen"
                            );

                        }

                    }
                );

            },
            {

                threshold: .12,

                rootMargin:
                    "0px 0px -5% 0px"

            }
        );


    document
        .querySelectorAll(
            ".page-inner > *"
        )
        .forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );


    /* =====================================================
       RESIZE
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            document.documentElement
                .style
                .setProperty(
                    "--vw",
                    `${window.innerWidth}px`
                );

        }
    );


    /* =====================================================
       INITIAL UI
    ====================================================== */

    updateUI();


    /* =====================================================
       DECORATIVE PARTICLES
    ====================================================== */

    const particleLayer =
        document.createElement(
            "div"
        );


    particleLayer.setAttribute(
        "aria-hidden",
        "true"
    );


    particleLayer.style.cssText = `

        position:absolute;

        inset:0;

        pointer-events:none;

        z-index:-1;

        overflow:hidden;

    `;


    for (
        let i = 0;
        i < 24;
        i++
    ) {


        const particle =
            document.createElement(
                "i"
            );


        const size =
            Math.random() * 3 + 1;


        const left =
            Math.random() * 100;


        const top =
            Math.random() * 100;


        const delay =
            Math.random() * 8;


        const duration =
            6 +
            Math.random() * 8;


        particle.style.cssText = `

            position:absolute;

            width:${size}px;

            height:${size}px;

            left:${left}%;

            top:${top}%;

            border-radius:50%;

            background:
                rgba(
                    233,
                    168,
                    193,
                    .28
                );

            box-shadow:
                0 0
                ${size * 5}px
                rgba(
                    233,
                    168,
                    193,
                    .2
                );

            animation:
                particleFloat
                ${duration}s
                ease-in-out
                ${delay}s
                infinite
                alternate;

        `;


        particleLayer.appendChild(
            particle
        );

    }


    app.appendChild(
        particleLayer
    );


    /* =====================================================
       PARTICLE ANIMATION
    ====================================================== */

    const particleStyle =
        document.createElement(
            "style"
        );


    particleStyle.textContent = `

        @keyframes particleFloat {

            0% {

                transform:
                    translate3d(
                        0,
                        0,
                        0
                    );

                opacity: .15;

            }

            50% {

                opacity: .65;

            }

            100% {

                transform:
                    translate3d(
                        35px,
                        -70px,
                        0
                    );

                opacity: .1;

            }

        }

    `;


    document.head.appendChild(
        particleStyle
    );


    /* =====================================================
       MEWWWW EASTER EGG
    ====================================================== */

    let typed = "";


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key.length !== 1
            ) {

                return;

            }


            typed +=
                event.key.toLowerCase();


            if (
                typed.length > 6
            ) {

                typed =
                    typed.slice(-6);

            }


            if (
                typed === "mewwww"
            ) {

                createHeartBurst();

                showToast(
                    "mewwww ♥",
                    1800
                );

                typed = "";

            }

        }
    );


    /* =====================================================
       HEART BURST
    ====================================================== */

    function createHeartBurst() {


        for (
            let i = 0;
            i < 18;
            i++
        ) {


            const heart =
                document.createElement(
                    "span"
                );


            const x =
                window.innerWidth / 2;


            const y =
                window.innerHeight / 2;


            heart.textContent =
                "♥";


            heart.style.cssText = `

                position:fixed;

                left:${x}px;

                top:${y}px;

                z-index:100;

                pointer-events:none;

                color:#e9a8c1;

                font-size:
                    ${10 + Math.random() * 18}px;

                animation:
                    burstHeart
                    1.4s
                    ease-out
                    forwards;

                --x:
                    ${Math.random() * 360 - 180}px;

                --y:
                    ${Math.random() * 300 - 190}px;

            `;


            document.body.appendChild(
                heart
            );


            setTimeout(
                () => {

                    heart.remove();

                },
                1500
            );

        }

    }


    /* =====================================================
       HEART BURST ANIMATION
    ====================================================== */

    const burstStyle =
        document.createElement(
            "style"
        );


    burstStyle.textContent = `

        @keyframes burstHeart {

            0% {

                transform:
                    translate(
                        -50%,
                        -50%
                    )
                    scale(.4);

                opacity:0;

            }


            15% {

                opacity:1;

            }


            100% {

                transform:
                    translate(
                        calc(
                            -50% + var(--x)
                        ),
                        calc(
                            -50% + var(--y)
                        )
                    )
                    scale(1);

                opacity:0;

            }

        }

    `;


    document.head.appendChild(
        burstStyle
    );


})();
