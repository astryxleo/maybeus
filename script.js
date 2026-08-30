
/* =========================================================
   JAS — CINEMATIC EXPERIENCE
   BACKTICK-FREE VERSION
========================================================= */

var app = document.getElementById("app");
var currentNumber = document.getElementById("current");
var totalNumber = document.getElementById("total");
var progressBar = document.getElementById("progressBar");
var cursorGlow = document.getElementById("cursorGlow");


/* =========================================================
   STORY SCENES
========================================================= */

var scenes = [

  '<section class="page active">' +
    '<div class="content">' +
      '<div class="eyebrow">I made this for you</div>' +
      '<h1 class="title">Jas<span>.</span></h1>' +
      '<p class="lead">There is something I have been wanting to tell you properly.</p>' +
      '<div class="button-area">' +
        '<button class="next" data-next>Begin →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">where it started</div>' +
      '<h2 class="title">One little <em>drawing.</em></h2>' +
      '<p class="lead">I saw your drawing on your highlights and I just had to compliment it.</p>' +
      '<p class="small">Your drawings are genuinely amazing.</p>' +
      '<p class="lead extra-space">I did not know that tiny interaction would become something this important.</p>' +
      '<div class="button-area">' +
        '<button class="next" data-next>Keep going →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">somewhere along the way</div>' +
      '<div class="glass">' +
        '<p class="quote">You became someone I genuinely care about.</p>' +
        '<p class="small">Not because of one particular moment. Because of all the tiny ones.</p>' +
      '</div>' +
      '<div class="button-area">' +
        '<button class="next" data-next>The tiny ones →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">things I notice about you</div>' +
      '<h2 class="title title-small">It is <em>you.</em></h2>' +
      '<div class="memories">' +
        '<div class="memory"><span class="number">01</span>You are beautiful.</div>' +
        '<div class="memory"><span class="number">02</span>You care about me.</div>' +
        '<div class="memory"><span class="number">03</span>You notice my efforts.</div>' +
        '<div class="memory"><span class="number">04</span>You do not ignore me.</div>' +
        '<div class="memory"><span class="number">05</span>You share things with me.</div>' +
        '<div class="memory"><span class="number">06</span>You make me feel important.</div>' +
        '<div class="memory"><span class="number">07</span>You trust me.</div>' +
        '<div class="memory"><span class="number">08</span>You are kind.</div>' +
        '<div class="memory"><span class="number">09</span>You are genuinely yourself with me.</div>' +
      '</div>' +
      '<div class="button-area">' +
        '<button class="next" data-next>There is more →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">the little things</div>' +
      '<h2 class="title title-small">Very, very <em>Jas.</em></h2>' +
      '<div class="glass">' +
        '<p class="lead">Your "blehhh" when you are teasing me.</p>' +
        '<p class="lead">You somehow mogging me with your PFP.</p>' +
        '<p class="lead">Sharing your pictures without hesitation.</p>' +
        '<p class="lead">Telling me your random things.</p>' +
        '<p class="small">Things that might seem ordinary to you somehow mean a lot to me.</p>' +
      '</div>' +
      '<div class="button-area">' +
        '<button class="next" data-next>One more thing →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">a tiny confession</div>' +
      '<div class="notification">' +
        '<div class="notification-label">JAS · NOW</div>' +
        '<div class="notification-message">New message</div>' +
      '</div>' +
      '<p class="lead">Every time I get a notification...</p>' +
      '<h2 class="title title-small">I just hope it is <em>you.</em></h2>' +
      '<div class="button-area">' +
        '<button class="next" data-next>Wait... →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">without even trying</div>' +
      '<h2 class="title title-small">You changed my <em>routine.</em></h2>' +
      '<p class="lead">You became someone I look forward to hearing from.</p>' +
      '<p class="lead">Someone whose messages I genuinely wait for.</p>' +
      '<p class="quote extra-space">My favorite notification.</p>' +
      '<div class="button-area">' +
        '<button class="next" data-next>I should tell you why →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">beyond words</div>' +
      '<p class="lead">Your kindness. Your trust. Your little habits. Your teasing. The way you are yourself with me.</p>' +
      '<h2 class="title title-small extra-space">It is <em>everything.</em></h2>' +
      '<p class="small">And somehow, words still are not enough.</p>' +
      '<div class="button-area">' +
        '<button class="next" data-next>So here is the truth →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="eyebrow">the part I could not leave unsaid</div>' +
      '<div class="glass">' +
        '<h2 class="title title-small">Jas,</h2>' +
        '<p class="lead">You already know I like you. But I do not think you know how much.</p>' +
        '<p class="lead">Somewhere between our conversations, your jokes, your replies, your trust and all those tiny moments...</p>' +
        '<p class="quote extra-space">I fell for you.</p>' +
        '<p class="lead">And I love you.</p>' +
      '</div>' +
      '<div class="button-area">' +
        '<button class="next" data-next>One last thing →</button>' +
      '</div>' +
    '</div>' +
  '</section>',

  '<section class="page">' +
    '<div class="content">' +
      '<div class="final-glow"></div>' +
      '<span class="heart">♡</span>' +
      '<div class="eyebrow">just you</div>' +
      '<p class="lead">If I had to choose one person whose messages I would always want to see, one person whose little things I would always want to remember, one person I would want to keep talking to...</p>' +
      '<h2 class="title title-small">It would be <em>you.</em></h2>' +
      '<p class="lead">You and only you, Jas.</p>' +
      '<div class="button-area">' +
        '<button class="next yes" id="proposal">There is one question left →</button>' +
      '</div>' +
    '</div>' +
  '</section>'

];


