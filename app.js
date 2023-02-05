const count = document.getElementById("count");
const options = document.querySelectorAll(".option");
const answer = document.getElementById("answer");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 1;
let total = 10;

prev.addEventListener("click", () => {
    if (current > 1) {
        current -= 1;
        count.innerText = `${current} / ${total}`;
    } else {
        current = 1;
    }
});

next.addEventListener("click", () => {
    if (current>= 10) {
        current = 10;
    } else {
        current += 1;

        count.innerText = `${current} / ${total}`;
    }
});


options.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('active')
        answer.classList.toggle('active')
    })
})