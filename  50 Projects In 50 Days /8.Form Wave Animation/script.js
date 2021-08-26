
const labels = document.querySelectorAll(".form-control label")
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${30*index}ms">${letter}</span>`)
        .join('')
})
