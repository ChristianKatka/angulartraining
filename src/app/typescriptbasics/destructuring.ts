const ppizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};

// objecti suluilla voidaan valita mitä halutaan parametri objectin sisältä, sekä halutessa muuttaa nimi
function orderr({name: pizzaName, toppings: pizzaToppings}) {
    console.log(pizzaName, pizzaToppings);
    return { pizzaName, pizzaToppings };
} 

const myOrder = orderr(ppizza);

// destructuroidaan suoraan muuttujassa
const { pizzaName } = orderr(ppizza);

// array destrukturointi
const taytteet = ['pepperoni', 'bacon', 'chili'];
const [first, second, third] = taytteet;
console.log(first, second, third);

function logToppings ([first, second, third]: any) {
    console.log(first, second, third);
}
logToppings(taytteet); 