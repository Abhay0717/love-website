/* ===========================
   TYPING EFFECT
=========================== */

new Typed("#typing", {
    strings: [
        "Hi My Love ❤️",
        "You Are My Happiness 💕",
        "Every Moment With You Is Special 🌹",
        "This Surprise Is Only For You 💖"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});


/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "fall 5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);


/* ===========================
   PROPOSAL PAGE
=========================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (noBtn) {

    noBtn.style.position = "absolute";

    noBtn.addEventListener("mouseenter", () => {

        const x = Math.random() * (window.innerWidth - 150);

        const y = Math.random() * (window.innerHeight - 100);

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    });

}

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        // Hearts Explosion
        for (let i = 0; i < 80; i++) {
            createHeart();
        }

        // Romantic Popup
        setTimeout(() => {

            alert(
`💖 YAYYYYY!! 💖

27 / 06 / 2026 ❤️

Now Officially...

You + Me = Forever ♾️🥹

I Love You So Much ❤️🌹`
            );

        }, 300);

    });

}


/* ===========================
   Landing → Proposal
=========================== */

document.getElementById("startBtn").addEventListener("click", () => {

    document.getElementById("landingPage").style.display = "none";

    document.getElementById("proposalPage").style.display = "flex";

});