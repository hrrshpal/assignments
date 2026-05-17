const redBtn = document.querySelector("#red-btn")
const yellowBtn = document.querySelector("#yellow-btn")
const blackBtn = document.querySelector("#black-btn")
const purpleBtn = document.querySelector("#purple-btn")
const greenBtn = document.querySelector("#green-btn")
const blueBtn = document.querySelector("#blue-btn")
const defaultBtn = document.querySelector("#default-btn")
const colorInput = document.querySelector("#colorInput")
const userBtn = document.querySelector("#user-btn")

redBtn.addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "red";
})

yellowBtn.addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "yellow";
})

blackBtn.addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "black";
})

purpleBtn.addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "purple";
})

greenBtn.addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "green";
})

blueBtn.addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "blue";
})

defaultBtn.addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "peachpuff";
})

userBtn.addEventListener("click", function(){
    const userChoice = document.querySelector('#colorInput').value
    document.querySelector('body').style.backgroundColor = userChoice;
    })

