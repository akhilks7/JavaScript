a=[11,10,12,3,2,4]

// step1:start
//        step2:sort the array in ascending order
a.sort((x, y) => x - y);
mid=0
searchitem=2
low=0
up=a.length-1
ispresent=false
//       step5:repeat the step 3 untill low is lessthan or equal to up
while(low<=up){
    
//        step3: find the mid value using the formula mid=math.floor(low+up)/2   inoder to remove the decimal
mid=Math.floor((low+up)/2)
//        step4: check if the search element is equal to the mid element  
//                   a) mid value == search value then print "search element is found"
if (a[mid] === searchitem) {
    ispresent = true
    break
}
//                   b) mid value > search value then update the up value to mid-1
else if (a[mid] > searchitem) {
    up = mid - 1;
}
//                   c) mid value < search value then update the low value to mid+1
else {
    low = mid + 1;
}
}
console.log(ispresent?"search element is found":"search element is not found");

//       step6:stop

//w.a.p to find the duplicate number in two different array
p=[10,11,12,20,30]
q=[11,20,25,30,33]

p.sort((x, y) => x - y);
q.sort((x, y) => x - y);
ispresent = false;
 i = 0;
 j = 0;
while (i < p.length && j < q.length) {
    if (p[i] === q[j]) {
        console.log("Duplicate element found:", p[i]);
        ispresent = true;
        i++;
        j++;
    } else if (p[i] < q[j]) {
        i++;
    } else {
        j++;
    }
}
// console.log(ispresent ? "Duplicate element found" : "No duplicate element found");
