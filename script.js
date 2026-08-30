/*
============================================================
JAS WEBSITE JAVASCRIPT
============================================================

IMPORTANT:

- Page navigation ONLY happens through the button.
- Scrolling never changes the page.
- There is NO back button.
- Cards flip when clicked.
- Music automatically changes between pages.
- Music is intentionally quiet.
- No template literals are used anywhere.
============================================================
*/


/* ============================================================
   ELEMENTS
   ============================================================ */

var pages =
    document.querySelectorAll(".page");

var nextButton =
    document.getElementById("nextButton");

var pageNumber =
    document.getElementById("pageNumber");

var pageTotal =
    document.getElementById("pageTotal");

var progressBar =
    document.getElementById("progressBar");

var musicPlayer =
    document.getElementById("musicPlayer");

var musicButton =
    document.getElementById("musicButton");

var cursorGlow =
    document.getElementById("cursorGlow");

var stars =
    document.getElementById("stars");

var canvas =
    document.getElementById("particleCanvas");

var ctx =
    canvas.getContext("2d");


/* ============================================================
   PAGE SETTINGS
   ============================================================ */

var currentPageIndex = 0;

var totalPages = pages.length;

var changingPage = false;

var musicStarted = false;


/* ============================================================
   SONG SETTINGS
   ============================================================

   Put these files inside:

   songs/song1.mp3
   songs/song2.mp3
   songs/song3.mp3
   songs/song4.mp3

   etc.

   You can add more later.
   ============================================================ */

var songs = [

    "songs/song1.mp3",

    "songs/song2.mp3",

    "songs/song3.mp3",

    "songs/song4.mp3"

];


/*
    Each page gets a song.

    Pages 1-4 -> song1
    Pages 5-6 -> song2
    Pages 7-8 -> song3
    Page 9    -> song4
*/


/* ============================================================
   BUTTON TEXT
   ============================================================ */

var buttonTexts = [

    "Begin →",

    "Continue →",

    "There is more →",

    "Reasons →",

    "Keep going →",

    "A little more →",

    "Almost there →",

    "The honest part →",

    "Finish →"

];


/* ============================================================
   UPDATE COUNTER
   ============================================================ */

function updateCounter() {

    var current =
        String(currentPageIndex + 1);

    if (current.length === 1) {
        current = "0" + current;
    }


    var total =
        String(totalPages);

    if (total.length === 1) {
        total = "0" + total;
    }


    pageNumber.textContent =
        current;

    pageTotal.textContent =
        total;


    var percentage =
        ((currentPageIndex + 1) /
        totalPages) * 100;


    progressBar.style.width =
        percentage + "%";


    nextButton.textContent =
        buttonTexts[currentPageIndex]
        || "Continue →";

}


/* ============================================================
   CHANGE MUSIC
   ============================================================ */

function changeMusic() {

    /*
        Determine which song should play.
    */

    var songIndex = 0;


    if (currentPageIndex >= 4) {
        songIndex = 1;
    }


    if (currentPageIndex >= 6) {
        songIndex = 2;
    }


    if (currentPageIndex >= 8) {
        songIndex = 3;
    }


    /*
        If that song doesn't exist,
        safely use the first one.
    */

    if (!songs[songIndex]) {
        songIndex = 0;
    }


    /*
        Don't restart the same song
        when moving between pages.
    */

    if (
        musicPlayer.getAttribute("data-song")
        === songs[songIndex]
    ) {
        return;
    }


    musicPlayer.setAttribute(
        "data-song",
        songs[songIndex]
    );


    musicPlayer.src =
        songs[songIndex];


    /*
        VERY LOW VOLUME.
    */

    musicPlayer.volume =
        0.14;


    /*
        Try to play.

        Browser autoplay rules may block this
        until the user clicks the first button.
    */

    var playPromise =
        musicPlayer.play();


    if (playPromise !== undefined) {

        playPromise.catch(
            function() {

                /*
                    The first button click will
                    start the music.
                */

            }
        );

    }

}


/* ============================================================
   START MUSIC AFTER USER INTERACTION
   ============================================================ */

function startMusic() {

    if (!musicStarted) {

        musicStarted = true;

        changeMusic();

    }

}


/* ============================================================
   NEXT PAGE
   ============================================================ */

