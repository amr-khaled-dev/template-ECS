let sectionSKills = document.querySelector(".skills");
let spanSkills = document.querySelectorAll(".skills .prog-holder .prog span");
let sectionStats = document.querySelector(".stats");
let spanStats = document.querySelectorAll(".stats .box .number");
let countStarted = false;
let countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();
let upButton = document.querySelector(".landing .up");

// counter for the events section
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".events .time .unit .days").textContent = days;
    document.querySelector(".events .time .unit .hours").textContent = hours;
    document.querySelector(".events .time .unit .minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .time .unit .seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
})

// function to start count up in stats section
function startCount(e) {
    const goal = e.dataset.goal;
    const count = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}

// window.onscroll = function () {
//     if (window.scrollY >= sectionSKills.offsetTop - 100) {
//         spanSkills.forEach((span) => {
//             span.style.width = span.dataset.width;
//         })
//     }
//     if (window.scrollY >= sectionStats.offsetTop - 200) {
//         if (!countStarted) {
//             spanStats.forEach((span) => startCount(span));
//         }
//         countStarted = true;
//     }
// }

// the above code is replaced with the below code to optimize the scroll event listener to start 
// the animation of the skills and stats sections only when they are in the viewport.
window.addEventListener("scroll", () => {
    if (window.scrollY >= sectionSKills.offsetTop - 100) {
        spanSkills.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
});
window.addEventListener("scroll", () => {
    if (window.scrollY >= sectionStats.offsetTop - 200) {
        if (!countStarted) {
            spanStats.forEach((span) => startCount(span));
        }
        countStarted = true;
    }
});


window.addEventListener("scroll", () => {
    this.scrollY >= 700 ? upButton.classList.add("show") : upButton.classList.remove("show");
});

upButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})