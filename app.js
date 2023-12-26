
//Solución 1
/*
  Utilizamos dos bucles para iterar el array numérico y comparamos que la suma de dos
  elementos sea igual al parametro hasNumber utilizado por el usuario para validar un
  número.
  De esta forma ponemos el foco en la facilidad y rapidez de la implementación.
*/
const findSumNumber = (nums , hasNumber) => {
  for(let i = 0 ; i < nums.length ; i++){
    
    for(let j = 0 ; j < nums.length ; j++){
        
      if(nums[i] + nums[j] === hasNumber){
        return true;
      }
    }
  }
  return false ;
};

const nums = [1,2,3,4,5];
const firstSolution = findSumNumber(nums, 8); //true
console.log(`El resultado de la solución 2 es : ${firstSolution}`);


//Solución 2
/*
  En esta solución evitamos recorrer el array dos veces , almacenando los valores del array
  en diferentes constantes.
  1° Buscamos almacenar los numeros vistos en un objeto (seenNumbers)
  2° Recorremos el array y guardamos cada valor en currentNumber
  3° Buscamos el complemento, es decir el numero alcanzado para lograr el parametro requiredSum
  4° Si dentro de los numeros vistos encontramos un complemento devolvemos true
  5° En los numeros vistos almacenamos el numero actual(currentNumber)
  6° Por último si no encontramos ningún complemento, devolvemos false.
*/
const optimicedSolution = (nums, requiredSum) => {
    
    const seenNumbers = {};

    for(let i = 0 ; i < nums.length ; i++){

       const currentNumber =  nums[i];
       const complement = requiredSum - currentNumber ;

       if(seenNumbers[complement]){
        return true ;
       }

       seenNumbers[currentNumber] = true;
    }

    return false ;
};

const secondSolution = optimicedSolution(nums, 22);
console.log(`El resultado de la solución 2 es : ${secondSolution}`);
