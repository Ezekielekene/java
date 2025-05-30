const fix = 4.5432;
console.log(fix.toFixed(3));
console.log(Number.isNaN(4))

let userprofile =  {
    username: "vincent",
    password: "BigBOY",
  };
console.log(userprofile.username)



const student = {
  name: "Naomi",
  grade: { English: "B3", Biology: "A1", Physics: "E8" },
  isactive: true
}
console.log(student)



//const codestudent = {
 /// name: "naomi",
  
//}


//prototype
const animal = {
  type: "unknown",
  sound: "none",
  makeSound() {
    console.log(this.sound)
  }
}

const dog = Object.create(animal);
dog.type = "dog"
dog.sound = "woof"

console.log(dog)//nested


const defaultsettings = { theme: "light", fontsize: 16 };
const userSettings = { fontsize: 18 };


const finalSettings = Object.assign({}, defaultsettings, userSettings);
console.log(finalSettings)



const ent = [
  ["name", "Tosin"],
  ["age", 25],
];
console.log(Object.fromEntries(ent))



const original = { A : 77, B : 66}
const final = { ...original, c: 55 }
console.log(final)




let direprofile = {
  username: "Chuwudire",
  status: "single",
  brainstatus: "Abnormal",
  lifestyle: "GAY",
  age: 156,
  gender: "GAY",
  disability: "polio",
  maritalpatner: "RAM"
};
console.log(direprofile)




const diseases = ["malaria", "typhiod", "measles"]
diseases.push("gonorrhea")
diseases.pop()
console.log(diseases);


const topics = ["Data Types", "Numbers", "Operators"];
topics.push(5.86, 7, 89);
topics.push({ name: "yemi", age: 5, sex:"male", Isactive: true})
console.log(topics)

topics.pop()
console.log(topics)


topics.unshift("Javascript")
console.log(topics)

const fineboy = []
fineboy.push("Dire has syphilis and gonorrhea")
console.log(fineboy)


const Qualities = ["good", "nice", "wicked", "brutal"];
console.log(Qualities)
Qualities.splice(2, 2, "cheerful")
console.log(Qualities)


let patners = ["segun", "bola", "lazarus", "emma", "ahmed", "grog", "dire"];
console.log(patners)
let peeps = patners.slice(2, 5)
console.log(peeps)












let dire = ["nyash", "nyash", "nyash"]
let career = dire.includes("nyash");
console.log(career)

//let lifestyle = dire.pop("This is me") 
//console.log(lifestyle)