/* =========================================================
   RENDER
========================================================= */

app.innerHTML = scenes.join("");

var pages = document.querySelectorAll(".page");

var index = 0;

var transitionLock = false;

totalNumber.textContent =
  String(pages.length).padStart(2, "0");


/* =========================================================
   UPDATE UI
========================================================= */

function updateUI() {

  currentNumber.textContent =
    String(index + 1).padStart(2, "0");

  progressBar.style.width =
    (((index + 1) / pages.length) * 100) + "%";

}


/* =========================================================
   NEXT PAGE
========================================================= */

function goNext() {

  if (transitionLock) {
    return;
  }

  if (index >= pages.length - 1) {
    return;
  }

  transitionLock = true;

  pages[index].classList.remove("active");

  index++;

  setTimeout(function() {

    pages[index].classList.add("active");

    updateUI();

  }, 130);

  setTimeout(function() {

    transitionLock = false;

  }, 1000);

}


/* =========================================================
   BUTTON NAVIGATION
========================================================= */

document.addEventListener("click", function(event) {

  var button =
    event.target.closest("[data-next]");

  if (!button) {
    return;
  }

  goNext();

});


/* =========================================================
   BUTTON LIGHT
========================================================= */

document.addEventListener("pointermove", function(event) {

  var button =
    event.target.closest(".next");

  if (!button) {
    return;
  }

  var rect =
    button.getBoundingClientRect();

  var x =
    event.clientX - rect.left;

  var y =
    event.clientY - rect.top;

  button.style.setProperty("--mx", x + "px");

  button.style.setProperty("--my", y + "px");

});


/* =========================================================
   PROPOSAL
========================================================= */

var proposal =
  document.getElementById("proposal");

if (proposal) {

  proposal.addEventListener(
    "click",
    openProposal
  );

}


function openProposal() {

  if (transitionLock) {
    return;
  }

  transitionLock = true;

  for (
    var i = 0;
    i < pages.length;
    i++
  ) {

    pages[i].classList.remove("active");

  }

  setTimeout(function() {

    var proposalPage =
      document.createElement("section");

    proposalPage.className =
      "page active";

    proposalPage.innerHTML =
      '<div class="content">' +

        '<div class="final-glow"></div>' +

        '<span class="heart">♡</span>' +

        '<div class="eyebrow">no more chapters</div>' +

        '<h2 class="title title-small">' +
          'Jas, will you be <em>mine?</em>' +
        '</h2>' +

        '<p class="lead">' +
          'One honest question. One honest answer.' +
        '</p>' +

        '<div class="actions">' +

          '<button class="next yes" id="yesButton">' +
            'YES ♡' +
          '</button>' +

          '<button class="next" id="momentButton">' +
            'I need a moment 🥹' +
          '</button>' +

        '</div>' +

      '</div>';

    app.appendChild(proposalPage);

    transitionLock = false;

    var yesButton =
      document.getElementById("yesButton");

    var momentButton =
      document.getElementById("momentButton");

    yesButton.addEventListener(
      "click",
      celebrate
    );

    momentButton.addEventListener(
      "click",
      moment
    );

  }, 300);

}


/* =========================================================
   MOMENT BUTTON
========================================================= */

function moment() {

  var button =
    document.getElementById("momentButton");

  if (!button) {
    return;
  }

  button.textContent =
    "Take your time ♡";

  button.style.opacity =
    "0.6";

  setTimeout(function() {

    button.textContent =
      "I am ready →";

    button.style.opacity =
      "1";

    button.onclick =
      celebrate;

  }, 1100);

}


/* =========================================================
   FINAL CELEBRATION
========================================================= */

