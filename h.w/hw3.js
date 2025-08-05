x=45

console.log(x%15==0 ? `fizzbuzz`:
            // x%5==x%3 ? `${x} is divisible by 5 and 3`:
            x%5==0 ? `buzz`:  
            x%3==0? `fizz`:
            `${x} is not divisible by 15,5 or 3`);
