const trickyBtn = document.querySelectorAll(".tricky-btn");
const player = document.getElementById("player");
const playerIcon = document.getElementById("player-icon");
const cards = document.querySelectorAll(".card");
console.log(trickyBtn)
trickyBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("北七你是不是以為有功能")
    })
})
let img_url = ""

player.addEventListener("mouseenter", (e) => {
    setPlayerStatus("active")
})
player.addEventListener("mouseleave", (e) => {
    setPlayerStatus("disabled")
})

cards.forEach(card => {
    card.addEventListener("mouseenter", (e) => {
        img_url = card.children[0].getAttribute("src")
        playerIcon.setAttribute("src", img_url)
        setPlayerStatus("active")
    })
    card.addEventListener("mouseleave", (e) => {
        setPlayerStatus("disabled")

    })

})

function setPlayerStatus(status) {
    if (status === "active") {
        player.classList.add("active")
        player.classList.remove("disabled")
    }
    if (status === "disabled") {
        player.classList.add("disabled")
        player.classList.remove("active")
    }
}