function celebrate() {

  var allPages =
    document.querySelectorAll(".page");

  for (
    var i = 0;
    i < allPages.length;
    i++
  ) {

    allPages[i]
      .classList.remove("active");

  }


  var finalPage =
    document.createElement("section");

  finalPage.className =
    "page active";


  finalPage.innerHTML =
    '<div class="content">' +

      '<div class="final-glow"></div>' +

      '<span class="heart" style="font-size:78px">♥</span>' +

      '<div class="eyebrow">and just like that...</div>' +

      '<h1 class="title">' +
        'You said <em>yes.</em>' +
      '</h1>' +

      '<p class="lead">' +
        'I think I am going to remember this moment for a very long time.' +
      '</p>' +

      '<p class="lead">' +
        'Thank you for choosing me, Jas.' +
      '</p>' +

      '<p class="quote extra-space">' +
        'It was always you.' +
      '</p>' +

      '<p class="small">' +
        'You and only you.' +
        '<br><br>' +
        '— I' +
      '</p>' +

    '</div>';


  app.appendChild(finalPage);

  createBurst();

}


/* =========================================================
   HEART / STAR BURST
========================================================= */

function createBurst() {

  var symbols = [
    "♥",
    "♡",
    "✦",
    "✧",
    "·"
  ];


  for (
    var i = 0;
    i < 120;
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

    particle.style.fontSize =
      (9 + Math.random() * 18) + "px";

    document.body.appendChild(
      particle
    );


    var angle =
      Math.random() *
      Math.PI *
      2;

    var distance =
      120 +
      Math.random() *
      500;

    var x =
      Math.cos(angle) *
      distance;

    var y =
      Math.sin(angle) *
      distance;

    var duration =
      1100 +
      Math.random() *
      1700;


    var animation =
      particle.animate(

        [
          {
            transform:
              "translate(-50%,-50%) scale(0.1)",
            opacity: 1
          },

          {
            transform:
              "translate(calc(-50% + " +
              x +
              "px), calc(-50% + " +
              y +
              "px)) rotate(" +
              (Math.random() * 720) +
              "deg) scale(1.2)",
            opacity: 0
          }
        ],

        {
          duration: duration,
          easing: "cubic-bezier(.1,.8,.2,1)"
        }

      );


    animation.onfinish =
      function() {

        particle.remove();

      };

  }

}


/* =========================================================
   CURSOR FOLLOWING GLOWING STAR
========================================================= */

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

  },
  {
    passive: true
  }
);


function animateCursor() {

  glowX +=
    (mouseX - glowX) * 0.16;

  glowY +=
    (mouseY - glowY) * 0.16;


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

var starContainer =
  document.getElementById("stars");


for (
  var i = 0;
  i < 100;
  i++
) {

  var star =
    document.createElement("span");

  star.className =
    "star";

  star.style.left =
    (Math.random() * 100) + "%";

  star.style.top =
    (Math.random() * 100) + "%";

  star.style.animationDuration =
    (6 + Math.random() * 16) + "s";

  star.style.animationDelay =
    (-Math.random() * 16) + "s";


  if (Math.random() > 0.9) {

    star.style.width =
      "3px";

    star.style.height =
      "3px";

  }


  starContainer.appendChild(
    star
  );

}


/* =========================================================
   PARTICLE CANVAS
========================================================= */

var canvas =
  document.getElementById("particles");

var ctx =
  canvas.getContext("2d");


var particleWidth =
  window.innerWidth;

var particleHeight =
  window.innerHeight;


function resizeCanvas() {

  particleWidth =
    window.innerWidth;

  particleHeight =
    window.innerHeight;


  var ratio =
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


var particles = [];

var particleCount =
  window.innerWidth < 600
    ? 45
    : 75;


for (
  var i = 0;
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
      (Math.random() - 0.5) * 0.15,

    vy:
      (Math.random() - 0.5) * 0.15,

    size:
      Math.random() * 1.5 + 0.3,

    alpha:
      Math.random() * 0.4 + 0.05

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
    var i = 0;
    i < particles.length;
    i++
  ) {

    var p =
      particles[i];


    p.x += p.vx;

    p.y += p.vy;


    if (p.x < 0) {
      p.x = particleWidth;
    }

    if (p.x > particleWidth) {
      p.x = 0;
    }

    if (p.y < 0) {
      p.y = particleHeight;
    }

    if (p.y > particleHeight) {
      p.y = 0;
    }


    ctx.beginPath();


    ctx.arc(
      p.x,
      p.y,
      p.size,
      0,
      Math.PI * 2
    );


    ctx.fillStyle =
      "rgba(255,255,255," +
      p.alpha +
      ")";


    ctx.fill();

  }


  requestAnimationFrame(
    animateParticles
  );

}


animateParticles();


/* =========================================================
   INITIAL UI
========================================================= */

updateUI();
