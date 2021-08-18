
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1

next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})
prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = circles.length;
    }
    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    // progress percentage
    const percentage = (currentActive - 1) / (circles.length - 1) * 100;
    console.log(percentage)
    progress.style.width = percentage + "%";

    if (currentActive === 1)
        prev.disabled = true
    else if (currentActive === circles.length)
        next.disabled = true
    else {
        prev.disabled = false
        next.disabled = false

    }
}