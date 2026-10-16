let u;
// undefined
let n = null;
console.log(u);
u=10;
console.log(n);

var w=10;
console.log(w);


//1. 
let a = 100;

console.log(a++ + ++a +a++ + ++a);

console.log(a);

//2.
let a1 = 37;

console.log(--a1 + a1--);

console.log(a1);

//3.
let a2 = 5; 
let b = a2-- - --a2; 
console.log(b, a2);

//4.
let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);
