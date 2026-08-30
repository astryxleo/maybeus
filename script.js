```javascript
/* =========================================================
   JAS — CINEMATIC PROPOSAL
   JAVASCRIPT

   IMPORTANT:
   - Button navigation ONLY
   - No scrolling
   - No swipe
   - No previous/back button
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const story =
  document.getElementById("story");

const pageNumber =
  document.getElementById("pageNumber");

const totalPages =
  document.getElementById("totalPages");

const progressBar =
  document.getElementById("progressBar");


/* =========================================================
   STORY PAGES
========================================================= */

const pages = [

/* ---------------------------------------------------------
   PAGE 01 — OPENING
--------------------------------------------------------- */

`
<section class="page active">

  <div class="content">

    <div class="eyebrow">
      a little something for you
    </div>

    <h1 class="title">
      Jas<span>.</span>
    </h1>

    <p class="lead">
      I made something I couldn't really
      say in one message.
    </p>

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        Begin →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 02 — DRAWING
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      chapter one
    </div>

    <h2 class="title">
      It started with
      <em>a drawing.</em>
    </h2>

    <p class="lead">
      I saw your drawing on your highlights
      and I just complimented it.
    </p>

    <p class="small">
      “Your drawings are amazing.”
    </p>

    <p
      class="lead"
      style="margin-top:20px"
    >
      I had absolutely no idea where
      that little moment would take me.
    </p>

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        Keep going →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 03 — IMPORTANT
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      somewhere along the way
    </div>

    <div class="glass">

      <p class="quote">
        You became one of the most important
        people in my life.
      </p>

      <p class="small">
        Not because of one huge moment.
        Because of all the little things.
      </p>

    </div>

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        The little things →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 04 — THINGS
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      things I notice
    </div>

    <h2
      class="title"
      style="
        font-size:
        clamp(42px,11vw,70px);
      "
    >
      About <em>you.</em>
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

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        There's more →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 05 — VERY JAS
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      very, very Jas
    </div>

    <h2
      class="title"
      style="
        font-size:
        clamp(43px,12vw,75px);
      "
    >
      And then there's
      <em>you.</em>
    </h2>

    <div class="glass">

      <p class="lead">
        Your “blehhh” while teasing me.
      </p>

      <br>

      <p class="lead">
        You casually mogging me with your PFP.
      </p>

      <br>

      <p class="lead">
        You sharing your pictures
        without hesitation.
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

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        One more thing →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 06 — NOTIFICATION
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      one notification
    </div>

    <div class="notification">

      <div class="notification-top">
        Jas · now
      </div>

      <div class="notification-text">
        New message
      </div>

    </div>

    <p class="lead">
      Every time I get a notification…
    </p>

    <h2
      class="title"
      style="
        font-size:
        clamp(40px,11vw,70px);
        margin-top:20px;
      "
    >
      I just wish it would be
      <em>you.</em>
    </h2>

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        And then I realized →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 07 — ROUTINE
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      without even trying
    </div>

    <h2
      class="title"
      style="
        font-size:
        clamp(40px,11vw,70px);
      "
    >
      You changed my
      <em>routine.</em>
    </h2>

    <p class="lead">
      You became someone I look forward
      to hearing from.
    </p>

    <p
      class="lead"
      style="margin-top:15px"
    >
      Someone whose messages
      I genuinely wait for.
    </p>

    <p class="quote">
      You became my favorite notification.
    </p>

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        I need to tell you something →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 08 — EVERYTHING
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      what words can't explain
    </div>

    <p class="lead">

      Your kindness.
      Your trust.
      Your little habits.
      Your teasing.
      The way you are with me.

    </p>

    <h2
      class="title"
      style="
        font-size:
        clamp(45px,12vw,78px);
        margin-top:30px;
      "
    >
      It's
      <em>everything.</em>
    </h2>

    <p class="small">
      And somehow, words still don't feel like enough.
    </p>

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        So here's the truth →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 09 — CONFESSION
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="eyebrow">
      the part I needed to say
    </div>

    <div class="glass">

      <h2
        class="title"
        style="
          font-size:
          clamp(38px,10vw,60px);
        "
      >
        Jas,
      </h2>

      <p class="lead">
        You already know I like you.
        But I don't think you know how much.
      </p>

      <p
        class="lead"
        style="margin-top:20px"
      >
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

    <div class="next-wrap">

      <button
        class="next"
        data-next
      >
        One last thing →
      </button>

    </div>

  </div>

</section>
`,


/* ---------------------------------------------------------
   PAGE 10 — BUILDUP
--------------------------------------------------------- */

`
<section class="page">

  <div class="content">

    <div class="final-glow"></div>

    <span class="heart">
      ♡
    </span>

    <div class="eyebrow">
      the one thing I want you to know
    </div>

    <p class="lead">

      If I had to choose one person
      to keep talking to,

      one person whose notification
      I'd still hope to see,

      one person whose little things
      I'd still want to remember…

    </p>

    <h2
      class="title"
      style="
        font-size:
        clamp(45px,13vw,82px);
      "
    >
      It would be
      <em>you.</em>
    </h2>

    <p class="lead">
      You and only you, Jas.
    </p>

    <div class="next-wrap">

      <button
        class="next yes"
        id="proposalButton"
      >
        There's one question left →
      </button>

    </div>

  </div>

