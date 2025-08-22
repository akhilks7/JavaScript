for(i=1;i<=5;i++){
    str=``
    for(j=1;j<=i;j++){
        if ((i+j)%2==0) {
            str+=`1 `
        }
        else{
            str+=`0 `
        }    
    }
    console.log(str);
    
}
console.log(`----------------------------------------------------------------------`);

for(i=1;i<=5;i++){
    str=``
    for(spa=5;spa>=i;spa--){
        str+=` `
    }
    for(j=1;j<=i;j++){
        str+=`* `
    }
    console.log(str);   
}
for(i=5;i>=1;i--){
    str=``
    for(spa=5;spa>=i;spa--){
        str+=` `
    }
    for(j=1;j<=i;j++){
        str+=`* `
    }
    console.log(str);   
}

console.log(`----------------------------------------------------------------------`);

for(i=1;i<=5;i++){
    str=``
    for(spa=5;spa>=i;spa--){
        str+=` `
    }
    for(j=1;j<=i;j++){
        str+=`* `
    }
    console.log(str);   
}

console.log(`----------------------------------------------------------------------`);

// num = 11;

// for (row = 1; row <= 5; row++) {
//     str = "";

//     for (space = 4; space >= row; space--) {
//         str += "   ";
//     }

//     for (col = 1; col <= row +space; col++) { // col <= row + (row - 1)
//         str += num + " ";
//         num++;
//     }

//     console.log(str);
// }

//             11
//          12 13 14
//       15 16 17 18 19
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35

x=11
i=0

for(row=1;row<=5;row++){
    str=''
    for(spa=5;spa>row;spa--){
        str+='   '
    }
    for(col=1;col<=row+i;col++){
        str+=x+' '
        x++
    }
    i++
    console.log(str);
    
}