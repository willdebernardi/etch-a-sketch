const container = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const rainbow = document.getElementById("rainbow");
const changeSize = document.getElementById("change");
let side = 10;

function createDivs(side) {
    container.style.gridTemplateRows = `repeat(${side}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    area = side**2;
    for(i = 0; i < area; i++) {
        element = document.createElement("div");
        element.classList.add("black");
        container.appendChild(element);
    } 
}

createDivs(side);


function redDraw() {
    let divs = document.querySelectorAll(".black");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function() {
            div.classList.add("red");
        })
    });
}
function rainbowEffect() {
    let divs = document.querySelectorAll(".black");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function() {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
        })
    });
}
redDraw();

reset.addEventListener("click", function() {
    let divs = document.querySelectorAll(".black");
    divs.forEach((div) => {
        div.classList.remove("red");
        div.style.backgroundColor = "";
    })
});

changeSize.addEventListener("click", function() {
    let side = prompt("How many sides for the new square?");
    removeDivs();
    createDivs(side);
    redDraw();
})

rainbow.addEventListener("change", function() {
    if (this.checked) {
        rainbowEffect();
    } else {
        // removeDivs();
        // createDivs(side);
        redDraw();
    }
});

function removeDivs() {
    let createdDivs = document.querySelectorAll(".black");
    createdDivs.forEach((divs) => {
        divs.remove()
    })
}

