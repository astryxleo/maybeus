
/* =========================================================
   JAS — CINEMATIC EXPERIENCE
========================================================= */


/* =========================================================
   DOM
========================================================= */

const app =
  document.getElementById("app");

const currentNumber =
  document.getElementById("current");

const totalNumber =
  document.getElementById("total");

const progressBar =
  document.getElementById("progressBar");

const cursorGlow =
  document.getElementById("cursorGlow");


/* =========================================================
   STORY
========================================================= */

const scenes = [

  /* =====================================================
     01 — OPEN
  ===================================================== */

  
  <section class="page active">

    <div class="content">

      <div class="eyebrow">
        I made this for you
      </div>

      <h1 class="title">
        Jas<span>.</span>
      </h1>

      <p class="lead">
        There's something I've been wanting
        to tell you properly.
      </p>

      <div class="button-area">

        <button class="next" data-next>
          Begin →
        </button>

      </div>

    </div>

  </section>
  


  /* =====================================================
     02 — DRAWING
  ===================================================== */

  
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        where it started
      </div>

      <h2 class="title">
        One little
        <em>drawing.</em>
      </h2>

      <p class="lead">
        I saw your drawing on your highlights
        and I just had to compliment it.
      </p>

      <p class="small">
        Your drawings are genuinely amazing.
      </p>

      <p
        class="lead"
        style="margin-top:20px"
      >
        I didn't know that tiny interaction
        would become something this important.
      </p>

      <div class="button-area">

        <button class="next" data-next>
          Keep going →
        </button>

      </div>

    </div>

  </section>
  


  /* =====================================================
     03 — IMPORTANT
  ===================================================== */

  
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        somewhere along the way
      </div>

      <div class="glass">

        <p class="quote">
          You became someone
          I genuinely care about.
        </p>

        <p class="small">
          Not because of one particular moment.
          Because of all the tiny ones.
        </p>

      </div>

      <div class="button-area">

        <button class="next" data-next>
          The tiny ones →
        </button>

      </div>

    </div>

  </section>
  


  /* =====================================================
     04 — THINGS ABOUT JAS
  ===================================================== */

  
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        things I notice about you
      </div>

      <h2
        class="title"
        style="
          font-size:
          clamp(42px,11vw,72px);
        "
      >
        It's <em>you.</em>
      </h2>

      <div class="memories">

        <div class="memory">
          <span class="number">01</span>
          You're beautiful.
        </div>

        <div class="memory">
          <span class="number">02</span>
          You care about me.
        </div>

        <div class="memory">
          <span class="number">03</span>
          You notice my efforts.
        </div>

        <div class="memory">
          <span class="number">04</span>
          You don't ignore me.
        </div>

        <div class="memory">
          <span class="number">05</span>
          You share things with me.
        </div>

        <div class="memory">
          <span class="number">06</span>
          You make me feel important.
        </div>

        <div class="memory">
          <span class="number">07</span>
          You trust me.
        </div>

        <div class="memory">
          <span class="number">08</span>
          You're kind.
        </div>

        <div class="memory">
          <span class="number">09</span>
          You're genuinely yourself with me.
        </div>

      </div>

      <div class="button-area">

        <button class="next" data-next>
          There's more →
        </button>

      </div>

    </div>

  </section>
  


  /* =====================================================
     05 — LITTLE THINGS
  ===================================================== */

  
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        the little things
      </div>

      <h2
        class="title"
        style="
          font-size:
          clamp(40px,11vw,70px);
        "
      >
        Very, very
        <em>Jas.</em>
      </h2>

      <div class="glass">

        <p class="lead">
          Your “blehhh” when you're teasing me.
        </p>

        <br>

        <p class="lead">
          You somehow mogging me
          with your PFP.
        </p>

        <br>

        <p class="lead">
          Sharing your pictures
          without hesitation.
        </p>

        <br>

        <p class="lead">
          Telling me your random things.
        </p>

        <p class="small">
          Things that might seem ordinary to you
          somehow mean a lot to me.
        </p>

      </div>

      <div class="button-area">

        <button class="next" data-next>
          One more thing →
        </button>

      </div>

    </div>

  </section>
  


  /* =====================================================
     06 — NOTIFICATION
  ===================================================== */

  
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        a tiny confession
      </div>

      <div class="notification">

        <div class="notification-label">
          JAS · NOW
        </div>

        <div class="notification-message">
          New message
        </div>

      </div>

      <p class="lead">
        Every time I get a notification…
      </p>

      <h2
        class="title"
        style="
          margin-top:20px;
          font-size:
          clamp(39px,11vw,70px);
        "
      >
        I just hope
        it's <em>you.</em>
      </h2>

      <div class="button-area">

        <button class="next" data-next>
          Wait… →
        </button>

      </div>

    </div>

  </section>
  


  /* =====================================================
     07 — ROUTINE
  ===================================================== */

  
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        without even trying
      </div>

      <h2
        class="title"
        style="
          font-size:
          clamp(40px,11vw,72px);
        "
      >
        You changed
        my <em>routine.</em>
      </h2>

      <p class="lead">
        You became someone
        I look forward to hearing from.
      </p>

      <p
        class="lead"
        style="margin-top:15px"
      >
        Someone whose messages
        I genuinely wait for.
      </p>

      <p class="quote" style="margin-top:28px">
        My favorite notification.
      </p>

      <div class="button-area">

        <button class="next" data-next>
          I should tell you why →
        </button>

      </div>

    </div>

  </section>
  `,


  /* =====================================================
     08 — EVERYTHING
  ===================================================== */

  `
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        beyond words
      </div>

      <p class="lead">

        Your kindness.
        Your trust.
        Your little habits.
        Your teasing.
        The way you're yourself with me.

      </p>

      <h2
        class="title"
        style="
          margin-top:30px;
          font-size:
          clamp(43px,12vw,78px);
        "
      >
        It's
        <em>everything.</em>
      </h2>

      <p class="small">
        And somehow, words still aren't enough.
      </p>

      <div class="button-area">

        <button class="next" data-next>
          So here's the truth →
        </button>

      </div>

    </div>

  </section>
  


  /* =====================================================
     09 — CONFESSION
  ===================================================== */

  
  <section class="page">

    <div class="content">

      <div class="eyebrow">
        the part I couldn't leave unsaid
      </div>

      <div class="glass">

        <h2
          class="title"
          style="
            font-size:
            clamp(39px,10vw,62px);
          "
        >
          Jas,
        </h2>

        <p class="lead">
          You already know I like you.
          But I don't think you know
          how much.
        </p>

        <p
          class="lead"
          style="margin-top:20px"
        >
          Somewhere between our conversations,
          your jokes, your replies,
          your trust and all those
          tiny moments…
        </p>

        <p class="quote" style="margin-top:25px">
          I fell for you.
        </p>

        <p
          class="lead"
          style="margin-top:20px"
        >
          And I love you.
        </p>

      </div>

      <div class="button-area">

        <button class="next" data-next>
          One last thing →
        </button>

      </div>

    </div>

  </section>
  `,


  /* =====================================================
     10 — FINAL
  ===================================================== */

  `
  <section class="page">

    <div class="content">

      <div class="final-glow"></div>

      <span class="heart">
        ♡
      </span>

      <div class="eyebrow">
        just you
      </div>

      <p class="lead">

        If I had to choose one person
        whose messages I'd always want to see,

        one person whose little things
        I'd always want to remember,

        one person I'd want to keep
        talking to…

      </p>

      <h2
        class="title"
        style="
          margin-top:28px;
          font-size:
          clamp(44px,13vw,84px);
        "
      >
        It would be
        <em>you.</em>
      </h2>

      <p class="lead">
        You and only you, Jas.
      </p>

      <div class="button-area">

        <button
          class="next yes"
          id="proposal"
        >
          There's one question left →
        </button>

      </div>

    </div>

  </section>
  

];