function nextPage() {

    /*
        Prevent accidental double-clicks.
    */

    if (changingPage) {
        return;
    }


    /*
        Last page means we stay there.
    */

    if (
        currentPageIndex >=
        totalPages - 1
    ) {

        nextButton.textContent =
            "♡";

        return;

    }


    changingPage = true;


    /*
        Start music after real user interaction.
    */

    startMusic();


    /*
        Hide current page.
    */

    pages[currentPageIndex]
        .classList
        .remove("active");


    /*
        Move forward.
    */

    currentPageIndex++;


    /*
        Small delay makes the transition
        feel more cinematic.
    */

    setTimeout(
        function() {

            /*
                Reset scroll position of
                the new page.

                IMPORTANT:
                This does NOT navigate through scroll.
            */

            pages[currentPageIndex]
                .scrollTop = 0;


            pages[currentPageIndex]
                .classList
                .add("active");


            updateCounter();


            /*
                Change song if necessary.
            */

            changeMusic();

        },
        180
    );


    /*
        Unlock after animation.
    */

    setTimeout(
        function() {

            changingPage = false;

        },
        950
    );

}


/* ============================================================
   NEXT BUTTON EVENT
   ============================================================ */

nextButton.addEventListener(
    "click",
    function() {

        nextPage();

    }
);


/* ============================================================
   MUSIC BUTTON
   ============================================================ */

musicButton.addEventListener(
    "click",
    function() {

        /*
            If music has not started yet,
            start it.
        */

        if (!musicStarted) {

            startMusic();

            musicPlayer.play()
                .catch(
                    function() {}
                );

            musicButton.textContent =
                "♫";

            return;

        }


        /*
            Toggle pause/play.
        */

        if (musicPlayer.paused) {

            musicPlayer.play()
                .catch(
                    function() {}
                );

            musicButton.textContent =
                "♫";

        } else {

            musicPlayer.pause();

            musicButton.textContent =
                "×";

        }

    }
);


/* ============================================================
   FLIP CARDS
   ============================================================ */

var reasonCards =
    document.querySelectorAll(
        ".reason-card"
    );


for (
    var i = 0;
    i < reasonCards.length;
    i++
) {

    reasonCards[i].addEventListener(
        "click",
        function() {

            this.classList.toggle(
                "flipped"
            );

        }
    );

}


/* ============================================================
   CURSOR FOLLOW
   ============================================================ */

var mouseX =
    window.innerWidth / 2;

var mouseY =
    window.innerHeight / 2;

var glowX =
    mouseX;

var glowY =
    mouseY;


window.addEventListener(
    "pointermove",
    function(event) {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;

    }
);


function animateGlow() {

    glowX +=
        (mouseX - glowX) * 0.12;

    glowY +=
        (mouseY - glowY) * 0.12;


    cursorGlow.style.left =
        glowX + "px";

    cursorGlow.style.top =
        glowY + "px";


    requestAnimationFrame(
        animateGlow
    );

}


animateGlow();


/* ============================================================
   CREATE STARS
   ============================================================ */

var starCount =
    window.innerWidth < 600
        ? 70
        : 130;


for (
    var s = 0;
    s < starCount;
    s++
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
        5 + Math.random() * 16 + "s";


    star.style.animationDelay =
        -Math.random() * 16 + "s";


    stars.appendChild(star);

}


/* ============================================================
   PARTICLE CANVAS
   ============================================================ */

var canvasWidth =
    window.innerWidth;

var canvasHeight =
    window.innerHeight;


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


    ctx.setTransform(
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


/* ============================================================
   PARTICLES
   ============================================================ */

var particles = [];

var particleCount =
    window.innerWidth < 600
        ? 45
        : 90;


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
            Math.random() * 1.5
            + 0.3,

        opacity:
            Math.random() * 0.35
            + 0.05

    });

}


/* ============================================================
   ANIMATE PARTICLES
   ============================================================ */

function animateParticles() {

    ctx.clearRect(
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
            Wrap around screen.
        */

        if (
            particle.x < 0
        ) {
            particle.x =
                canvasWidth;
        }


        if (
            particle.x > canvasWidth
        ) {
            particle.x = 0;
        }


        if (
            particle.y < 0
        ) {
            particle.y =
                canvasHeight;
        }


        if (
            particle.y > canvasHeight
        ) {
            particle.y = 0;
        }


        ctx.beginPath();


        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "rgba(255,255,255," +
            particle.opacity +
            ")";


        ctx.fill();

    }


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


/* ============================================================
   INITIALIZE
   ============================================================ */

updateCounter();


/*
    Set first song as source but DO NOT autoplay.

    Browser policies normally require user interaction
    before audio can play.
*/

musicPlayer.src =
    songs[0];

musicPlayer.volume =
    0.14;

musicPlayer.setAttribute(
    "data-song",
    songs[0]
);
