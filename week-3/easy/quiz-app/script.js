import { quizData } from './data.js'

const quiz = document.querySelector("#quiz")
const submitBtn = document.querySelector("#submit-btn")
const result = document.querySelector("#result")
let selectedAnswers = []

for(let index=0; index < quizData.length; index++){
    
    // creating main div
    const mainDiv = document.createElement("div")

    // creating question div
    const questionDiv = document.createElement("div")
    const question = document.createElement("h3")
    question.textContent = index+1 + ". " + quizData[index].question
    questionDiv.appendChild(question)
    mainDiv.appendChild(questionDiv)

    // creating questions div
    const optionsDiv = document.createElement("div")
    const buttonA = document.createElement("button")
    buttonA.innerText = "a) " + quizData[index].a
    const buttonB = document.createElement("button")
    buttonB.innerText = "b) " + quizData[index].b
    const buttonC = document.createElement("button")
    buttonC.innerText = "c) " + quizData[index].c
    const buttonD = document.createElement("button")
    buttonD.innerText = "d) " + quizData[index].d
    optionsDiv.appendChild(buttonA)
    optionsDiv.appendChild(buttonB)
    optionsDiv.appendChild(buttonC)
    optionsDiv.appendChild(buttonD)
    mainDiv.appendChild(optionsDiv)

    // appending mainDiv in quiz area
    quiz.appendChild(mainDiv)

    // button handlers
    buttonA.addEventListener("click", function(){
        buttonA.style.backgroundColor = "#eef2ff"
        buttonB.style.backgroundColor = "white"
        buttonC.style.backgroundColor = "white"
        buttonD.style.backgroundColor = "white"
        
        selectedAnswers[index] = 'a'
    })

    buttonB.addEventListener("click", function(){
        buttonA.style.backgroundColor = "white"
        buttonB.style.backgroundColor = "#eef2ff"
        buttonC.style.backgroundColor = "white"
        buttonD.style.backgroundColor = "white"
        
        selectedAnswers[index] = 'b'
    })

    buttonC.addEventListener("click", function(){
        buttonA.style.backgroundColor = "white"
        buttonB.style.backgroundColor = "white"
        buttonC.style.backgroundColor = "#eef2ff"
        buttonD.style.backgroundColor = "white"
        
        selectedAnswers[index] = 'c'
    })

    buttonD.addEventListener("click", function(){
        buttonA.style.backgroundColor = "white"
        buttonB.style.backgroundColor = "white"
        buttonC.style.backgroundColor = "white"
        buttonD.style.backgroundColor = "#eef2ff"
        
        selectedAnswers[index] = 'd'
    })
}

submitBtn.addEventListener("click", function(){
    let score = 0
    for(let i=0; i<quizData.length; i++){
         if(selectedAnswers[i] === quizData[i].correct){
            score++
         }
    }

    result.textContent = `Your score is ${score} out of ${quizData.length} `
})

