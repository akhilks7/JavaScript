//w.a.p to print pattern
// # # # #
// # # # #
// # # # #
// # # # #

// for(row=1;row<=4;row++){
//     str=``
//     for(col=1;col<=4;col++){
//     str=str+`# `
//     }
//     console.log(str);
    
// }


// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=4;col++){
    str=str+row+` `
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=4;col++){
    str=str+col+` `
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);

//*
//* *
//* * *
//* * * *
//* * * * *

// for(row=1;row<=5;row++){
//     str=``
//     for(col=1;col<=5;col++){
//     if (col<=row) {
//         str=str+`* `
//     }
//     }
//     console.log(str);
    
// }

for(row=1;row<=5;row++){
    str=``
    for(col=1;col<=row;col++){
     str=str+`* `
    }
    console.log(str);
    
}
console.log(`-------------------------------------------------`);

//1
//2 2
//3 3 3
//4 4 4 4

// for(row=1;row<=5;row++){
//     str=``
//     for(col=1;col<=5;col++){
//     if (col<=row) {
//         str=str+row+` `
//     }
//     }
//     console.log(str);
    
// }

for(row=1;row<=5;row++){
    str=``
    for(col=1;col<=row;col++){
    if (col<=row) {
        str=str+row+` `
    }
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

// for(row=1;row<=5;row++){
//     str=``
//     for(col=1;col<=5;col++){
//     if (col<=row) {
//         str=str+col+` `
//     }
//     }
//     console.log(str);
    
// }

for(row=1;row<=5;row++){
    str=``
     for(col=1;col<=row;col++){
    if (col<=row) {
        str=str+col+` `
    }
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);


//      *
//     * *
//    * * * 
//   * * * *

// for(row=1;row<=5;row++){
//     str=``
//     for(spa=1;spa<=5-row;spa++){
//         str=str+` `
//     }
//     for(col=1;col<=row;col++){
        
//      str=str+`* `
//     }
//     console.log(str);
    
// }

for(row=1;row<=5;row++){
    str=``
    for(spa=4;spa>=row;spa--){
        str=str+` `
    }
    for(col=1;col<=row;col++){
        
     str=str+`* `
    }
    console.log(str);
    
}

console.log(`-------------------------------------------------`);
