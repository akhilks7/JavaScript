//w.a.p to check if number is prime or not


// if (n < 2) {
//     console.log(`${n} is not a prime number`);
// } else {
//     for ( i = 2; i <= n / 2; i++) {
//         if (n % i === 0) {
//             console.log(`${n} is not a prime number`);
//             break;
//         }
//     }
//     if (n >= 2 && (n === 2 || i > n / 2)) {
//         console.log(`${n} is a prime number`);
//     }
// }
n=0
if (n<2) {
    console.log(`${n} is not a prime number`);
}else if (n==2) {
    console.log(`${n} is a prime number`);
}else{
    for(i=2;i<n;i++){
        if (n%i==0) {
            console.log(`${n} is not a prime number`);
       break
      }
      if (n%i!=0) {
            console.log(`${n} is  a prime number`);
       break
      }
    //   if (i==n-1) {
    //     console.log(`${n} is  a prime number`);
    //   }
    }
}


console.log(`----------------------------------------------------------`);
a=10
b=30
gcd=1

for(i=1;i<=a&&i<=b;i++){
    if (a%i==0 && b%i==0) {
        gcd=i
    }
}
console.log(gcd);

console.log(`--------------------------------------------------------`);

for(i=2;i<=50;i++){
    if (i==2) {
        console.log(`2 is a prime number`);
        continue
    }
    for(j=2;j<=i;j++){
        if (i%j==0) {
            break
        }
        if (j==Math.floor(i/2)) {
            console.log(`${i} is  a prime number`);
       break
      }
    }
}

console.log(`--------------------------------------------------------`);

for ( a = 8; a <= 500; a++) {
     b = a;
     sum = 0;
     d = a.toString().length;

     temp = a;
    while (temp > 0) {
         p = temp % 10;
        sum += Math.pow(p, d);
        temp = Math.floor(temp / 10);
    }

    if (sum === b) {
        console.log(`${b} is an Armstrong number`);
    }
}

console.log(`--------------------------------------------------------`);

