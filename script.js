/* =========================================
   JAS — CINEMATIC PROPOSAL
   Written completely from I → You
========================================= */

const app = document.getElementById("app");

const pages = [

/* =========================
   PAGE 01
========================= */

`
<section class="page active">

  <div class="content">

    <div class="eyebrow reveal d1">
      a little something for you
    </div>

    <h1 class="title reveal d2">
      Jas<span>.</span>
    </h1>

    <p class="lead reveal d3">
      I made something I couldn't really say in one message.
    </p>

    <button class="btn reveal d4" data-next>
      Begin →
    </button>

    <p class="small reveal d5">
      take your time.
    </p>

  </div>

</section>
`,

/* =========================
   PAGE 02
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      chapter one
    </div>

    <h2 class="title reveal d2">
      It started with
      <em>a drawing.</em>
    </h2>

    <p class="lead reveal d3">
      I saw your drawing on your highlights
      and all I did was compliment it.
    </p>

    <p class="small reveal d4">
      “Your drawings are amazing.”
    </p>

    <p class="lead reveal d5">
      I had absolutely no idea where that
      little compliment would take me.
    </p>

  </div>

</section>
`,

/* =========================
   PAGE 03
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      somewhere along the way
    </div>

    <div class="glass reveal d2">

      <p class="quote">
        You became one of the most important
        people in my life.
      </p>

      <p class="small reveal d3">
        Not because of one huge moment.
        Because of all the little things.
      </p>

    </div>

  </div>

</section>
`,

/* =========================
   PAGE 04
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      things I notice
    </div>

    <h2
      class="title reveal d2"
      style="font-size:clamp(40px,11vw,70px)"
    >
      About <em>you.</em>
    </h2>

    <div class="memory-stack">

      <div class="memory">
        <span class="memory-number">01</span>
        <span class="memory-text">
          You're beautiful.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">02</span>
        <span class="memory-text">
          You care about me.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">03</span>
        <span class="memory-text">
          You notice my efforts.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">04</span>
        <span class="memory-text">
          You don't ignore me.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">05</span>
        <span class="memory-text">
          You share things with me.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">06</span>
        <span class="memory-text">
          You make me feel important.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">07</span>
        <span class="memory-text">
          You trust me.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">08</span>
        <span class="memory-text">
          You're kind.
        </span>
      </div>

      <div class="memory">
        <span class="memory-number">09</span>
        <span class="memory-text">
          You're genuinely yourself with me.
        </span>
      </div>

    </div>

  </div>

</section>
`,

/* =========================
   PAGE 05
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      very, very Jas
    </div>

    <h2
      class="title reveal d2"
      style="font-size:clamp(42px,12vw,75px)"
    >
      And then there's
      <em>you.</em>
    </h2>

    <div class="glass reveal d3">

      <p class="lead">
        Your “blehhh” while teasing me.
      </p>

      <br>

      <p class="lead">
        You casually mogging me with your PFP.
      </p>

      <br>

      <p class="lead">
        Sharing your pictures without hesitation.
      </p>

      <br>

      <p class="lead">
        The random things you tell me.
      </p>

      <p class="small">
        You probably think they're normal things.
        They aren't normal to me.
      </p>

    </div>

  </div>

</section>
`,

/* =========================
   PAGE 06
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      one notification
    </div>

    <div class="notification reveal d2">

      <div class="notification-top">
        Jas · now
      </div>

      <div class="notification-message">
        New message
      </div>

    </div>

    <p class="lead reveal d3">
      Every time I get a notification…
    </p>

    <h2
      class="title reveal d4"
      style="font-size:clamp(40px,11vw,70px)"
    >
      I just wish it would be
      <em>you.</em>
    </h2>

  </div>

</section>
`,

/* =========================
   PAGE 07
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      without even trying
    </div>

    <h2
      class="title reveal d2"
      style="font-size:clamp(40px,11vw,70px)"
    >
      You changed my
      <em>routine.</em>
    </h2>

    <p class="lead reveal d3">
      You became someone I look forward
      to hearing from.
    </p>

    <p class="lead reveal d4">
      Someone whose messages I genuinely wait for.
    </p>

    <p class="quote reveal d5">
      You became my favorite notification.
    </p>

  </div>

</section>
`,

/* =========================
   PAGE 08
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      what words can't explain
    </div>

    <p class="lead reveal d2">
      Your kindness.
      Your trust.
      Your little habits.
      Your teasing.
      The way you are with me.
    </p>

    <h2
      class="title reveal d3"
      style="font-size:clamp(45px,12vw,78px)"
    >
      It's
      <em>everything.</em>
    </h2>

    <p class="small reveal d4">
      And somehow, words still don't feel like enough.
    </p>

  </div>

</section>
`,

/* =========================
   PAGE 09
========================= */

`
<section class="page">

  <div class="content">

    <div class="eyebrow reveal d1">
      the part I needed to say
    </div>

    <div class="glass reveal d2">

      <h2
        class="title"
        style="font-size:clamp(38px,10vw,60px)"
      >
        Jas,
      </h2>

      <p class="lead">
        You already know I like you.
        But I don't think you know how much.
      </p>

      <br>

      <p class="lead">
        Somewhere between our conversations,
        your little jokes, your replies,
        your trust, and all those tiny moments…
      </p>

      <p class="quote">
        I fell for you.
      </p>

      <p
        class="lead"
        style="margin-top:20px"
      >
        And I love you.
      </p>

    </div>

  </div>

</section>
`,

/* =========================
   PAGE 10
========================= */

`
<section class="page">

  <div class="content">

    <span class="heart reveal d1">
      ♡
    </span>

    <div class="eyebrow reveal d1">
      the one thing I want you to know
    </div>

    <p class="lead reveal d2">

      If I had to choose one person
      to keep talking to,

      one person whose notification
      I'd still hope to see,

      one person whose little things
      I'd still want to remember…

    </p>

    <h2
      class="title reveal d3"
      style="font-size:clamp(45px,13vw,82px)"
    >
      It would be
      <em>you.</em>
    </h2>

    <p class="lead reveal d4">
      You and only you, Jas.
    </p>

    <button
      class="btn yes reveal d5"
      id="proposalButton"
    >
      One last thing →
    </button>

  </div>

</section>
`

];


