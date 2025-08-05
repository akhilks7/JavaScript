// * 
// * * 
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for(row=1;row<=9;row++){
    str=``
    if (row<=5) {
        for(col=1;col<=row;col++){
     str=str+`* `
    }
    }
    if (row>5) {
        for(col=1;col<=10-row;col++){
     str=str+`* `
    }
    }

    console.log(str);
    
}

// for (let row = 1; row <= 9; row++) {
//   let str = "";

//   if (row <= 5) {
//     for (let col = 1; col <= row; col++) {
//       str += "* ";
//     }
//   } else {
//     for (let col = 1; col <= 10 - row; col++) {
//       str += "* ";
//     }
//   }

//   console.log(str);
// }

console.log(`-------------------------------------------------`);

//     *
//    * *
//   *   *
//  *     *
// * * * * *

// for(i=1;i<=5;i++){
//     str=``
//     for( space=5;space>i;space--){
//         str=str+` `
//     }
//     for(j=1;j<=i;j++){
//         if (j==1||i==5||i==j) {
//             str+=`* `
//         }else{
//             str+=`  `
//         }
//     }
//     console.log(str);
    
// }


for(i=1;i<=4;i++){
    str=``
    for(j=1;j<=7;j++){
        if (i+j==5||j-i==3||i==4) {
            str+=`* `
        }else{
            str+=`  `
        }
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);

// for(i=5;i<=5;i++){
//     str=``
//     for(j=1;j<=5;j++){
//         if (i==1||j==1||i==5||j==5) {
//             str+=`* `
//         }else{
//             str+=`  `
//         }
        
        
//     }console.log(str);
// }

for(i=1;i<=5;i++){
    str=``
    for(j=1;j<=5;j++){
        if (i==1||j==1||i==5||j==5) {
            str+=`* `
        }else{
            str+=`  `
        }
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);

// * * * * *
//   *   *
//     *
//   *   *
// * * * * *

for(i=1;i<=5;i++){
    str=``
    for(j=1;j<=5;j++){
        if (i==1||i==5||i+j==6||i==j) {
            str+=`* `
        }else{
            str+=`  `
        }
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);

for(row=1;row<=5;row++){
    str=``
    for(spa=1;spa<=5-row;spa++){
        str=str+` `
    }
    for(col=1;col<=row;col++){
        
     str=str+`* `
    }    
    console.log(str); 
}
