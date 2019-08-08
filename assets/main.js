"use strict";

const input = document.querySelector(".main_input");
const button = document.querySelector(".main_btn");
const feedback = document.querySelector(".main_feedback");
const counter = document.querySelector(".header_counter");
const numberToGuess = getRandomNumber(100);
let counterValue = 0;

//Contador
counter.innerHTML = counterValue;
function counterCount() {
  counterValue += 1;
  counter.innerHTML = counterValue;
}
//Función número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`Mi número aleatorio es ${numberToGuess}`);

//Todos los feedbacks
const feedbacks = {
  try: "Escribe un número y dale a Prueba",
  high: "Demasiado alto",
  low: "Demasiado bajo",
  win: "¡HAS GANADO, CAMPEONA!"
};

//Función enséñame un feedback
function showFeedback(a) {
  feedback.innerHTML = feedbacks[a];
}

//Función feedback respecto a input
function getFeedback() {
  const inputWrtn = parseInt(input.value);
  if (!inputWrtn) {
    showFeedback("try");
  } else if (inputWrtn === numberToGuess) {
    showFeedback("win");
  } else if (inputWrtn < numberToGuess) {
    showFeedback("low");
  } else {
    showFeedback("high");
  }
}

//Evento del botón
function btnclick(event) {
  event.preventDefault();
  getFeedback();
  counterCount();
}

button.addEventListener("click", btnclick);
