str='sonu'

console.log(str.startsWith('s'));
console.log(str.endsWith('u'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log('---------------------------');

console.log(str.substring(1, 3));

console.log('---------------------------');

console.log(str.slice(-3, -1));
// console.log(str.slice(3, 1));            // dont work

console.log('---------------------------');
letter='        hellooo        '
console.log(letter);
console.log(letter.length);

console.log(letter.trim());
console.log(letter.length);

sentence='i am learning javascript and i love it , learning javascript is fun ,anf javascript have many useful features'
console.log(sentence);

console.log(sentence.replace('javascript','JS'));

console.log(sentence);

console.log(sentence.replaceAll('javascript','JS'));


//         Array.from method

s='hello'
console.log(Array.from(s));

//          separator method
d='hello world why the worlds are consist of many things'
console.log(d.split(' '));
console.log(d.split(''));
console.log(d.split('a'));