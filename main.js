"use strict";

const input = document.querySelector(".main_input");
const button = document.querySelector(".main_btn");
const feedback = document.querySelector(".main_feedback");
const counter = document.querySelector(".header_counter");
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
const numberToGuess = getRandomNumber(100);
console.log(`Mi número aleatorio es ${numberToGuess}`);

//Todos los feedbacks
const feedbacks = [
  "Escribe un número y dale a Prueba",
  "Demasiado alto",
  "Demasiado bajo",
  "¡HAS GANADO, CAMPEONA!"
];

//Función enséñame un feedback
function showFeedback(a) {
  feedback.innerHTML = feedbacks[a];
}

//Función feedback respecto a input
function getFeedback() {
  const inputWrtn = parseInt(input.value);
  if (!inputWrtn) {
    showFeedback(0);
  } else if (inputWrtn === numberToGuess) {
    showFeedback(3);
  } else if (inputWrtn < numberToGuess) {
    showFeedback(2);
  } else {
    showFeedback(1);
  }
}
function eraseInput() {
  input.value = "";
}

//Evento del botón
function btnclick(event) {
  event.preventDefault();
  getFeedback();
  counterCount();
}

button.addEventListener("click", btnclick);
