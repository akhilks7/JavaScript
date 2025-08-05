function demo(num1,num2) {
    console.log(`inside the function`);
    sum=0
    sum=num1+num2
    console.log(sum);
    
    console.log(`--------------------------------------------------------`);
    return sum
    console.log(`dont work`);
    
}

function cube(cube) {
    // cube1=0
    cube1=cube*cube*cube
    return cube1
}

function ode(od) {
    if (od%2==0) {
        console.log(`${od} is even`);
        
    }
    else{
        console.log(`${od} is odd`);
    }
}

demo(20,30)
console.log(sum);

console.log(demo(20,30));

cube(3)
console.log(cube1);

ode(5)


const oddeven = (num) => num%2==0 ? `even` : `odd`

console.log(oddeven(4));
