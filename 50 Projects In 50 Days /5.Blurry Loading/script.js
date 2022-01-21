const loadingText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0;

let timer = setInterval(blurring, 30)
function blurring() {
    load++;

    if (load > 99) {
        clearInterval(timer)
    }
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = 1-load/100;
    bg.style.filter = `blur(${70-load}px)`;
    console.log(70-load);
}
