//w.a.p to find the pair whose sum is 6

a=[2,3,4,5]
found=false
for ( i = 0; i < a.length ; i++) {
    for (j=i+1;j<a.length;j++){
        if(a[i]+a[j]==6){
   console.log(`${a[i]},${a[j]}`);
   found=true
        // break
        }
        }
}
!found && console.log(`no pairs found`);

console.log(`------------------------------------`);


//w.a.p to find the duplicate number in two different array

p=[10,11,12,20,30]
q=[11,20,25,30,33]

for(i of p){
    for(j of q)
        if (i==j) {
            console.log(`Duplicate found: ${i}`);
        }
}