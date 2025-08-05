//w.a.p to check if the number is palindrome or not

num=11211
x=num
sum=0
while (num>0) {
    sum=sum+(num%10)   
    sum=sum*10          
    num=Math.floor(num/10)
}
sum=sum/10
console.log(x==sum ? `${sum} is palindrome` : `${sum} is not palindrome`);
