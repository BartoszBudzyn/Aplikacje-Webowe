let lives = 3;
let points = 100;

const frameWidth = 200;
const frames = 10;

let activeZombies = [];

const empty_heart = document.createElement("div");
empty_heart.id = "heart-icon";
empty_heart.style.backgroundImage = "url('images/empty_heart.png')";
empty_heart.style.backgroundSize = "cover";

const full_heart = document.createElement("div");
full_heart.id = "heart-icon";
full_heart.style.backgroundImage = "url('images/full_heart.png')";
full_heart.style.backgroundSize = "cover";

document.addEventListener("DOMContentLoaded", function () {
    function createZombie(scale) {
        let div;
        const newDiv = document.createElement("div");
        newDiv.id = "animation";
        newDiv.style.transform = `scale(${scale})`;
        newDiv.style.position = "absolute";
        newDiv.style.left = window.innerWidth + "px";
        const bottomOffset = window.innerHeight * 0.2;
        const randomOffset = Math.random() * 100;
        newDiv.style.top =
            window.innerHeight - bottomOffset - randomOffset + "px";
        document.body.appendChild(newDiv);
        div = newDiv;
        let frame = 0;
        let position = window.innerWidth;

        const animate = setInterval(function () {
            const frameOffset = (++frame % frames) * -frameWidth;
            div.style.backgroundPosition = frameOffset + "px " + "0px";
            position -= (2 - scale) * 10;
            div.style.left = position + "px";
            if (position < -200) {
                removeZombie(div, animate);
                lives--;
                updateLives();
                if (lives <= 0) {
                    const audio = new Audio("images/sad-music.mp3");
                    audio
                        .play()
                        .then(() => {
                            alert("Game Over" + "\n" + "Your score: " + points);
                        })
                        .finally(() => {
                            audio.pause();
                            audio.currentTime = 0;
                        });
                    clearAllZombies();
                    points = 100;
                    updatePoints();
                    lives = 3;
                    updateLives();
                }
            }
        }, 100);

        activeZombies.push({ div: div, interval: animate });

        document.addEventListener("click", function (event) {
            if (div && div.contains(event.target)) {
                points += 20;
                updatePoints();
                removeZombie(div, animate);
            }
        });
    }

    function removeZombie(div, interval) {
        div.remove();
        clearInterval(interval);
        activeZombies = activeZombies.filter(
            (zombie) => zombie.div !== div && zombie.interval !== interval
        );
    }

    function clearAllZombies() {
        activeZombies.forEach((zombie) => {
            zombie.div.remove();
            clearInterval(zombie.interval);
        });
        activeZombies = [];
    }

    const pointsDisplay = document.getElementById("points-display");
    function updatePoints() {
        pointsDisplay.textContent = points;
    }

    updatePoints();
    document.addEventListener("click", function (event) {
        if (event.target.tagName === "BODY") {
            points -= 5;
            updatePoints();
        }
    });

    function updateLives() {
        const heartsContainer = document.getElementById("lives-display");
        heartsContainer.innerHTML = "";

        for (let i = 0; i < lives; i++) {
            const heart = full_heart.cloneNode(true);
            heartsContainer.appendChild(heart);
        }

        for (let i = lives; i < 3; i++) {
            const heart = empty_heart.cloneNode(true);
            heartsContainer.appendChild(heart);
        }
    }

    setInterval(function () {
        createZombie(Math.random() + 0.3);
    }, Math.random() * 2000 + 1000);

    updateLives();
});
