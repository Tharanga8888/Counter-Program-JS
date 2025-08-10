const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const stepInput = document.getElementById("stepInput");
const maxInput = document.getElementById("maxInput");
const minInput = document.getElementById("minInput");
const message = document.getElementById("message");
const toggleTheme = document.getElementById("toggleTheme");

let count = Number(localStorage.getItem("count")) || 0;
let darkTheme = true;
updateDisplay();

function updateDisplay() {
    countLabel.textContent = count;
    localStorage.setItem("count", count);

    countLabel.classList.add("count-animate");
    setTimeout(() => countLabel.classList.remove("count-animate"), 200);
}

function validateAndUpdate(newCount) {
    const maxVal = Number(maxInput.value);
    const minVal = Number(minInput.value);
    message.textContent = "";

    if (newCount > maxVal) {
        message.textContent = "Reached maximum value!";
        return;
    }
    if (newCount < minVal) {
        message.textContent = "Reached minimum value!";
        return;
    }
    count = newCount;
    updateDisplay();
}

increaseBtn.onclick = () => {
    validateAndUpdate(count + Number(stepInput.value));
};

decreaseBtn.onclick = () => {
    validateAndUpdate(count - Number(stepInput.value));
};

resetBtn.onclick = () => {
    count = 0;
    updateDisplay();
};

toggleTheme.onclick = () => {
    darkTheme = !darkTheme;
    document.body.className = darkTheme ? "dark-theme" : "light-theme";
};
