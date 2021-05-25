function yearGenerator(){
    var generatoreQuestion = prompt("What is your birth year?");
    var dayGeneratore = (2021 - generatoreQuestion) * 365 ;
    var h1 = document.createElement("h1");
    var answerText = document.createTextNode("Hello your age day is " + dayGeneratore);  
    console.log(answerText);  
    h1.appendChild(answerText);
    h1.classList.add("result-outcome");
    document.querySelector(".result-container1").appendChild(h1);
}

function deleteButton(){
    document.querySelector(".result-outcome").remove();
}

//second project.

function popUp(){
    var image = document.createElement("img");
    image.src = "https://i.pinimg.com/originals/a3/ef/13/a3ef1335f1772145d648122d250f18aa.gif";
    var div = document.querySelector(".imag-pop");
    div.appendChild(image);
}

// thirth project

let colors = ["green", "blue", "yellow", "red"];
let buttonBlue = document.querySelector(".btn1")
let buttonReset = document.querySelector(".btn2")
let color = document.querySelector(".color");

buttonBlue.addEventListener('click',function() {
    let randomNumber = changeBackground();
    document.body.style.backgroundColor = colors[randomNumber];
    let h1 = document.createElement("h1");
    color.textContent = ("The background color is " + colors[randomNumber]);
    color.appendChild(h1);
})

function changeBackground(){
    return Math.floor(Math.random() * colors.length);
}

let hix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

buttonReset.addEventListener('click',function(){
    let hixColor = "#";
    for(let i = 0; i < 6; i++){
        hixColor += hix [randomNumber2()];
    }
    color.textContent = (hixColor);
    document.body.style.backgroundColor = hixColor;
})

function randomNumber2(){
    return Math.floor(Math.random() * hix.length);
}

// dark mode
function darkMode(){
    let body = document.body;
    body.classList.toggle("background-mode");
}