/* =========================================
   RENDER
========================================= */

app.innerHTML = pages
  .map(page => page)
  .join("");


const pageElements =
  [...document.querySelectorAll(".page")];

const currentPage =
  document.getElementById("currentPage");

const totalPages =
  document.getElementById("totalPages");

const progressBar =
  document.getElementById("progressBar");

totalPages.textContent =
  String(pageElements.length).padStart(2,"0");


let current = 0;

let locked = false;


/* =========================================
   PAGE UPDATE
========================================= */

function updatePage() {

  pageElements.forEach(
    (page,index) => {

      page.classList.toggle(
        "active",
        index === current
      );

    }
  );

  currentPage.textContent =
    String(current + 1).padStart(2,"0");

  progressBar.style.width =
    `${((current + 1) / pageElements.length) * 100}%`;

}


/* =========================================
   NEXT PAGE
========================================= */

function nextPage() {

  if (locked) return;

  if (current >= pageElements.length - 1)
    return;

  locked = true;

  current++;

  updatePage();

  setTimeout(() => {
    locked = false;
  }, 850);

}


/* =========================================
   BUTTONS
========================================= */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.closest("[data-next]")
    ) {
      nextPage();
    }

  }
);


/* =========================================
   DESKTOP SCROLL
========================================= */

window.addEventListener(
  "wheel",
  event => {

    if (event.deltaY > 20) {

      nextPage();

    }

  },
  { passive: true }
);


/* =========================================
   KEYBOARD
========================================= */

window.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "ArrowDown" ||
      event.key === " " ||
      event.key === "Enter"
    ) {

      nextPage();

    }

  }
);


/* =========================================
   MOBILE SWIPE
========================================= */

