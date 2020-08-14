 
const pizzza = {
    name: 'Pepperoni'
}
const topppings = ['pepperoni'];

// yhdistäminen
const orrder = {
    ...pizzza,
    ...topppings
}; 

console.log(orrder); 