/* =========================================================
   RENDER
========================================================= */

app.innerHTML =
  scenes.join("");


const pages =
  [
    ...document.querySelectorAll(".page")
  ];


let index = 0;

let transitionLock = false;


totalNumber.textContent =
  String(pages.length)
    .padStart(2,"0");


/* =========================================================
   UI UPDATE
========================================================= */

function updateUI() {

  currentNumber.textContent =
    String(index + 1)
      .padStart(2,"0");

  progressBar.style.width =
    (
      ((index + 1) /
      pages.length) * 100
    ) + "%";

}


/* =========================================================
   NEXT
========================================================= */

function goNext() {

  if (transitionLock)
    return;

  if (index >= pages.length - 1)
    return;

  transitionLock = true;


  pages[index]
    .classList.remove("active");


  index++;


  setTimeout(() => {

    pages[index]
      .classList.add("active");

    updateUI();

  }, 130);


  setTimeout(() => {

    transitionLock = false;

  }, 1000);

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest("[data-next]");

    if (!button)
      return;

    goNext();

  }
);


/* =========================================================
   BUTTON MAGNETIC LIGHT
========================================================= */

document.addEventListener(
  "pointermove",
  event => {

    const button =
      event.target.closest(".next");

    if (!button)
      return;


    const rect =
      button.getBoundingClientRect();


    const x =
      event.clientX -
      rect.left;


    const y =
      event.clientY -
      rect.top;


    button.style.setProperty(
      "--mx",
      `${x}px`
    );


    button.style.setProperty(
      "--my",
      `${y}px`
    );

  }
);


