const body = document.body;
const numAmount = document.querySelector(".num-amount");
const addBtn = document.querySelector(".add-btn");
const clearBtn = document.querySelector(".clear-btn");
const colorChangerBtn = document.querySelector(".back-color-btn");
let counter = parseInt(localStorage.getItem("savedValue")) || 0;

let colors = ["#FADADD","#AEEEEE","#98FB98","#FFCBA4","#F8F8FF","#F4A460","#D8BFD8","#008B8B", "#9370DB", "#B2D3C2"]
numAmount.value = counter++;

function updateLocalStorage()
{
    localStorage.setItem("savedValue", counter);    
}

addBtn.addEventListener("click", () => {
    numAmount.value = counter;
    updateLocalStorage();
    counter++;
    numAmount.style.fontSize = "28px";
    
})

clearBtn.addEventListener("click", ()=> {
    counter = 0;
    numAmount.value = counter;
    numAmount.style.fontSize = "28px";
    updateLocalStorage();
    counter = 1;
})

colorChangerBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * 10);
    let randomColor = colors[randomIndex];
    body.style.backgroundColor = randomColor;
})

document.querySelector(".num-amount").value = localStorage.getItem("savedValue");