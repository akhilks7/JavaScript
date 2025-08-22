//forEach
a=[1,2,3,4,5]
a.forEach(element => console.log(element));

// a.forEach((num)=> console.log(num));




//w.a.p to find the square of all the elements
a.forEach(element => console.log(element * element));

// a.forEach(element => console.log(element **2));
console.log(`--------------------------------------------------------`);

sq=a.map((item)=>item**2)
console.log(sq);

//w.a.p to cretae a new array with number <= 3 then increment by 1 else decrement by 1

op=a.map((item)=>{
    if (item<=3) {
    return item +1
    }
    else{
        return item-1
    }
}
)
console.log(op);

op=a.map((item)=> item <=3 ? item+1 : item-1)
console.log(`--------------------------------------------------------`);

console.log(op);