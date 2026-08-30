/*
================================================================
JAS — CINEMATIC PROPOSAL WEBSITE
JAVASCRIPT
================================================================

This file controls:

1. Page navigation
2. Page transition animations
3. Page counter
4. Progress bar
5. Reason card 3D flipping
6. Cursor-following glow
7. Floating stars
8. Canvas particles
9. Button glow
10. Final cinematic effects

IMPORTANT:

- Mouse wheel DOES NOT change pages.
- Touch scrolling DOES NOT change pages.
- Only the main button changes pages.
- There is NO back button.
================================================================
*/


/* ==============================================================
   GET IMPORTANT HTML ELEMENTS
   ============================================================== */

var pages = document.querySelectorAll(".page");

var nextButton =
    document.getElementById("next-button");

var currentPage =
    document.getElementById("current-page");

var totalPages =
    document.getElementById("total-pages");

var progressBar =
    document.getElementById("progress-bar");

var cursorGlow =
    document.getElementById("cursor-glow");

var starsContainer =
    document.getElementById("stars");

var canvas =
    document.getElementById("particles");

var context =
    canvas.getContext("2d");


/* ==============================================================
   PAGE STATE
   ============================================================== */

var currentIndex = 0;

var isChangingPage = false;

var pageCount = pages.length;


/* Display total number of pages */

totalPages.textContent =
    String(pageCount).padStart(2, "0");


/* ==============================================================
   UPDATE PAGE COUNTER
   ============================================================== */

function updatePageInfo() {

    currentPage.textContent =
        String(currentIndex + 1).padStart(2, "0");


    var percentage =
        ((currentIndex + 1) / pageCount) * 100;


    progressBar.style.width =
        percentage + "%";

}


/* ==============================================================
   CHANGE PAGE
   ============================================================== */

function goToNextPage() {

    /*
        Prevent multiple clicks during animation.
    */

    if (isChangingPage) {
        return;
    }


    /*
        If we are already on the last page,
        do nothing.
    */

    if (currentIndex >= pageCount - 1) {
        return;
    }


    isChangingPage = true;


    /*
        Remove active class from current page.
    */

    pages[currentIndex]
        .classList
        .remove("active");


    /*
        Move to next page.
    */

    currentIndex++;


    /*
        Wait a little before showing
        the next page.
    */

    setTimeout(function() {

        pages[currentIndex]
            .scrollTop = 0;


        pages[currentIndex]
            .classList
            .add("active");


        updatePageInfo();


        /*
            Change button text depending
            on current page.
        */

        updateButtonText();


    }, 250);


    /*
        Unlock after transition.
    */

    setTimeout(function() {

        isChangingPage = false;

    }, 1050);

}


/* ==============================================================
   BUTTON TEXT
   ============================================================== */

function updateButtonText() {

    var buttonTexts = [

        "Begin →",

        "Continue →",

        "The tiny ones →",

        "There is more →",

        "One more thing →",

        "Keep reading →",

        "You changed something →",

        "Beyond words →",

        "The truth →",

        "One last thing →"

    ];


    if (currentIndex <
        buttonTexts.length) {

        nextButton.textContent =
            buttonTexts[currentIndex];

    }

}


/* ==============================================================
   MAIN BUTTON CLICK
   ============================================================== */

nextButton.addEventListener(
    "click",
    function() {

        /*
            Last page opens the proposal.
        */

        if (currentIndex === pageCount - 1) {

            showProposal();

            return;

        }


        /*
            Otherwise go forward.
        */

        goToNextPage();

    }
);


/* ==============================================================
   INITIAL PAGE
   ============================================================== */

updatePageInfo();

updateButtonText();


/* ==============================================================
   DISABLE PAGE CHANGING BY MOUSE WHEEL
   ==============================================================

   We DO NOT call preventDefault here because the page
   itself still needs to scroll when it contains long content.

   Wheel movement is simply ignored by our page navigation system.
   ============================================================== */


/* ==============================================================
   REASON CARD FLIP
   ============================================================== */

/*
    Event delegation is used so every card works
    without needing separate event listeners.
*/

document.addEventListener(
    "click",
    function(event) {

        var card =
            event.target.closest(".reason-card");


        /*
            If click was not on a card,
            do nothing.
        */

        if (!card) {
            return;
        }


        /*
            Flip the selected card.
        */

        card.classList.toggle("flipped");

    }
);


/* ==============================================================
   CURSOR GLOW
   ============================================================== */

var mouseX =
    window.innerWidth / 2;

var mouseY =
    window.innerHeight / 2;

var glowX = mouseX;

