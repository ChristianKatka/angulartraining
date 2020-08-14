
const pizza  = {
    name: 'pepperoni',
    price: 15,
    getName() {
        return this.name;
    }
};

const toppings = ['pepperoni'];

const order = {
    pizza: pizza,
    toppings: toppings 
}
// simppelimpi order. Sama kuin ylempi
const simpleorder = { pizza, toppings };

// sama funktionaalisesti
function createOrder(pizza, toppings) {
    return { pizza, toppings };
}

console.log(simpleorder); 