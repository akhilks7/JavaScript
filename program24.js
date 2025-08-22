expense=[12000,5000,28000,10000,6000]
total=0
for(i=0;i<expense.length;i++){
    total+=expense[i]
}
console.log(total);

console.log(`------------------------------------`);

largest=0
// for(i=0;i<expense.length;i++){
//     expense[i]>largest ? largest = expense[i] : largest=largest 
// }

for(i of expense){
    if (largest<expense[i]) {
        largest=expense[i]
    }
}
console.log(largest);

console.log(`------------------------------------`);

smallest=expense[0]
// for(i=0;i<expense.length;i++){
//     expense[i]<smallest ? smallest = expense[i] : smallest=smallest 
// }
for(i in expense){
    if (smallest>expense[i]) {
        smallest=expense[i]
    }
}

console.log(smallest);


console.log(`------------------------------------`);
//w.a.p to find 2 or net in array and print its position

arr=[10,11,12,2,3,4]

searchitem=2
ispresent= false
for(item of arr){
    if (item==searchitem) {
        ispresent=true
    }
}
console.log(ispresent?`${searchitem} is present` :`${searchitem} is not present`);


console.log(`------------------------------------`);

a=[4,5,6]
// op=[11,10,9]

variable=7
op=[]

for(item of a){
    op.push(item+variable)
    variable-=2
}
console.log(op);
console.log(`------------------------------------`);

sum=0
op=[]
for(item of a){
    sum+=item
}
for(item of a){
    op.push(sum-item)
}

console.log(op);



 arr = [1, 3, 5, 2, 3, 6, 1, 7, 5];
 duplicates = [];

for ( i = 0; i < arr.length; i++) {
  for ( j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
}
console.log("Duplicate numbers:", duplicates);

console.log(`------------------------------------`);

a=[10,20,30,20,30,40,50,60,10]
for ( i = 0; i < a.length ; i++) {
    for (j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
   console.log(a[i]);
        break
        }
        }
}

console.log(`------------------------------------`);

a=[10,20,30,20,30,40,50,60,10]
o=[]
for ( i = 0; i < a.length ; i++) {
    for (j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
//    console.log(a[i]);
o.push(a[i])

       
        }
        }
}

console.log(o);
