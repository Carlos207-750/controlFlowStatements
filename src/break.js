const numbers = [];
let operations = 0;
let avoidedOperations = 0;
let indexOfNumberOver50 = -1;


for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}


for (let i = 0; i < numbers.length; i++) {
    operations++;
    console.log(numbers[i]);
    if (numbers[i] > 50) {
        indexOfNumberOver50 = i;
        break;
    }
}


avoidedOperations = numbers.length - (indexOfNumberOver50 + 1);


console.log("Opérations réalisées: " + operations);
console.log("Opérations évitées: " + avoidedOperations);
console.log("Premier nombre supérieur à 50 trouvé à l'indice : " + indexOfNumberOver50);