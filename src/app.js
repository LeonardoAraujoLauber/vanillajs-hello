/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Definir los arrays con las opciones
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Función para obtener un elemento aleatorio de un array
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Función para generar una excusa
  function generateExcuse() {
    let whoPart = getRandomElement(who);
    let actionPart = getRandomElement(action);
    let whatPart = getRandomElement(what);
    let whenPart = getRandomElement(when);

    let excuse = `${whoPart} ${actionPart} ${whatPart} ${whenPart}`;
    document.getElementById("excuse").textContent = excuse;
  }

  // Asignar la función generateExcuse al evento onclick del botón
  document.getElementById("generador").onclick = generateExcuse;

  // Generar una excusa cuando la página se carga por primera vez
  generateExcuse();
};
