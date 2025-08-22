//w.a.p to find

a=[1,3,6,8,5,4,2]
console.log(`---------------------------------`);
 
//sum
value= a.reduce((previ,curr)=> previ+curr)
console.log(value);
console.log(`---------------------------------`);
//highest
highest= a.reduce((num1,num2)=> num1>num2 ? num1:num2 )
console.log(highest);
console.log(`---------------------------------`);
//lowest
lowest= a.reduce((num1,num2)=> num1<num2 ? num1:num2 )
console.log(lowest);
console.log(`---------------------------------`);

//-----------------------------------------------------------------------------

//     filter() method

a=[11,444,23,1,55,7,4,77]


//w.a.p to print all even number from the array

even=a.filter((num)=> num%2==0)
console.log(even);
console.log(`---------------------------------`);

//w.a.p to print all odd number from the array

odd=a.filter((num)=> num%2!=0)
console.log(odd);
console.log(`---------------------------------`);

//         some() method

even=a.some((num)=> num%2==0)
console.log(even);
console.log(`---------------------------------`);

//         find() method

even=a.find((num)=> num%2==0)
console.log(even);
console.log(`---------------------------------`);