let touchStartY = 0;

window.addEventListener(
  "touchstart",
  event => {

    touchStartY =
      event.touches[0].clientY;

  },
  { passive: true }
);


window.addEventListener(
  "touchend",
  event => {

    const touchEndY =
      event.changedTouches[0].clientY;

    const distance =
      touchStartY - touchEndY;

    if (distance > 55) {

      nextPage();

    }

  },
  { passive: true }
);


/* =========================================
   PROPOSAL
========================================= */

document
  .getElementById("proposalButton")
  .addEventListener(
    "click",
    showProposal
  );


function showProposal() {

  const proposal =
    document.createElement("div");

  proposal.className =
    "page active";

  proposal.innerHTML = `

    <div class="content">

      <div class="eyebrow reveal d1">
        no more chapters
      </div>

      <h2
        class="title reveal d2"
        style="font-size:clamp(43px,12vw,76px)"
      >
        Jas, will you be
        <em>mine?</em>
      </h2>

      <p class="lead reveal d3">
        One honest question from me.
      </p>

      <div class="actions reveal d4">

        <button
          class="btn yes"
          id="yesButton"
        >
          YES ♡
        </button>

        <button
          class="btn wait"
          id="waitButton"
        >
          I need a moment 🥹
        </button>

      </div>

    </div>

  `;

  document.body.appendChild(proposal);

  requestAnimationFrame(() => {

    proposal.classList.add("active");

  });


  document
    .getElementById("waitButton")
    .addEventListener(
      "click",
      () => {

        proposal.querySelector(".lead")
          .textContent =
          "Take all the time you need. ♡";

        document
          .getElementById("waitButton")
          .textContent =
          "I'm ready →";

      }
    );


  document
    .getElementById("yesButton")
    .addEventListener(
      "click",
      celebrate
    );

}


/* =========================================
   YES CELEBRATION
========================================= */

function celebrate() {

  document
    .querySelectorAll(".page")
    .forEach(
      page =>
        page.classList.remove("active")
    );


  const final =
    document.createElement("div");

  final.className =
    "page active";


  final.innerHTML = `

    <div class="content">

      <span
        class="heart"
        style="font-size:70px"
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
        this forever.
      </p>

      <p
        class="lead"
        style="margin-top:15px"
      >
        Thank you for choosing me, Jas.
      </p>

      <p class="quote">
        It was always you.
      </p>

      <p class="small">
        You and only you.
        <br><br>
        — I
      </p>

    </div>

  `;


  document.body.appendChild(final);

  createCelebration();

}


/* =========================================
   CELEBRATION PARTICLES
========================================= */

function createCelebration() {

  const symbols = [
    "♥",
    "♡",
    "✦",
    "✧",
    "·"
  ];


  for (
    let i = 0;
    i < 75;
    i++
  ) {

    const particle =
      document.createElement("span");

    particle.className =
      "celebration-particle";

    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    document.body.appendChild(
      particle
    );


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      120 +
      Math.random() *
      380;


    const x =
      Math.cos(angle) *
      distance;


    const y =
      Math.sin(angle) *
      distance;


    const duration =
      1000 +
      Math.random() *
      1400;


    particle.animate(

      [
        {
          transform:
            "translate(-50%,-50%) scale(.3)",
          opacity: 1
        },

        {
          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            scale(1)`,
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


/* =========================================
   BACKGROUND STARS
========================================= */

const stars =
  document.getElementById("stars");


for (
  let i = 0;
  i < 65;
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
    7 + Math.random() * 15 + "s";


  star.style.animationDelay =
    -Math.random() * 15 + "s";


  stars.appendChild(star);

}


/* =========================================
   SOUND BUTTON
========================================= */

const soundButton =
  document.getElementById("soundBtn");


soundButton.addEventListener(
  "click",
  () => {

    soundButton.textContent =
      soundButton.textContent === "♪"
        ? "◼"
        : "♪";

  }
);


/* =========================================
   INITIALIZE
========================================= */

updatePage();
