//wrp to check the number is mobile no or not?
p=6235452818

console.log(p.toString().length==10? `mobile no ${p}`: "not a mobile no");
console.log("......................................................................................");
//wrp to check the given mail is email or not?
mail="athulkdinu@gmail.com"
console.log(mail.includes("@") && mail.endsWith(".com")? `email ${mail}`: "not a email")
console.log("......................................................................................");


//wap to check the given string starts with letter a?
str="akhil"
console.log(str.startsWith("a")?"starts With a": "not starts with a");


console.log("......................................................................................");

stentence='good morning all'
x=Array.from(stentence)
vowel=['a','e','i','o','u','A','E','I','O','U']
o=[]
for(char of x){
    if (vowel.includes(char)) {
        // console.log(char);
        o.push(char)
        
    }
}
console.log(o);
console.log("......................................................................................");

Array.from(stentence).filter((char) => vowel.includes(char)).forEach((item) => console.log(item));

//w.a.p to check whether the string is palindrome or not
//  string = 'malayalam'