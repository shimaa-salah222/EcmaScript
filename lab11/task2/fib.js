// function fibonacciGenerator(n) {
//     let a = 0;
//     let b = 1;
//     let result = [];
  
//     for (let i = 0; i < n; i++) {
//       result.push(a);
//       let temp = a;
//       a = b;
//       b = temp + b;
//     }
  
//     return result;
//   }
// console.log(fibonacciGenerator(5)); 
// console.log(fibonacciGenerator(8));

/////////////////////////


// function* fibonacciGenerator(n) {
//     let a = 0;
//     let b = 1;
  
//     while (a <= n) {
//       yield a;
//       let temp = a;
//       a = b;
//       b = temp + b;
//     }
//   }
  
//   const fib1 = fibonacciGenerator(5);
//   for (let num of fib1) {
//     console.log(num);
//   }
  
//   const fib2 = fibonacciGenerator(8);
//   for (let num of fib2) {
//     console.log(num);
//   }



function* fibonacciGenerator(n) {
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < n; i++) {
      yield a;
      let temp = a;
      a = b;
      b = temp + b;
    }
  }
const fib = fibonacciGenerator(5);
for (let num of fib) {
  console.log(num);
}

const fibb = fibonacciGenerator(8);
for (let num of fibb) {
  console.log(num);
}   

