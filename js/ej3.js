//Funcion que genera un numero entero aleatorio
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let palos = ["diamonds", "hearts", "clubs", "spades"];
let valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K", "J", "A" ];
let cartas = [];

//Iteramos en los arreglos de palos y valores para formar las 52 combinaciones
for (palo of palos) {
  for(valor of valores) {
    cartas.push({valor, palo});
  };
};

//Funcion que se ejecuta cada 10 segundos
const timer = () => {
  setTimeout(() => {
    displayCard(cartas[getRandomNum(0, cartas.length)]);
  }, [10000])
}

//Le asignamos a entity el palo y mostramos la carta con sus valores
const displayCard = ({valor, palo}) => {
  let entity; 
  palo === 'diamonds' ? entity = 'diams' : entity = palo;
  document.querySelector('#card-container').innerHTML = 
    `
      <article class="card ${palo}">
        <span>&${entity};</span>
        <p class="card-num">${valor}</p>
        <span class="card-draw">&${entity};</span>
      </article>
    `;
  timer();
};

window.onload = displayCard(cartas[getRandomNum(0, cartas.length)]);

//Mostramos otra carta al presionar el boton
document.querySelector('#btn-new').addEventListener('click', () => {
  displayCard(cartas[getRandomNum(0, cartas.length)]);
});