/* =========================================================
   FINAL PROPOSAL
========================================================= */

document
  .getElementById("proposal")
  .addEventListener(
    "click",
    openProposal
  );


function openProposal() {

  if (transitionLock)
    return;

  transitionLock = true;


  pages.forEach(
    page =>
      page.classList.remove("active")
  );


  setTimeout(() => {

    const proposal =
      document.createElement("section");


    proposal.className =
      "page active";


    proposal.innerHTML = 

      <div class="content">

        <div class="final-glow"></div>

        <span class="heart">
          ♡
        </span>

        <div class="eyebrow">
          no more chapters
        </div>

        <h2
          class="title"
          style="
            font-size:
            clamp(44px,13vw,84px);
          "
        >
          Jas, will you be
          <em>mine?</em>
        </h2>

        <p class="lead">
          One honest question.
          One honest answer.
        </p>

        <div class="actions">

          <button
            class="next yes"
            id="yesButton"
          >
            YES ♡
          </button>

          <button
            class="next"
            id="momentButton"
          >
            I need a moment 🥹
          </button>

        </div>

      </div>

    ;


    app.appendChild(proposal);


    transitionLock = false;


    document
      .getElementById("yesButton")
      .addEventListener(
        "click",
        celebrate
      );


    document
      .getElementById("momentButton")
      .addEventListener(
        "click",
        moment
      );

  }, 300);

}


/* =========================================================
   MOMENT BUTTON
========================================================= */

function moment() {

  const button =
    document.getElementById(
      "momentButton"
    );


  if (!button)
    return;


  button.textContent =
    "Take your time ♡";


  button.style.opacity =
    ".6";


  setTimeout(() => {

    button.textContent =
      "I'm ready →";


    button.style.opacity =
      "1";


    button.onclick =
      celebrate;

  }, 1100);

}


/* =========================================================
   CELEBRATION
========================================================= */

function celebrate() {

  document
    .querySelectorAll(".page")
    .forEach(
      page =>
        page.classList.remove("active")
    );


  const finalPage =
    document.createElement("section");


  finalPage.className =
    "page active";


  finalPage.innerHTML = 

    <div class="content">

      <div class="final-glow"></div>

      <span
        class="heart"
        style="font-size:78px"
      >
        ♥
      </span>

      <div class="eyebrow">
        and just like that…
      </div>

      <h1 class="title">

        You said
        <em>yes.</em>

      </h1>

      <p class="lead">

        I think I'm going to remember
        this moment for a very long time.

      </p>

      <p
        class="lead"
        style="margin-top:15px"
      >

        Thank you for choosing me, Jas.

      </p>

      <p
        class="quote"
        style="margin-top:25px"
      >

        It was always you.

      </p>

      <p class="small">

        You and only you.

        <br><br>

        — I

      </p>

    </div>

  ;


  app.appendChild(finalPage);


  createBurst();

}


/* =========================================================
   PARTICLE BURST
========================================================= */

