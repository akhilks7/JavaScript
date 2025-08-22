//             method over loading
class a{
    methoda(){
        console.log(`inside class a`);
        
    }

      methoda(num){
        console.log(`inside class b ${num}`);
        
    }
}


// ... rest operator
const obj = new a()
obj.methoda()


class sum{
    sumof(...arg){
        return arg.reduce((a,b)=> a + b)
    }
}

const obj1 = new sum()
console.log(`sum = ${obj1.sumof(1,2,3,4,4,5,6,77,7)}`);
 

// method overriding

