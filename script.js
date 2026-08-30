/* ==========================================================
   JAS WEBSITE
   ----------------------------------------------------------
   Page navigation:
   - Button ONLY
   - No back button
   - Scrolling only scrolls content inside a page
   - Page itself never changes from scrolling

   Music:
   - song1.mp3
   - song2.mp3
   - song3.mp3
   - song4.mp3

   No template literals are used.
   ========================================================== */


/* ==========================================================
   ELEMENTS
   ========================================================== */

var pages =
    document.querySelectorAll(".page");

var nextButton =
    document.getElementById("nextButton");

var currentNumber =
    document.getElementById("currentNumber");

var totalNumber =
    document.getElementById("totalNumber");

var progressBar =
    document.getElementById("progressBar");

var musicPlayer =
    document.getElementById("musicPlayer");

var musicButton =
    document.getElementById("musicButton");

var musicIcon =
    document.getElementById("musicIcon");

var musicPanel =
    document.getElementById("musicPanel");

var songName =
    document.getElementById("songName");

var playPause =
    document.getElementById("playPause");

var previousSong =
    document.getElementById("previousSong");

var nextSong =
    document.getElementById("nextSong");

var volumeSlider =
    document.getElementById("volumeSlider");

var cursorGlow =
    document.getElementById("cursorGlow");

var stars =
    document.getElementById("stars");

var canvas =
    document.getElementById("particleCanvas");

var ctx =
    canvas.getContext("2d");


/* ==========================================================
   PAGE VARIABLES
   ========================================================== */

var currentPage = 0;

var totalPages = pages.length;

var isChangingPage = false;


/* ==========================================================
   MUSIC
   ========================================================== */

var songs = [
    "songs/song1.mp3",
    "songs/song2.mp3",
    "songs/song3.mp3",
    "songs/song4.mp3"
];


var songNames = [
    "Song 1",
    "Song 2",
    "Song 3",
    "Song 4"
];


var currentSong = 0;

var musicStarted = false;


/* ==========================================================
   BUTTON LABELS
   ========================================================== */

var buttonLabels = [
    "Begin →",
    "Continue →",
    "The little things →",
    "Reasons →",
    "Keep going →",
    "A little more →",
    "Almost there →",
    "The honest part →",
    "Finish →"
];


/* ==========================================================
   PAGE COUNTER
   ========================================================== */

function updatePageInfo() {

    var current =
        String(currentPage + 1);

    if (current.length === 1) {
        current = "0" + current;
    }


    var total =
        String(totalPages);

    if (total.length === 1) {
        total = "0" + total;
    }


    currentNumber.textContent =
        current;

    totalNumber.textContent =
        total;


    var progress =
        ((currentPage + 1) /
        totalPages) * 100;


    progressBar.style.width =
        progress + "%";


    nextButton.textContent =
        buttonLabels[currentPage]
        || "Continue →";

}


/* ==========================================================
   MUSIC LOAD
   ========================================================== */

function loadSong(index, autoPlay) {

    if (index < 0) {
        index = songs.length - 1;
    }


    if (index >= songs.length) {
        index = 0;
    }


    currentSong = index;


    musicPlayer.src =
        songs[currentSong];


    musicPlayer.volume =
        parseFloat(
            volumeSlider.value
        );


    songName.textContent =
        songNames[currentSong];


    if (autoPlay) {

        var playPromise =
            musicPlayer.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function() {
                    musicStarted = false;
                    updateMusicButton();
                }
            );

        }

    }


    updateMusicButton();

}


/* ==========================================================
   START MUSIC
   ========================================================== */

function startMusic() {

    if (!musicStarted) {

        musicStarted = true;

        var playPromise =
            musicPlayer.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function() {

                    musicStarted =
                        false;

                }
            );

        }

    }

}


/* ==========================================================
   MUSIC BUTTON ICON
   ========================================================== */

function updateMusicButton() {

    if (musicPlayer.paused) {

        musicIcon.textContent =
            "▶";

        playPause.textContent =
            "▶";

    } else {

        musicIcon.textContent =
            "♫";

        playPause.textContent =
            "Ⅱ";

    }

}


/* ==========================================================
   MUSIC PANEL
   ========================================================== */

musicButton.addEventListener(
    "click",
    function() {

        musicPanel.classList.toggle(
            "show"
        );

    }
);


/* ==========================================================
   PLAY / PAUSE
   ========================================================== */

playPause.addEventListener(
    "click",
    function() {

        if (musicPlayer.paused) {

            musicPlayer.play()
                .then(
                    function() {

                        musicStarted =
                            true;

                        updateMusicButton();

                    }
                )
                .catch(
                    function() {}
                );

        } else {

            musicPlayer.pause();

            updateMusicButton();

        }

    }
);


/* ==========================================================
   PREVIOUS SONG
   ========================================================== */

previousSong.addEventListener(
    "click",
    function() {

        var wasPlaying =
            !musicPlayer.paused;

        currentSong--;

        if (currentSong < 0) {
            currentSong =
                songs.length - 1;
        }


        loadSong(
            currentSong,
            wasPlaying
        );

    }
);