function createBurst() {

  const symbols = [
    "♥",
    "♡",
    "✦",
    "✧",
    "·"
  ];


  for (
    let i = 0;
    i < 120;
    i++
  ) {

    const particle =
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


    particle.style.fontSize =
      (
        9 +
        Math.random() * 18
      ) + "px";


    document.body
      .appendChild(particle);


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      120 +
      Math.random() *
      500;


    const x =
      Math.cos(angle) *
      distance;


    const y =
      Math.sin(angle) *
      distance;


    const duration =
      1100 +
      Math.random() *
      1700;


    particle.animate(

      [

        {
          transform:
            "translate(-50%,-50%) scale(.1)",

          opacity: 1

        },

        {

          transform:
            
            translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            rotate(${Math.random()*720}deg)
            scale(1.2)
            ,

          opacity: 0

        }

      ],

      {

        duration,

        easing:
          "cubic-bezier(.1,.8,.2,1)"

      }

    ).onfinish =
      () => particle.remove();

  }

}


/* =========================================================
   CURSOR FOLLOWING STAR
========================================================= */

let mouseX = window.innerWidth / 2;

let mouseY = window.innerHeight / 2;

let glowX = mouseX;

let glowY = mouseY;


window.addEventListener(
  "pointermove",
  event => {

    mouseX =
      event.clientX;

    mouseY =
      event.clientY;

  },
  { passive: true }
);


function animateCursor() {

  glowX +=
    (mouseX - glowX) * .16;

  glowY +=
    (mouseY - glowY) * .16;


  cursorGlow.style.left =
    glowX + "px";


  cursorGlow.style.top =
    glowY + "px";


  requestAnimationFrame(
    animateCursor
  );

}


animateCursor();


/* =========================================================
   BACKGROUND STARS
========================================================= */

const starContainer =
  document.getElementById("stars");


for (
  let i = 0;
  i < 100;
  i++
) {

  const star =
    document.createElement("span");


  star.className =
    "star";


  star.style.left =
    Math.random() * 100 + "%";


  star.style.top =
    Math.random() * 100 + "%";


  star.style.animationDuration =
    (
      6 +
      Math.random() * 16
    ) + "s";


  star.style.animationDelay =
    (
      -Math.random() * 16
    ) + "s";


  if (
    Math.random() > .9
  ) {

    star.style.width =
      "3px";

    star.style.height =
      "3px";

  }


  starContainer
    .appendChild(star);

}


/* =========================================================
   PARTICLE FIELD
========================================================= */

const canvas =
  document.getElementById(
    "particles"
  );

const ctx =
  canvas.getContext("2d");


let particleWidth =
  window.innerWidth;

let particleHeight =
  window.innerHeight;


function resizeCanvas() {

  particleWidth =
    window.innerWidth;

  particleHeight =
    window.innerHeight;


  const ratio =
    Math.min(
      window.devicePixelRatio || 1,
      2
    );


  canvas.width =
    particleWidth * ratio;

  canvas.height =
    particleHeight * ratio;


  canvas.style.width =
    particleWidth + "px";

  canvas.style.height =
    particleHeight + "px";


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


const particles = [];


const particleCount =
  window.innerWidth < 600
    ? 45
    : 75;


for (
  let i = 0;
  i < particleCount;
  i++
) {

  particles.push({

    x:
      Math.random() *
      particleWidth,

    y:
      Math.random() *
      particleHeight,

    vx:
      (Math.random() - .5) * .15,

    vy:
      (Math.random() - .5) * .15,

    size:
      Math.random() * 1.5 + .3,

    alpha:
      Math.random() * .4 + .05

  });

}


/* =========================================================
   PARTICLE ANIMATION
========================================================= */

function animateParticles() {

  ctx.clearRect(
    0,
    0,
    particleWidth,
    particleHeight
  );


  for (
    const p of particles
  ) {

    p.x += p.vx;
    p.y += p.vy;


    if (
      p.x < 0
    )
      p.x =
        particleWidth;

    if (
      p.x > particleWidth
    )
      p.x = 0;


    if (
      p.y < 0
    )
      p.y =
        particleHeight;

    if (
      p.y > particleHeight
    )
      p.y = 0;


    ctx.beginPath();


    ctx.arc(
      p.x,
      p.y,
      p.size,
      0,
      Math.PI * 2
    );


    ctx.fillStyle =
      `rgba(255,255,255,${p.alpha})`;


    ctx.fill();

  }


  requestAnimationFrame(
    animateParticles
  );

}


animateParticles();


/* =========================================================
   INITIAL STATE
========================================================= */

updateUI();


/* =========================================================
   INTENTIONALLY NO:
   - wheel navigation
   - touch navigation
   - swipe navigation
   - browser back button
   - previous button

   The story advances ONLY through buttons.
========================================================= */
