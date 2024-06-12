'use strict'

let button = document.querySelector("button")
let input = document.querySelector("input")
let divQuestion = document.querySelector(".question-box")
let divAnswer = document.querySelector(".results")
let answer = document.querySelector(".answer-p")

button.onclick = results

function results() {
    let breadType = input.value
    if (breadType === '') {
        input.style.border = "1px red solid"
    } else {
        input.style.border = "1px black solid"
        divAnswer.style.display = "block"
        answer.innerHTML = "Вы " + breadType + ". Поздравляем!"
    }
}