/* ==========================================================
   NEXT SONG
   ========================================================== */

nextSong.addEventListener(
    "click",
    function() {

        var wasPlaying =
            !musicPlayer.paused;

        currentSong++;

        if (
            currentSong >=
            songs.length
        ) {
            currentSong = 0;
        }


        loadSong(
            currentSong,
            wasPlaying
        );

    }
);


/* ==========================================================
   VOLUME
   ========================================================== */

volumeSlider.addEventListener(
    "input",
    function() {

        musicPlayer.volume =
            parseFloat(
                this.value
            );

    }
);


/* ==========================================================
   AUTOMATIC SONG CHANGE BY SECTION
   ==========================================================

   Page 1-3  -> Song 1
   Page 4-5  -> Song 2
   Page 6-7  -> Song 3
   Page 8-9  -> Song 4
   ========================================================== */

function updateSongForPage() {

    var desiredSong = 0;


    if (currentPage >= 3) {
        desiredSong = 1;
    }


    if (currentPage >= 5) {
        desiredSong = 2;
    }


    if (currentPage >= 7) {
        desiredSong = 3;
    }


    if (
        desiredSong !== currentSong
    ) {

        var wasPlaying =
            !musicPlayer.paused;

        loadSong(
            desiredSong,
            wasPlaying
        );

    }

}


/* ==========================================================
   NEXT PAGE
   ========================================================== */

function goNext() {

    if (isChangingPage) {
        return;
    }


    if (
        currentPage >=
        totalPages - 1
    ) {

        nextButton.textContent =
            "♡";

        return;

    }


    isChangingPage = true;


    /*
        User clicked the button,
        so browser allows audio playback.
    */

    if (!musicStarted) {

        musicStarted = true;

        var firstPlay =
            musicPlayer.play();


        if (
            firstPlay !== undefined
        ) {

            firstPlay.catch(
                function() {}
            );

        }

    }


    /*
        Remove old page.
    */

    pages[currentPage]
        .classList
        .remove("active");


    /*
        Move forward.
    */

    currentPage++;


    /*
        Make sure the new page starts
        at the top if it was previously
        visited.
    */

    pages[currentPage].scrollTop =
        0;


    setTimeout(
        function() {

            pages[currentPage]
                .classList
                .add("active");


            updatePageInfo();

            updateSongForPage();

        },
        120
    );


    /*
        Wait for transition before
        allowing another click.
    */

    setTimeout(
        function() {

            isChangingPage =
                false;

        },
        900
    );

}


/* ==========================================================
   NEXT BUTTON
   ========================================================== */

nextButton.addEventListener(
    "click",
    function() {

        goNext();

    }
);


/* ==========================================================
   FLIP CARDS
   ========================================================== */

var cards =
    document.querySelectorAll(
        ".reason-card"
    );


for (
    var i = 0;
    i < cards.length;
    i++
) {

    cards[i].addEventListener(
        "click",
        function() {

            this.classList.toggle(
                "flipped"
            );

        }
    );

}


/* ==========================================================
   CURSOR GLOW
   ========================================================== */

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


/* ==========================================================
   CREATE STARS
   ========================================================== */

var starCount =
    window.innerWidth < 600
        ? 65
        : 125;


for (
    var s = 0;
    s < starCount;
    s++
) {

    var star =
        document.createElement(
            "span"
        );


    star.className =
        "star";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    star.style.animationDuration =
        (
            5 +
            Math.random() * 16
        ) + "s";


    star.style.animationDelay =
        (
            -Math.random() * 16
        ) + "s";


    stars.appendChild(star);

}


/* ==========================================================
   PARTICLE CANVAS
   ========================================================== */

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


/* ==========================================================
   PARTICLES
   ========================================================== */

var particles = [];

var particleCount =
    window.innerWidth < 600
        ? 40
        : 85;


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
            Math.random() *
            1.4 +
            0.3,

        opacity:
            Math.random() *
            0.32 +
            0.04

    });

}


/* ==========================================================
   PARTICLE ANIMATION
   ========================================================== */

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


        if (
            particle.x < 0
        ) {

            particle.x =
                canvasWidth;

        }


        if (
            particle.x >
            canvasWidth
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
            particle.y >
            canvasHeight
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


/* ==========================================================
   INITIAL MUSIC
   ========================================================== */

musicPlayer.volume =
    0.14;

loadSong(
    0,
    false
);


/* ==========================================================
   INITIAL PAGE
   ========================================================== */

updatePageInfo();


/* ==========================================================
   EXTRA SAFETY
   ----------------------------------------------------------
   Prevent mouse wheel from changing pages.
   It can still scroll inside the current page.
   ========================================================== */

window.addEventListener(
    "wheel",
    function() {

        /*
            Intentionally empty.

            Page navigation is controlled
            ONLY by the Next button.
        */

    },
    {
        passive: true
    }
);


/* ==========================================================
   KEYBOARD
   ----------------------------------------------------------
   ArrowRight can also advance.
   No previous/back navigation is provided.
   ========================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowRight" ||
            event.key === "Enter"
        ) {

            goNext();

        }

    }
);