</section>
`

];


/* =========================================================
   INSERT STORY
========================================================= */

story.innerHTML =
  pages.join("");


const pageElements =
  [
    ...document.querySelectorAll(".page")
  ];


let current =
  0;

let locked =
  false;


/* =========================================================
   INITIAL UI
========================================================= */

totalPages.textContent =
  String(pageElements.length)
    .padStart(2,"0");


function updateUI() {

  pageNumber.textContent =
    String(current + 1)
      .padStart(2,"0");


  progressBar.style.width =
    (
      ((current + 1) /
      pageElements.length)
      * 100
    ) + "%";

}


updateUI();


/* =========================================================
   NEXT PAGE
========================================================= */

function nextPage() {

  if (locked)
    return;


  if (
    current >=
    pageElements.length - 1
  )
    return;


  locked = true;


  pageElements[current]
    .classList.remove("active");


  current++;


  /*
    Tiny delay makes the transition
    feel more cinematic.
  */

  setTimeout(() => {

    pageElements[current]
      .classList.add("active");

    updateUI();

  }, 120);


  setTimeout(() => {

    locked = false;

  }, 950);

}


/* =========================================================
   BUTTON NAVIGATION ONLY
========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest("[data-next]");


    if (!button)
      return;


    nextPage();

  }
);


/* =========================================================
   PROPOSAL SCREEN
========================================================= */

document
  .getElementById("proposalButton")
  .addEventListener(
    "click",
    showProposal
  );


function showProposal() {

  if (locked)
    return;


  locked = true;


  pageElements.forEach(
    page =>
      page.classList.remove("active")
  );


  const proposal =
    document.createElement("section");


  proposal.className =
    "page active";


  proposal.innerHTML = `

    <div class="content">

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
          clamp(44px,13vw,82px);
        "
      >
        Jas, will you be
        <em>mine?</em>
      </h2>

      <p class="lead">
        One honest question from me.
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

  `;


  story.appendChild(proposal);


  setTimeout(() => {

    locked = false;

  }, 900);


  /*
    "I need a moment"
  */

  document
    .getElementById("momentButton")
    .addEventListener(
      "click",
      handleMoment
    );


  /*
    YES
  */

  document
    .getElementById("yesButton")
    .addEventListener(
      "click",
      celebrate
    );

}


/* =========================================================
   MOMENT BUTTON
========================================================= */

function handleMoment() {

  const button =
    document.getElementById(
      "momentButton"
    );


  button.textContent =
    "Take your time ♡";


  button.style.opacity =
    ".65";


  setTimeout(() => {

    button.textContent =
      "I'm ready →";


    button.style.opacity =
      "1";


    button.onclick =
      celebrate;

  }, 900);

}


/* =========================================================
   YES — FINAL SCENE
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


  finalPage.innerHTML = `

    <div class="content">

      <span
        class="heart"
        style="font-size:76px"
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


  story.appendChild(finalPage);


  createCelebration();

}


/* =========================================================
   CINEMATIC PARTICLE EXPLOSION
========================================================= */

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
    i < 100;
    i++
  ) {

    const particle =
      document.createElement("span");


    particle
      .className =
      "celebration-particle";


    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    particle.style.fontSize =
      (
        10 +
        Math.random() * 18
      ) + "px";


    document.body
      .appendChild(particle);


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      130 +
      Math.random() *
      450;


    const x =
      Math.cos(angle) *
      distance;


    const y =
      Math.sin(angle) *
      distance;


    const duration =
      1000 +
      Math.random() *
      1600;


    particle.animate(

      [

        {
          transform:
            "translate(-50%,-50%) scale(.2)",

          opacity: 1

        },

        {

          transform:
            `
            translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            scale(1.2)
            `,

          opacity: 0

        }

      ],

      {

        duration:

          duration,

        easing:
          "cubic-bezier(.1,.8,.2,1)"

      }

    )
    .onfinish =
      () => particle.remove();

  }

}


/* =========================================================
   BACKGROUND STARS
========================================================= */

const stars =
  document.getElementById("stars");


for (
  let i = 0;
  i < 80;
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
      7 +
      Math.random() * 15
    ) + "s";


  star.style.animationDelay =
    (
      -Math.random() * 15
    ) + "s";


  /*
    A few stars are slightly larger.
  */

  if (
    Math.random() > .88
  ) {

    star.style.width =
      "3px";

    star.style.height =
      "3px";

  }


  stars.appendChild(star);

}


/* =========================================================
   IMPORTANT:
   NO wheel listener
   NO touch/swipe listener
   NO back navigation
   NO previous button

   The story intentionally moves forward ONLY
   when a visible button is clicked.
========================================================= */
```
