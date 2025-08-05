//logical operators

x=30

// 5<x<20 // 5 < 30 < 20
console.log(`5<x<20 ${5<x && x<20}`);
console.log(`5<x<20 ${5<x || x<20}`);
console.log(`5<x<20 ${!(5<x && x<20)}`);