const fix = 4.5432;
console.log(fix.toFixed(3));
console.log(Number.isNaN(4));

let userprofile = {
  username: "vincent",
  password: "BigBOY",
};
console.log(userprofile.username);

const student = {
  name: "Naomi",
  grade: { English: "B3", Biology: "A1", Physics: "E8" },
  isactive: true,
};
console.log(student);

//const codestudent = {
/// name: "naomi",

//}

//prototype
const animal = {
  type: "unknown",
  sound: "none",
  makeSound() {
    console.log(this.sound);
  },
};

const dog = Object.create(animal);
dog.type = "dog";
dog.sound = "woof";

console.log(dog); //nested

const defaultsettings = { theme: "light", fontsize: 16 };
const userSettings = { fontsize: 18 };

const finalSettings = Object.assign({}, defaultsettings, userSettings);
console.log(finalSettings);

const ent = [
  ["name", "Tosin"],
  ["age", 25],
];
console.log(Object.fromEntries(ent));

const original = { A: 77, B: 66 };
const final = { ...original, c: 55 };
console.log(final);

//values
const obj5 = { a: 1, b: 2 };
console.log(Object.values(obj5)); // [1, 2]

//keys
const obj32 = { a: 1, b: 2 };
console.log(Object.keys(obj32)); // ['a', 'b']

//fromentries
const entries = [
  ["a", 1],
  ["b", 2],
];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }

//freeze
const obj1 = { a: 1 };
Object.freeze(obj1);
obj1.a = 2;
obj1.b = 3;
console.log(obj1); // { a: 1 }

//assign
const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2 }
                
//create
const person = {
  greet() {
    return "Hello";
  },
};
const newPerson = Object.create(person);
console.log(newPerson.greet()); // "Hello"

//seal
const myprofile = {
  name: "EZEKIEL",
  age: "55",
  location: "paris"
}
Object.seal(myprofile);
myprofile.name = "vincent"
myprofile.location = "Lagos"
console.log(myprofile)



//entries
const obj45 = { a: 1, b: 2 };
console.log(Object.entries(obj45)); // [['a', 1], ['b', 2]]

let direprofile = {
  username: "Chuwudire",
  status: "single",
  brainstatus: "Abnormal",
  lifestyle: "GAY",
  age: 156,
  gender: "GAY",
  disability: "polio",
  maritalpatner: "RAM",
};
console.log(direprofile);

const diseases = ["malaria", "typhiod", "measles"];
diseases.push("gonorrhea");
diseases.pop();
console.log(diseases);

const topics = ["Data Types", "Numbers", "Operators"];
topics.push(5.86, 7, 89);
topics.push({ name: "yemi", age: 5, sex: "male", Isactive: true });
console.log(topics);

topics.pop();
console.log(topics);

topics.unshift("Javascript");
console.log(topics);

const fineboy = [];
fineboy.push("Dire has syphilis and gonorrhea");
console.log(fineboy);

const Qualities = ["good", "nice", "wicked", "brutal"];
console.log(Qualities);
Qualities.splice(2, 2, "cheerful");
console.log(Qualities);

let patners = ["segun", "bola", "lazarus", "emma", "ahmed", "grog", "dire"];
console.log(patners);
let peeps = patners.slice(2, 5);
console.log(peeps);

let dire = ["nyash", "nyash", "nyash"];
let career = dire.includes("nyash");
console.log(career);

//let lifestyle = dire.pop("This is me")
//console.log(lifestyle)




const vincent = {
  habit: "coding",
  score: "A1"
}
Object.seal(vincent);
vincent.habit = "eating"
vincent.score = "B2"
console.log(vincent);



const Bear = {
  Ability: "unknown",
  wilddomestic: "unkown",
  makeSound() { console.log(this.Ability,this.wilddomestic);
  },
};
console.log(Bear)
delete Bear["Ability"];

const status3 = Object.create(Bear);
status3.Ability = "canivorous"
status3.wilddomestic = "wild"
console.log(status3)
o

delete status3.wilddomestic;



const English = { a: 5 }
const Maths = { b: 6 }
const total = Object.assign(English, Maths)
console.log(total);



