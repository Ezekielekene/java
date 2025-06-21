// function name(params) {
    
// }

function sayHello() {
    console.log("Hello, World");    
}
sayHello();


//function with parameter
// let name = "yemi"

function greet(Theirname) {
    console.log(`Hello ${Theirname}`);
    console.log("hello" + Theirname + "!");
}
greet("yemi");
greet("bola");
greet(4)


function add(a, b, c) {
    console.log(a + b);
}

add(2, 4, 3)

function check(a, b, c) {
    if (a > b || a > b) {
        console.log("proper fraction")
    } else {
        console.log("improper fraction")
    }
}


check(5, 4, 2)


function square(Number) {
    return Number * Number;
}

console.log(square(2))
