const greenBtn = document.getElementById("yesBtn");
const pinkBtn = document.querySelector(".pink");
const ticket = document.getElementById("ticket");
const screenContent = document.getElementById("screenContent");
const joystick = document.querySelector(".joystick");

let printed = false;
let ticketReady = false;
let currentPage = "intro";

const reasons = `
 1. I love the way your eyes light up when you are genuinely happy.
 2. I love how you make me feel safe even when everything around us is chaotic.
 3. I love the sound of your laughter; it’s my absolute favorite song.
 4. I love that we were able to find our way back to each other after being broken.
 5. I love how incredibly patient you are with me, even when I am difficult.
 6. I love how you forgive my flaws and see the best in me.
 7. I love the way you speak about the things you are passionate about.
 8. I love how your hand feels perfectly placed when it's holding mine.
 9. I love the warmth of your presence that instantly calms my overthinking mind.
 10. I love how you can make me smile with just a single text message.
 11. I love that you are both my lover and my very best friend.
 12. I love how maturely you handled our comeback and our healing process.
 13. I love the way you look at me, making me feel like I’m the only person in the room.
 14. I love your kindness, not just to me, but to everyone around you.
 15. I love how you remember the tiny little details I mention in passing.
 16. I love the way you smell; it instantly feels like home to me.
 17. I love that you don't give up on us, even when the road gets bumpy.
 18. I love how intelligent and thoughtful your perspectives on life are.
 19. I love how you make ordinary days feel like a beautiful adventure.
 20. I love your sense of humor and how we share our own inside jokes.
 21. I love that you are the first person I want to share good news with.
 22. I love how you comfort me without needing to say many words.
 23. I love the way you look when you are deeply focused on something.
 24. I love how you make me want to become a better version of myself every day.
 25. I love that your heart is gentle, sweet, and incredibly pure.
 26. I love how you support my dreams, no matter how silly or big they seem.
 27. I love the feeling of reassurance I get every time you say "I love you."
 28. I love how we can talk for hours about everything and absolutely nothing.
 29. I love how comfortable our comfortable silences are.
 30. I love your resilience and how strong you are as a person.
 31. I love the way you style yourself; you look beautiful in absolutely everything.
 32. I love how you respect my boundaries and my personal space.
 33. I love that you accepted my apology and allowed us to start fresh.
 34. I love the voice notes you send me; I re-listen to them when I miss you.
 35. I love how you protect your peace but always make room for me.
 36. I love how you make me feel valued, appreciated, and deeply wanted.
 37. I love the creative way your mind works.
 38. I love how you challenge me to think differently and grow.
 39. I love that you are the last thing on my mind before I sleep and the first when I wake up.
 40. I love how you look when you smile sleepily.
 41. I love your cute little habits that you probably don’t even notice you do.
 42. I love how you make me feel grounded when my anxiety takes over.
 43. I love that you are my favorite distraction from the stressful world.
 44. I love how honest you are with me, even when the truth is hard.
 45. I love the way you treat people with genuine empathy.
 46. I love that our souls feel so deeply connected, no matter what happens.
 47. I love how you make me believe in second chances and true love.
 48. I love the way you handle my mood swings with grace and tenderness.
 49. I love how you celebrate my small victories like they are massive achievements.
 50. I love that you know exactly how to cheer me up when I’m feeling down.
 51. I love your soft, gentle voice when you speak to me gently.
 52. I love how we can be completely weird and silly together without any judgment.
 53. I love the history we share, because it made us who we are today.
 54. I love how you make me feel like I finally belong somewhere.
 55. I love the way you stand up for what you believe in.
 56. I love that you are my favorite person to dream about the future with.
 57. I love how you always find a way to make time for me despite your busy schedule.
 58. I love your random texts that show me I was randomly on your mind.
 59. I love how you look past my mistakes and choose to focus on our growth.
 60. I love the pure innocence in your smile.
 61. I love how you hold your ground but always remain soft-hearted.
 62. I love the way you make me feel so lucky to be loved by someone like you.
 63. I love that you are my safe place to vent about my bad days.
 64. I love how you love animals and show compassion to the world.
 65. I love your taste in things—music, movies, and life in general.
 66. I love how you make me feel completely free to be my raw, authentic self.
 67. I love the way you say my name; it sounds special coming from you.
 68. I love that we can overcome any misunderstanding because we communicate.
 69. I love how you notice when something is wrong with me even before I say it.
 70. I love your beautiful mind and the way you process your emotions.
 71. I love that you are the peace I look forward to at the end of every exhausting day.
 72. I love how you look in casual clothes just as much as when you’re dressed up.
 73. I love the way your presence fills up a room without you even trying.
 74. I love that you taught me the true meaning of fighting for someone you love.
 75. I love how you value our relationship and don't take it for granted.
 76. I love your sweet, reassuring compliments that always boost my confidence.
 77. I love how you can read my expressions so perfectly.
 78. I love that you are my anchor when I feel like I'm drifting away.
 79. I love how you never make me feel like I’m asking for too much love.
 80. I love the way you hold onto hope, even when times are tough.
 81. I love how you make me sentimental about every memory we create.
 82. I love your elegant and beautiful soul.
 83. I love how you remember our special dates, even if we miss celebrating them.
 84. I love that you are the person I want to hold close when it rains.
 85. I love how you bring so much vibrant color into my otherwise dull days.
 86. I love your cute pout and the little expressions you make.
 87. I love how you trust me with your vulnerabilities and secrets.
 88. I love that you are my definition of happiness.
 89. I love how you make me feel protected and cherished.
 90. I love the way you never let me go to sleep feeling unloved.
 91. I love that you are my favorite topic to talk about with others.
 92. I love how you make me feel like everything is going to be alright.
 93. I love the way you love me, so selflessly and beautifully.
 94. I love that we survived the breakup and came back ten times stronger.
 95. I love how your love feels like a warm blanket on a freezing winter night.
 96. I love that you are my home, no matter where we are physically.
 97. I love how you inspire me to love more deeply and live more fully.
 98. I love the fact that out of billions of people, my heart chose you, and yours chose me.
 99. I love you for everything you were, everything you are, and everything you are yet to become.
 100. I love you simply because you are you, and I wouldn’t trade you for anything in the universe.
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
            My Dearest, Hardin Baradjie
          </h3>

          <p class="memory-text">
            Happy 6th mensiversary since the day we decided to rewrite our story.
            
            I know we’ve been through a lot. We had our moments of silence, we faced the heartbreaking distance of breaking up, and we even let a whole month slip by without properly celebrating us. But standing here today, looking at how far we’ve come, none of those lost days matter anymore. What truly matters is now. It’s the fact that after everything we went through, after the storm cleared, my heart still led me straight back to you—and yours did the same for me.
            Being able to be close to you again, to talk to you, and to have you back in my life is the greatest plot twist I could have ever asked for. I consider myself the luckiest person alive because even when things got broken, we chose to heal rather than stay apart. You have no idea how much it means to me that we can be good with each other again. You are my safe haven, and losing you made me realize just how empty the world is without your laughter.
            I am so incredibly grateful for your presence. Thank you for giving us another chance, for being patient with me, and for existing in my world. This month, next month, and for all the months to come, please remember that I am here to stay. I love you more than words can express.
            Forever yours.
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
          100 REASON I LOVE YOU, DJIE.
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
            src="2.png"
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
            In the quiet space where time stands still,
            We found our way back up the hill.
            Through the shadows and the autumn rain,
            Love brought us home, erasing the pain.
            A month may have slipped like sand through our hands,
            Unnoticed, unspoken, in love's changing lands.
            But the calendar fades when I look in your eyes,
            Where my past, my present, and my future lies.
            Happy 6th mensiversary since our new dawn,
            Every doubt is erased, every sorrow is gone.
            To hold you again is the luckiest grace,
            My favorite person, my ultimate place.
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

