////////////////////Q1////////////////

// let x = 5;
// let y = 10;

// [x, y] = [y, x];

// console.log(x); 
// console.log(y);

///////////////////////q2//////////////////////

// function getMax(...numbers) {
//     return Math.max(...numbers);
// }

// console.log(getMax(1, 2, 3, 4, 5)); 
// console.log(getMax(10, 20, 30, 40, 50)); 

///bonus//////////////////////////////////////////////

// function getMinMax(...numbers) {
//     let min = Math.min(...numbers);
//     let max = Math.max(...numbers);
//     return [min, max];
// }

// let result = getMinMax(1, 2, 3, 4, 5);
// console.log(`Min: ${result[0]}, Max: ${result[1]}`);

// result = getMinMax(10, 20, 30, 40, 50);
// console.log(`Min: ${result[0]}, Max: ${result[1]}`);


///////////////Q3/////////////////


// var Fruit = ["apple", "strawberry", "banana", "orange", "mango"];

// function checkString(arr) {
//     return arr.every(x => typeof x === 'string');
// }

// console.log(checkString(Fruit));

// function checkStartWithA(arr) {
//     return arr.some(x => x.startsWith('a'));
// }

// console.log(checkStartWithA(Fruit)); 


// function filterFruits(arr) {
//     return arr.filter(x => x.startsWith('b') || x.startsWith('s'));
// }

// var filteredFruits = filterFruits(Fruit);
// console.log(filteredFruits);

// filteredFruits.forEach(fruit => console.log(fruit));