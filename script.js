// Scoping : var vs let vs const 
//Var example :- function / global scope 

/*  if(true){
    var x=10;
}
console.log(x);
  */

//let example :- block scope 

/* if(true){
    let x=10;
    console.log(x);
}
 */

/* if (true){
    const x=15;
    console.log(x);
    
} */


// Arrow Function

//without arrow function

/* function add(a,b){
    return a+b;
}
console.log(add(2,3)); */

//with arrow function

/* const addition = (a,b)=>a+b;
console.log(addition(3,4)); */

// Template literals

// without template literals
/* 
let name="John Doe "
console.log("my name is",name);
*/

// with template literal
/*
let say="Hi I am Fine"

console.log(`Hello How are you? ${say}`);

 */

// spread operator

/* const arr=[1,2,3]
const arr1=[4,5,6]
const arr2=[...arr1,...arr]
console.log(arr2);

const obj={name:'arjun'}
const obj1={age:24}
const obj2={...obj,...obj1,}
console.log(obj2); */

// rest parameter

/* function oddEven(a,b,...c) {
    let even=[];
    for(let i=0;i<c.length;i++){
        if(c[i]%2===0){
            even.push(c[i])
        }
    }
    return even
}
console.log(oddEven(10,11,12,13,14,15,16,17,18)) */

//Array Destructure:- 

//without Destructure:-

const fruits = ["🍎","🍊","🍓","🥭"]
const apple = fruits[0];
const orange = fruits[1];
const strawberry = fruits[2]
const mango = fruits[3]
console.log(apple,orange,strawberry,mango);

    


