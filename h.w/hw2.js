num1=1000
num2=300
num3=300

// console.log(num1<num3&&num1>num2&&num3>num2 ? `${num1} is second largest number \n ${num2}<${num1}<${num3}`:
//             num2<num3&&num2>num1&&num3>num1 ? `${num2} is second largest number \n ${num1}<${num2}<${num3}`:
//             num3>num1&&num3>num2&&num2>num1 ? `${num3} is second largest number \n ${num2}<${num1}<${num3}`:`false`);



// console.log(num1-num2<0 && num3-num2>0 ? `${num2} is second largest number \n ${num1}<${num2}<${num3}`:
// num2-num1<0 && num3-num1>0 ? `${num1} is second largest number \n ${num2}<${num1}<${num3}`:
// num3-num3<0 && num1-num3>0 ? `${num3} is second largest number \n ${num1}<${num3}<${num2}`:
// `false`);



// console.log(num2<num1 && num1<num3 ? `${num1} is second largest number \n ${num3}<${num1}<${num2}`:
//             num3<num1 && num1<num2 ? `${num1} is second largest number \n ${num2}<${num1}<${num3}`:
//             num3<num2 && num2<num1 ? `${num2} is second largest number \n ${num1}<${num2}<${num3}`:
//             num1<num2 && num2<num3 ? `${num2} is second largest number \n ${num3}<${num2}<${num1}`:
//             num1<num3 && num3<num2 ? `${num3} is second largest number \n ${num2}<${num3}<${num1}`:
//             num2<num3 && num3<num1 ? `${num3} is second largest number \n ${num1}<${num3}<${num2}`:
//             num2==num3 && num3<num1 ? `${num1} is  largest number \n ${num2}==${num3}<${num1}`:
//             num1==num3 && num3<num2 ? `${num2} is  largest number \n ${num1}==${num3}<${num2}`:
//             num2==num1 && num1<num3 ? `${num3} is  largest number \n ${num2}==${num1}<${num3}`:
//             num2==num3 && num3>num1 ? `${num1} is  smallest number \n ${num1}<${num2}==${num3}`:
//             num1==num3 && num3>num2 ? `${num2} is  smallest number \n ${num2}<${num1}==${num3}`:
//             num2==num1 && num1>num3 ? `${num3} is  smallest number \n ${num3}<${num2}==${num1}`:
//             num2==num1 && num1==num3 ? `All number are equal \n ${num3}==${num2}==${num1}`:
//             `false`);    


if(num1>num2 && num1>num3){
    if (num2>num3) {
        console.log(`second largest number is ${num2}`);
        console.log(`decending order is ${num1} > ${num2} > ${num3}`);
        
    } else if (num2<num3) {
        console.log(`second largest number is ${num3}`);                      //eroor
        console.log(`decending order is ${num1} > ${num3} > ${num2}`);
    }
}else if(num2>num1 && num2>num3){
    if (num1>num3) {
        console.log(`second largest number is ${num1}`);
        
        console.log(`decending order is ${num3} > ${num1} > ${num2}`);
        
    } else {
        console.log(`second largest number is ${num3}`);
        console.log(`decending order is ${num1} > ${num3} > ${num2}`);
    }
}else if(num3>num1 && num3>num2){
    if (num1>num2) {
        console.log(`second largest number is ${num1}`);
        console.log(`decending order is ${num2} > ${num1} > ${num3}`);
        
    } else {
        console.log(`second largest number is ${num2}`);
        console.log(`decending order is ${num1} > ${num2} > ${num3}`);
    }
}else{
    console.log(`some numbers are same`);
    
}