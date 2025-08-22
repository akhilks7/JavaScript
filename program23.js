//array

weekends=['monday','tuesday',10]
// console.log(weekends);
// console.log(weekends[0]);
// console.log(weekends[2]);

for(i=0;i<weekends.length;i++){
    console.log(weekends[i]);
    
}
console.log(`-------------------------------------------`);

//for in

for(let i in weekends){
    console.log(i);
    
}

console.log(`-------------------------------------------`);

//for of

for(let i of weekends){
    console.log(i);
    
}

weekends.push("thursday")
console.log(weekends);

console.log(`-------------------------------------------`);

weekends.unshift("thursday")
console.log(weekends);


console.log(`-------------------------------------------`);
weekends.pop("thursday")
console.log(weekends);

console.log(`-------------------------------------------`);
weekends.shift("thursday")
console.log(weekends);