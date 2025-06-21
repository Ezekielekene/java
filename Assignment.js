//charAt
//---Returns the character at a specific index
//in a string

let myname = "ezekiel"
console.log(myname.charAt(0))

let food = "garri"
console.log(food.charAt(1))

let area = "mile2"
console.log(area.charAt(2))

let fruit = "Pear"
console.log(fruit.charAt(3))

let country = "canada"
console.log(country.charAt(4))

let state = "delta"
console.log(state.charAt(2))

let continent = "antartica"
console.log(continent.charAt(6))


let animalff = "hipopotamus"
console.log(animal.charAt(8))

let drink = "Bigcola"
console.log(drink.charAt(6))

let car = "BMW"
console.log(car.charAt(2))

let persons = "vincent, is, in class"
let people = persons.includes("vincent")
console.log(people)


let date = "222333444"
console.log(date.split(""))


const code = "7"
console.log(code.padStart(4, 5))










//Assign
const a = { x: 1 };
const b = { y: 2};
const merged = Object.assign({}, a, b);
console.log(merged);


//fromEntries
const entries = [["a", 1], ["b", 2]]
const obj = Object.fromEntries(entries);
console.log(obj)



//Create
const proto = ({ inherited: 1 });
proto.inherited = 2
