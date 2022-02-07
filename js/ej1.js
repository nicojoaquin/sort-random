//Ejercicio 1
let arr = [9,2,6,1,4,3,8,7];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {  
    if(arr[j] > arr[j + 1]) {
      const num = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = num;
    };
  };
};
console.log(arr);

//..................//

//Ejercicio 2
let animales = ["Oso", "Elefante", "Pájaro", "Tiburón"];

for (let i = 0; i < animales.length; i++) {
  for (let j = 0; j < animales.length - 1; j++) {  
    if(animales[j].length > animales[j + 1].length) {
      const num = animales[j];
      animales[j] = animales[j + 1];
      animales[j + 1] = num;
    };
  };
};
console.log(animales);
