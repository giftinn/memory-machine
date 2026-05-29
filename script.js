const greenBtn = document.getElementById("yesBtn");
const pinkBtn = document.querySelector(".pink");
const ticket = document.getElementById("ticket");
const screenContent = document.getElementById("screenContent");
const joystick = document.querySelector(".joystick");

let printed = false;
let ticketReady = false;
let currentPage = "intro";

const reasons = `

  1. I love the way you smile.
  2.I love how you say my name.
  3. You make ordinary days feel special.
  4. You make me feel safe.
  5. You always listen to me sincerely.
  6. You’re always there when I need you.
  7. I love your laugh.
  8. You make me want to be a better person.
  9. You understand me without words.
  10. You’re so patient with me.
  11. I love your eyes.
  12. I love your voice.
  13. You always believe in me.
  14. You make me feel loved every single day.
  15. You accept all my flaws.
  16. You always support my dreams.
  17. You make me comfortable being myself.
  18. I love how caring you are.
  19. You always calm me down.
  20. You feel like home to me.
  21. I love talking to you for hours.
  22. You make me excited to wake up every morning.
  23. You always know how to make me smile.
  24. You never give up on us.
  25. I love the way you look at me.
  26. You’re always honest with me.
  27. You have such a kind heart.
  28. You make my life more colorful.
  29. You always respect me.
  30. I love laughing with you.
  31. You make me believe in true love.
  32. You remember the little things about me.
  33. You make me feel special.
  34. You always try to understand my feelings.
  35. I love your hugs.
  36. You make every problem feel lighter.
  37. You are my happiness.
  38. You always make me feel enough.
  39. I love your sense of humor.
  40. You always treat me with kindness.
  41. You never get tired of listening to my stories.
  42. You make me feel confident.
  43. I love your positive energy.
  44. You bring peace into my life.
  45. You make me feel lucky.
  46. I love the way you love me.
  47. You always make me feel prioritized.
  48. You teach me patience.
  49. You are my favorite place to go to.
  50. I love everything about you.
  51. You always make me laugh when I’m sad.
  52. You make me feel important.
  53. I love the way you treat people.
  54. You have a unique way of making everything better.
  55. You support me even when I don’t ask.
  56. You make me feel less alone.
  57. You always remind me to take care of myself.
  58. You make love feel simple and beautiful.
  59. I love your little acts of care.
  60. You inspire me to grow every day.
  61. You accept my mood swings.
  62. I love how you encourage me.
  63. You create beautiful memories with me.
  64. You’re the first person I want to talk to.
  65. I love your cute jealousy sometimes.
  66. You always make me feel wanted.
  67. You have my favorite smile.
  68. I love the way you comfort me.
  69. You love me unconditionally.
  70. You always believe in my abilities.
  71. I love the sound of your laughter.
  72. You make my life feel complete.
  73. You always give me comfort.
  74. I love the way you secretly care for me.
  75. You teach me what healthy love feels like.
  76. You always make time for me.
  77. I love how you express your love.
  78. You make me feel safe being myself.
  79. You’re always on my mind.
  80. I love how calmly you handle problems.
  81. You make me feel appreciated.
  82. You always make me feel important.
  83. I love every little moment with you.
  84. You make me less afraid of the future.
  85. You always protect my feelings.
  86. I love the way you show affection.
  87. You make me feel incredibly lucky to have you.
  88. You’re the best person to lean on.
  89. I love when you compliment the little things about me.
  90. You make me feel enough just by being here.
  91. You always understand when I’m tired.
  92. I love all your little attentions.
  93. You make me believe we can get through anything together.
  94. You’re always the reason behind my random smiles.
  95. I love when you say you miss me.
  96. I love our comfortable silence.
  97. You make my life feel warmer.
  98. You are my favorite person.
  99. I can’t imagine my life without you.
  100. Because you are you, and that alone is enough.

`;

function renderCardsPage(){

  currentPage = "cards";

  screenContent.innerHTML = `

    <div class="cards-page">

      <h2 class="cards-title">
        choose one card<br>
        to open
      </h2>

      <div class="cards-wrapper">

        <div class="choice-card card1"></div>

        <div class="choice-card card2"></div>

        <div class="choice-card card3"></div>

      </div>

    </div>

  `;

}

greenBtn.addEventListener("click",()=>{


  if(currentPage === "intro"){

    if(printed) return;

    printed = true;

    screenContent.innerHTML = `
      <h2 class="screen-title">
        printing your<br>
        ticket...
      </h2>

      <p class="screen-sub">
        please wait
      </p>
    `;

    setTimeout(()=>{

      ticket.classList.add("print");

    },300);

    setTimeout(()=>{

      ticketReady = true;

      screenContent.innerHTML = `
        <h2 class="screen-title">
          ticket printed!
        </h2>

        <p class="screen-sub">
          tap the ticket
        </p>
      `;

    },1300);

  }

});

