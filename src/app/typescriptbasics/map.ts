const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

// helppo siisti luuppi
const cleanMappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

const mappedPizzas = pizzas.map(function (pizza) {
  return pizza.name.toUpperCase();
});
//jos olis vain yksi argumentti ei tarvitsisi sulkuja mutta on pizza ja index
const mappedPizzasArrow = pizzas.map((pizza, index) => {
  return pizza.name.toUpperCase();
});

console.log(mappedPizzas);
console.log(mappedPizzasArrow);
