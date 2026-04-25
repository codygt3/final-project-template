let img = document.getElementById("jumpscare");

function triggerJumpscare() {
    img.style.display = "block";
    img.classList.add("show");
}

img.addEventListener("animationend", endAnimation);

function endAnimation() {
    img.style.display = "none";
    img.classList.remove("show");
    scheduleJumpscare();
}

function scheduleJumpscare() {
    let delay = Math.random() * 45000 + 15000; //Random miliseconds between 15000 and 60000 (15s and 60s)
    setTimeout(triggerJumpscare, delay);
}

scheduleJumpscare();
