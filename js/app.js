const inputText = document.querySelector("#inputText");
const submitBtn = document.querySelector("#submitBtn");
const guesses = document.querySelector("#guesses");
const guessGroup =document.querySelector("#guessGroup");
const lastResult = document.querySelector("#lastResult");
const lowOrHigh = document.querySelector("#lowOrHigh");
const funText = document.querySelector("#funText");

let randomNumber = Math.floor(Math.random() * 100) +1;
console.log("Random number", randomNumber);
let guessCount = 1;
      
function guessNumber() {
    const userInput = inputText.value.trim();
    if (userInput.startsWith("0") || !Number.isInteger(Number(userInput))) {
        alert("A: Invalid input: Enter a whole number between 1 and 100.");
        inputText.value = "";
        return
    }

    const validGuessNumber = Number(userInput);
    console.log(typeof validGuessNumber);

    if ((validGuessNumber >= 1) && (validGuessNumber <= 100)) {
        
        if  (guessCount === 1) {
            guesses.textContent = "Previous Guess: ";
        }
        guesses.textContent = `${guesses.textContent} ${validGuessNumber}`;  
        
        if(Number(validGuessNumber) === randomNumber) {
            lastResult.textContent = "Congratulation, You got it right";
            funText.textContent = "စိတ်ဆိုးပြေပါတော့နော် ချို, တောင်းပန်ပါတယ်, သိပ်ချစ်တယ် ချို့ကို";
            lowOrHigh.textContent = "";
            setGameOver();

        } else if (guessCount === 10) {
            lastResult.textContent = "!!! GAME OVER !!!"
            funText.textContent = "စိတ်ဆိုးပြေပါတော့နော် ချို, တောင်းပန်ပါတယ်, သိပ်ချစ်တယ် ချို့ကို";
            lowOrHigh.textContent = "";
            setGameOver();

        } else {
            lastResult.textContent = "Wrong!";
            if (validGuessNumber < randomNumber) {
                lowOrHigh.textContent = "Last guess was too low";
            } else if (validGuessNumber > randomNumber) {
                lowOrHigh.textContent = "Last guess was too high";
            }
        }


    } else {
        alert("B: Invalid input: Enter a whole number between 1 and 100.");
    }
    
    inputText.value = "";
    inputText.focus();
    guessCount++
}

function setGameOver() {
    inputText.disabled = true;
    submitBtn.disabled = true;
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Start new game";
    resetBtn.id = "resetBtn"
    resetBtn.className = "px-2 py-1 bg-[#000B58] rounded-md text-base md:text-lg";
    guessGroup.appendChild(resetBtn)
    resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
    const textParas = document.querySelectorAll(".para");
    for (const textPara of textParas) {
        textPara.textContent = "";
    }
    guessGroup.removeChild(resetBtn);
    inputText.disabled = false;
    submitBtn.disabled = false;
    inputText.value = '';
    inputText.focus();
    // lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

}

submitBtn.addEventListener("click", guessNumber)

inputText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        guessNumber();
    }
})