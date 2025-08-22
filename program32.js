//[id,name,price,stock]
products = [
    [1, 'hide and seek', 50, 20],
    [2, 'lays', 20, 80],
    [3, 'oreo', 40, 100],
    [4, 'parleG', 25, 10],
    [5, 'tiger', 20, 30],
    [6, 'unibic', 60, 0],
    [7, 'good day', 70, 20]
]
//1. display all product name
products.forEach(product => {
    console.log(product[1]);
});

console.log(`--------------------------------`);

//2. display product whose price < Rs.50
p = products.filter((num) => num[2] < 50)
console.log(p);
console.log(`--------------------------------`);

products.filter((num) => num[2] < 50).forEach((pro) => console.log(pro[1]))

console.log(`--------------------------------`);

//3. print price of oreo

p = products.find((num) => num[1] == `oreo`)
console.log(p[2]);
console.log(`--------------------------------`);

//another method
console.log(products.find((num) => num[1] == `oreo`)[2]);
console.log(`--------------------------------`);
//4. print costly product name

costly = products.reduce((num1, num2) => num1[2] > num2[2] ? num1 : num2)
console.log(costly[1]);
console.log(`---------------------------------`);

//5. display out of stock product

p = products.filter((num) => num[3] == 0)
console.log(p);
console.log(`--------------------------------`);

products.filter((num) => num[3] == 0).forEach((pro) => console.log(pro[1]))
console.log(`--------------------------------`);

//6. sort products based on stock in decsending order

products.sort((x, y) => y[3] - x[3]).forEach((pro) => console.log(pro[1]))

// console.log(products);

console.log(`---------------------------------`);

//7. print product having maximum available stock

costly = products.reduce((num1, num2) => num1[3] > num2[3] ? num1 : num2)
console.log(costly);
console.log(`---------------------------------`);

//8. is there any product can be purchased by Rs. 10

console.log(products.some((num) => num[2] <= 10) ? "Yes" : "No");
console.log(`--------------------------------`);


//9. Is there any product in the range of 10 to 30

console.log(products.some((num) => num[2] >= 10 && num[2] <= 30) ? "Yes" : "No");
console.log(`--------------------------------`);

//10. print all products in the range of 10 to 30
p = products.filter((num) => num[2] >= 10 && num[2] <= 30)
console.log(p);

console.log(`--------------------------------`);

products.filter((num) => num[2] >= 10 && num[2] <= 30).forEach((pro) => console.log(pro[1]))