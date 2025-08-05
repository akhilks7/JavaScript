let p = 2; 
let i = 1;


while (i <= 100) {
    let result = i ** p;
    
    if (result >= 8 && result <= 36) {
        console.log(` ${result}`);
    }

    if (result >= 36 && result <= 8) {
        break; 
    }

    i++;
}