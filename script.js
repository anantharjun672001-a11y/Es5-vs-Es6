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

let name="John Doe "
console.log("my name is",name);

// with template literal

let say="Hello How are you?"

console.log(`Hi I am FIne 
${say}`);


