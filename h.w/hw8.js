// num=153
// i=0
// r=0
// sum=0
// while (num>=0) {
//     num=num/10
//     i++
// }

// while (num>=0) {
//     r= num%10
//     sum=sum+(r**i)
//     num=Math.floor(num/10)
// }
// console.log(sum);


num=153
t=num
r=0
s=0

while (num>0) {
    r=num%10
    s=s+(r**3)
    num=Math.floor(num/10)
}

console.log(s==t ? `armstrong`: `not armstrong`);
