str='yooooy'

r=str.split('').reverse().join('')
console.log(str==r ? 'palindrome':'not palindrome');

// console.log(r);


console.log('--------------------');

car = {
    name : "Baleno",
    model : "Hatch Back",
    manufacturer : "Maruthi",
    price : "10Lakhs"
}

// display car name and manufacturer name
console.log(car.name);
console.log(car.manufacturer);
console.log('--------------------');
// check whether "model" key is present  or not, if present display the value.
if (car.model) {
    console.log(car.model);
}
else{
    console.log('not present');
    
}
console.log('--------------------');

// add "varient" key to the car object with value as "Manuel".
car.varient = ["Manuel"];
console.log(car);

console.log('--------------------');
// update a new value "automatic" to the car varient.
car.varient.push('Automatic');
console.log(car);
console.log('--------------------');
// create a new key "color" and value as "red", "blue", "green"
car.color = ["red", "blue", "green"];
console.log(car);
console.log('--------------------');

text = "hai hello all hello world all"
// w.a p to get the word count from the given text
// o/p ={hai:1, hello:2, all:2, word:1}
wordCount = {};
// text.split(' ').forEach(word => {
//     wordCount[word] = (wordCount[word] || 0) + 1;
// });
// console.log(wordCount);

w=text.split(' ')
for(word of w){
    if (word in wordCount) {
        wordCount[word]+=1;
    } else {
        wordCount[word] = 1;
    }
}
console.log(wordCount);

console.log('--------------------');

numArray = [10,20,30,20,40,50,50,60,10]
// w.a.p to find the count count
// countMap = {};
// numArray.forEach(num => {
//     countMap[num] = (countMap[num] || 0) + 1;
// });
// console.log(countMap);
nu={}
for(word of numArray){
    if (word in nu) {
        nu[word]+=1;
    } else {
        nu[word] = 1;
    }
}
console.log(nu);

pattern = 'ABCBAA'
//find the first recursive letter -> B
letter={}
fr=''
p=pattern.split('')
for(word of p){
    if (word in letter) {
        fr=word
        console.log(fr);
        break
        
    } else {
        letter[word]=1
    }
}

// console.log(wordCount);


console.log('-------------------------------------------------------------');
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
for(p of products){
    console.log(p.pName);
    
}
console.log('--------------------');

//2. print all mobile details whose display is lcd
for(p of products){
    p.display=='lcd' && console.log(p.pName);
    
}

products.filter((pro)=>pro.display=='lcd').forEach((item) =>console.log(item.pName));
console.log('--------------------');


//3. print 5g mobile phone name
for(p of products){
    p.band=='5g' && console.log(p.pName);
    
}
console.log('--------------------');


//4. sort mobile based on price
u=products.sort((x,y)=>x.price - y.price).forEach((item)=> console.log(item.price));

// console.log(u);

console.log('--------------------');

//5. print costly mobile
console.log(products.reduce((p1,p2)=> p1.price>p2.price? p1: p2).pName);
console.log('--------------------');

//6. print low cost mobile
console.log(products.reduce((p1,p2)=> p1.price<p2.price? p1: p2).pName);