var glowY = mouseY;


/*
    Update target cursor position.
*/

window.addEventListener(
    "pointermove",
    function(event) {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;

    }
);


/*
    Smoothly move the glow.
*/

function animateCursor() {

    glowX +=
        (mouseX - glowX) * 0.12;

    glowY +=
        (mouseY - glowY) * 0.12;


    cursorGlow.style.left =
        glowX + "px";

    cursorGlow.style.top =
        glowY + "px";


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* ==============================================================
   BUTTON MOUSE GLOW
   ============================================================== */

document.addEventListener(
    "pointermove",
    function(event) {

        var button =
            event.target.closest(".next");


        if (!button) {
            return;
        }


        var rectangle =
            button.getBoundingClientRect();


        var x =
            event.clientX -
            rectangle.left;


        var y =
            event.clientY -
            rectangle.top;


        button.style.setProperty(
            "--mouse-x",
            x + "px"
        );


        button.style.setProperty(
            "--mouse-y",
            y + "px"
        );

    }
);


/* ==============================================================
   FLOATING STARS
   ============================================================== */

var starCount =
    window.innerWidth < 600
        ? 80
        : 140;


for (
    var i = 0;
    i < starCount;
    i++
) {

    var star =
        document.createElement("span");


    star.className =
        "star";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    star.style.animationDuration =
        5 + Math.random() * 18 + "s";


    star.style.animationDelay =
        -Math.random() * 18 + "s";


    /*
        Make a few stars larger.
    */

    if (Math.random() > 0.90) {

        star.style.width =
            "3px";

        star.style.height =
            "3px";

    }


    starsContainer.appendChild(star);

}


/* ==============================================================
   CANVAS PARTICLES
   ============================================================== */

var canvasWidth =
    window.innerWidth;

var canvasHeight =
    window.innerHeight;


/*
    Resize canvas for high DPI screens.
*/

function resizeCanvas() {

    canvasWidth =
        window.innerWidth;

    canvasHeight =
        window.innerHeight;


    var ratio =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    canvas.width =
        canvasWidth * ratio;


    canvas.height =
        canvasHeight * ratio;


    canvas.style.width =
        canvasWidth + "px";


    canvas.style.height =
        canvasHeight + "px";


    context.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* ==============================================================
   CREATE PARTICLES
   ============================================================== */

var particles = [];

var particleCount =
    window.innerWidth < 600
        ? 55
        : 100;


for (
    var p = 0;
    p < particleCount;
    p++
) {

    particles.push({

        x:
            Math.random() *
            canvasWidth,

        y:
            Math.random() *
            canvasHeight,

        vx:
            (Math.random() - 0.5)
            * 0.18,

        vy:
            (Math.random() - 0.5)
            * 0.18,

        size:
            Math.random() * 1.7
            + 0.3,

        alpha:
            Math.random() * 0.4
            + 0.05

    });

}


/* ==============================================================
   ANIMATE PARTICLES
   ============================================================== */

function animateParticles() {

    context.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );


    for (
        var i = 0;
        i < particles.length;
        i++
    ) {

        var particle =
            particles[i];


        particle.x +=
            particle.vx;


        particle.y +=
            particle.vy;


        /*
            Wrap particles around screen.
        */

        if (particle.x < 0) {

            particle.x =
                canvasWidth;

        }


        if (particle.x > canvasWidth) {

            particle.x = 0;

        }


        if (particle.y < 0) {

            particle.y =
                canvasHeight;

        }


        if (particle.y > canvasHeight) {

            particle.y = 0;

        }


        /*
            Draw particle.
        */

        context.beginPath();


        context.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );


        context.fillStyle =
            "rgba(255,255,255," +
            particle.alpha +
            ")";


        context.fill();

    }


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


/* ==============================================================
   FINAL PROPOSAL
   ============================================================== */

function showProposal() {

    /*
        Hide the navigation button.
    */

    nextButton.style.display =
        "none";


    /*
        Hide all existing pages.
    */

    for (
        var i = 0;
        i < pages.length;
        i++
    ) {

        pages[i]
            .classList
            .remove("active");

    }


    /*
        Create final proposal page.
    */

    var proposalPage =
        document.createElement("section");


    proposalPage.className =
        "page active";


    /*
        We use normal string concatenation here.
        No template literals / backticks.
    */

    proposalPage.innerHTML =

        '<div class="content">' +

            '<div class="final-glow"></div>' +

            '<span class="heart">♡</span>' +

            '<div class="eyebrow">' +
                'the question' +
            '</div>' +

            '<h2 class="title title-small">' +
                'Jas, will you be ' +
                '<em>mine?</em>' +
            '</h2>' +

            '<p class="lead">' +
                'You already know how I feel.' +
                '<br>' +
                'I just wanted to finally ask you properly.' +
            '</p>' +

            '<div class="proposal-actions">' +

                '<button ' +
                    'class="next proposal-yes" ' +
                    'id="yes-button">' +
                    'YES ♡' +
                '</button>' +

                '<button ' +
                    'class="next proposal-think" ' +
                    'id="think-button">' +
                    'I need a moment 🥹' +
                '</button>' +

            '</div>' +

        '</div>';


    /*
        Add page to website.
    */

    document
        .getElementById("app")
        .appendChild(proposalPage);


    /*
        Reset scroll.
    */

    proposalPage.scrollTop = 0;


    /*
        Update counter.
    */

    currentPage.textContent =
        "♡";


    totalPages.textContent =
        "♡";


    progressBar.style.width =
        "100%";


    /*
        Get proposal buttons.
    */

    var yesButton =
        document.getElementById(
            "yes-button"
        );


    var thinkButton =
        document.getElementById(
            "think-button"
        );


    /*
        YES button.
    */

    yesButton.addEventListener(
        "click",
        function() {

            celebrate();

        }
    );


    /*
        "I need a moment" button.
    */

    thinkButton.addEventListener(
        "click",
        function() {

            thinkButton.textContent =
                "Take your time ♡";


            setTimeout(
                function() {

                    thinkButton.textContent =
                        "I'm ready →";

                    thinkButton.onclick =
                        celebrate;

                },
                1200
            );

        }
    );

}


/* ==============================================================
   CELEBRATION
   ============================================================== */

function celebrate() {

    /*
        Remove existing pages.
    */

    var oldPages =
        document.querySelectorAll(".page");


    for (
        var i = 0;
        i < oldPages.length;
        i++
    ) {

        oldPages[i]
            .classList
            .remove("active");

    }


    /*
        Create final page.
    */

    var finalPage =
        document.createElement("section");


    finalPage.className =
        "page active";


    finalPage.innerHTML =

        '<div class="content">' +

            '<div class="final-glow"></div>' +

            '<span ' +
                'class="heart" ' +
                'style="font-size:80px">' +
                '♥' +
            '</span>' +

            '<div class="eyebrow">' +
                'and just like that...' +
            '</div>' +

            '<h1 class="title">' +
                'You said ' +
                '<em>yes.</em>' +
            '</h1>' +

            '<p class="lead">' +
                'I think I am going to remember ' +
                'this moment for a very long time.' +
            '</p>' +

            '<p class="lead">' +
                'Thank you for choosing me, Jas.' +
            '</p>' +

            '<p class="quote">' +
                'It was always you.' +
            '</p>' +

            '<p class="small">' +
                'You and only you.' +
                '<br><br>' +
                '— I' +
            '</p>' +

        '</div>';


    document
        .getElementById("app")
        .appendChild(finalPage);


    /*
        Celebration particles.
    */

    createHeartBurst();

}


/* ==============================================================
   HEART / STAR BURST
   ============================================================== */

function createHeartBurst() {

    var symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "★",
        "·"
    ];


    for (
        var i = 0;
        i < 150;
        i++
    ) {

        var particle =
            document.createElement("span");


        particle.className =
            "burst";


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
            "50%";


        particle.style.top =
            "50%";


        particle.style.zIndex =
            "99999";


        particle.style.pointerEvents =
            "none";


        particle.style.color =
            "white";


        particle.style.fontSize =
            10 +
            Math.random() * 20 +
            "px";


        document.body
            .appendChild(particle);


        var angle =
            Math.random() *
            Math.PI *
            2;


        var distance =
            100 +
            Math.random() * 600;


        var x =
            Math.cos(angle) *
            distance;


        var y =
            Math.sin(angle) *
            distance;


        var animation =
            particle.animate(

                [

                    {
                        transform:
                            "translate(-50%, -50%) " +
                            "scale(0)",

                        opacity: 1

                    },

                    {

                        transform:
                            "translate(" +
                            x +
                            "px, " +
                            y +
                            "px) " +
                            "rotate(" +
                            Math.random() * 720 +
                            "deg) " +
                            "scale(1.4)",

                        opacity: 0

                    }

                ],

                {

                    duration:
                        1000 +
                        Math.random() *
                        1800,

                    easing:
                        "cubic-bezier(.1,.8,.2,1)"

                }

            );


        animation.onfinish =
            function() {

                particle.remove();

            };

    }

}
