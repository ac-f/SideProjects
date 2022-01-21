const jokeBtn = document.getElementById("jokeBtn");
const jokeEl = document.getElementById("joke");

jokeBtn.addEventListener("click", generateJoke)
generateJoke();

async function generateJoke() {
    const url = "https://icanhazdadjoke.com/"
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }
    joke = await fetch(url, config)
        .then(res => res.json())
        .then(j => jokeEl.innerText = j.joke)

}
