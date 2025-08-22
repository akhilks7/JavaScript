

//                  array method includes

x=['sonu','monu','tonu','Arun']
y=x.includes('Arun')
console.log(y);
console.log(x.includes('arun'));
console.log(x.includes('Sonu')? 'Found' : 'Not Found');

//                  array method splice

x=['sonu','monu','tonu','Arun']
x.splice(2,1)
console.log(x);
x.splice(1,2)
console.log(x);
x.splice(1,0,'New')
console.log(x);
x.splice(1,0,'New')
console.log(x);
x.splice(1,0,'New','New1','new2')
console.log(x);

                //  array method indexOf

x=['sonu','monu','tonu','Arun']
y=x.indexOf('Arun')
console.log(x);

console.log(y);
console.log(x.indexOf('Arun'));
console.log(x.lastIndexOf('sonu'));