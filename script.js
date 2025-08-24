const hearts = ["❤", "💖", "💕", "💘", "💓", "💗", "💞"];

function createHeart() {
    const heart = document.createElement("span");
    heart.classList.add("hearts-child");
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = ${Math.random() * 100}vw;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
