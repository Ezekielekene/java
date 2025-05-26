const fix = 4.5432;
console.log(fix.toFixed(3));
console.log(Number.isNaN(4))

let userprofile =  {
    username: "vincent",
    password: "BigBOY",
  };
console.log(userprofile.username)



let direprofile = {
  username: "Fineboy",
  password: "BigBOY",
  status: "single",
  brainstatus: "Abnormal",
  lifestyle: "GAY",
  age: "undefined",
  gender: "GAY",
  disability: "polio",
  maritalpatner: "RAM"
};




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