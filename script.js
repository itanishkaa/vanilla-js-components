window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / totalHeight) * 100;
    const scrollBar = document.getElementById("scroll-progress-bar");
    scrollBar.style.width = scrollPercentage + '%';
});

const updateBtn = document.getElementById("update-btn");
const percentInput = document.getElementById("percent-input");
const linearFill = document.getElementById("linear-fill");
const circleProgress = document.getElementById("circle-progress");
const circleText = document.getElementById("circle-text");

const CIRCUMFERENCE = 314;

function setProgress(percent) {
    let validPercent = Math.max(0, Math.min(100, percent));
    linearFill.style.width = validPercent + "%";
    linearFill.textContent = validPercent + "%";
    const offSet = CIRCUMFERENCE - (validPercent / 100) * CIRCUMFERENCE;
    circleProgress.style.strokeDashoffset = offSet;
    circleText.textContent = validPercent + "%";
}

updateBtn.addEventListener("click", () => {
    const value = parseFloat(percentInput.value) || 0;
    setProgress(value);
});

setProgress(parseFloat(percentInput.value));