ticket.addEventListener("click",()=>{

  if(!ticketReady) return;


 const bgMusic =
  document.getElementById("bgMusic");

  if(bgMusic){

    bgMusic.volume = 1;

    bgMusic.currentTime = 0;

    bgMusic.play()
    .then(()=>{

      console.log("music playing");

    })
    .catch((err)=>{

      console.log(err);

    });

  }

  ticket.classList.add("hide");

  setTimeout(()=>{

    currentPage = "profile";

    screenContent.innerHTML = `

      <div class="profile-page">

        <h2 class="profile-title">
          tap this profile<br>
          to continue
        </h2>

        <div
        class="profile-circle"
        id="profileBtn"
        >

          <img
          src="1.png"
          alt=""
          >
        </div>
      </div>
    `;

  },400);

});

document.addEventListener("click",(e)=>{

  if(e.target.closest("#profileBtn")){

    renderCardsPage();

  }

  if(e.target.closest(".card1")){

    currentPage = "card1";

    screenContent.innerHTML = `

      <div class="memory-page">
        <div class="memory-paper">
          <p class="memory-date">
            january
          </p>

          <div class="memory-top">

            <span class="memory-dot"></span>

            <div class="memory-line"></div>

          </div>

          <h3 class="memory-heading">
            my dearest love,
          </h3>

          <p class="memory-text">

              Sayaangg, happy mensive yaaa. From the very first moment we met, my heart knew it had found it’s home in you. You have this incredible way of making even the simplest things extraordinary. Whether it's a quiet evening together or a spontaneous adventure, every experience feels brighter and more meaningful with you by my side.

              I admire your strength, your compassion, and the way you never fail to inspire me to be a better person. You are my safe haven, my greatest supporter, and my reason to smile each day. Your love fills my life with so much warmth and joy, and I hope you feel just as cherished and adored as you make me feel.

              Thank you for everything we've done ya. You're the most precious and special things that ever happen to me, I would literally do anything to support you sayang, I love you more than any words can explain.

          </p>
        </div>
      </div>
    `;

  }

  if(e.target.closest(".card2")){

  currentPage = "card2";

  screenContent.innerHTML = `

    <div class="zip-page">

      <div class="zip-folder" id="zipFolder">
        <div class="folder-tab"></div>
        <div class="folder-body">
          <p>
            love_files.zip
          </p>
        </div>
      </div>
    </div>
  `;

}

if(e.target.closest("#zipFolder")){

  screenContent.innerHTML = `

    <div class="reasons-page">
      <div class="reasons-paper">

        <img
        src="2.jpg"
        class="reasons-photo"
        alt=""
        >

        <h3 class="reasons-title">
          reasons why i love you
        </h3>

        <div class="reasons-content">

          ${reasons
            .trim()
            .split("\n")
            .map(reason=>`

              <p>${reason}</p>

            `).join("")
          }

        </div>
      </div>
    </div>
  `;

}

if(e.target.closest(".card3")){

  currentPage = "card3";

  screenContent.innerHTML = `

    <div class="letter-page">

      <div class="letter-paper">

        <div class="letter-header">

          <div class="letter-profile">

            <img
            src="1.png"
            alt=""
            >

          </div>

          <div class="letter-user">

            <h2>
              your beloved
            </h2>

            <p>
              sent with love ♡
            </p>

          </div>

        </div>

        <div class="letter-divider"></div>

        <div class="letter-content">

          <p>

            Happy 1st mensiversary sayaang, I still can’t believe it’s already been one month with you. Even though it sounds short, this past month honestly meant so much to me. Thank you for always being there, listening to my random thoughts, understanding my moods, and making my days feel happier just by talking to you.

            Being with you made me realize that love can be found in the smallest things. All the late night talks, the random jokes, the little check-ups, and the way you always make me smile without even trying. Those little moments became my favorite part of everyday.

            I know I’m not perfect and sometimes I can be difficult to handle, but thank you for staying patient with me and loving me anyway. I truly appreciate every effort, every sweet word, and every moment we shared together this past month. Your heart is so full of love, and I'm lucky enough to find a place there

            I’m really grateful that I got to meet someone like you. Thank you for making me feel loved, safe, and happy. Happy mensive for both of us ya, baby. I love you so much

          </p>

        </div>

      </div>

    </div>

  `;

}

});

pinkBtn.addEventListener("click",()=>{

  if(
  currentPage === "card1" ||
  currentPage === "card2" 
){

    renderCardsPage();

  }

});

joystick.addEventListener("click",()=>{

  if(currentPage === "card3"){

    location.reload();

  }

});

