 
function sumAll(arr) {
   return arr.reduce((prev, next) => prev + next);
};

// voi antaa monta parametria
function sumAllRestParam(message, ...arr) {
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
};

const sum = sumAll([1,2,3,4,5,6,7,8,9]);
const sumrest = sumAllRestParam('Hello', 1,3,4,6,8,9); 
console.log(sumrest);

