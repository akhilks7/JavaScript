//  w.a.p to check a given person is eligible for voting

a=17

if (a<18) {
    console.log("not eligible to vote");
    
} else {
    console.log(" eligible to vote");
}

console.log("---------------ternary operator---------------");

a=20

console.log(a>=18 ? `eligible to vote` : ` not eligible to vote`);


// w.a.p to check a number is positive or negative
a=0
if (a>0) {
    console.log(`${a} is positive`);
} else if(a<0) {
    console.log(`${a} is negative`);
} else{
    console.log(`${a} is neutral`);
}
// -----------------------------------------------------------------------------------------
console.log("---------------ternary operator---------------");

console.log(a>0 ? `${a} is positive`:a<0 ? `${a} is negative` : `${a} is neutral`);

// -----------------------------------------------------------------------------------------

console.log("---------------truthy operator---------------");
a=300
console.log(a==300 && `value of a is 30`);
console.log(a==30 && `value of a is 30`);