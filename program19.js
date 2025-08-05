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
