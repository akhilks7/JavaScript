//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
highestPositive = covid_data.reduce((a, b) => a[2] > b[2] ? a : b);
console.log( highestPositive[1]);

  

//2. district having Highest 1st dose vaccine
highestPositivedose = covid_data.reduce((a, b) => a[5] > b[5] ? a : b);
console.log( highestPositivedose[1]);




//3. district having lowest death rate
lowestDeathRate = covid_data.reduce((a, b) => a[3] < b[3]
? a : b);
console.log(lowestDeathRate[1]);

//4. sort data with +ve case in descending order
console.log( covid_data.sort((a, b) => b[2] - a[2]));




//5. is district with +ve cases > 15000  
isPositive = covid_data.some((district) => district[2] > 15000);
console.log(isPositive);

//6. sort data with 1st dose vaccine ascending order  
console.log(covid_data.sort((a, b) => a[5] - b[5]))


//7. Print Thrissur details
console.log(covid_data.find((district) => district[1] === 'Thrissur'));


//8. Print total number of positive case
totalPositive = covid_data.reduce((acc, current) => acc + current[2], 0)
console.log(totalPositive);


//9. Print total number of curred cases
totalCured = covid_data.reduce((acc, current) => acc + current[4],0)
console.log(totalCured);



//10. Print curred cases in Idukki
idukkiCured = covid_data.find((district) => district[1] === 'Idukki')
console.log(idukkiCured[4]);

console.log(".............................................................................");

// [roll_no, name, total_marks, grade, attendance_percentage, sports_score, extra_curricular_score]
const student_data = [
  [1, 'Arjun', 480, 'A', 92, 8, 9],
  [2, 'Meera', 455, 'B', 85, 6, 10],
  [3, 'Rahul', 498, 'A+', 97, 9, 7],
  [4, 'Sneha', 430, 'B', 88, 5, 6],
  [5, 'Vikram', 410, 'C', 75, 7, 8],
  [6, 'Anjali', 470, 'A', 90, 10, 9],
  [7, 'Dev', 390, 'C', 80, 4, 5],
  [8, 'Neha', 445, 'B', 87, 6, 9]
];

// 1. Find the student with the highest total marks. 
  
 const highest_marks = student_data.reduce((max, current) => max[2] > current[2]
 ? max : current, student_data[0]);
 console.log(highest_marks);

// 2. List all students with grade 'A'.

console.log(student_data.filter((student) => student[3] === 'A'));




// 3. Sort the students by attendance in descending order.
console.log(student_data.sort((a, b) => b[4] - a[4]))


// 4. Check if any student has total marks less than 400.  

console.log(student_data.some((student) => student[2] < 400))
 


// 5. Print the details of the student named 'Anjali'.
console.log(student_data.find((student) => student[1] === 'Anjali'))


// 6. Calculate the average attendance of all students.
let sum = 0;
student_data.forEach((student) => {
    sum += student[4];
    })
    console.log(sum/student_data.length)


// 7. List students with sports score greater than or equal to 8.
 console.log(student_data.filter((student) => student[5] >= 8))


// 8. Sort students by extra_curricular_score in ascending order.
console.log(student_data.sort((a, b) => a[6] - b[6]))



// 9. Count how many students have grade 'B'.
console.log(student_data.filter((student) => student[3] === 'B').length)



// 10. Create a new array with only [name, total_marks] of students who scored more than 450.
let new_array = student_data
    .filter((student) => student[2] > 450)
    .map((student) => [student[1], student[2]]);
console.log(new_array);


console.log("...............................................................................................");


// [product_id, name, category, price, stock, sold_units, rating]
const product_data = [
  [1, 'Laptop', 'Electronics', 55000, 10, 120, 4.5],
  [2, 'Headphones', 'Electronics', 2000, 50, 300, 4.2],
  [3, 'Book', 'Stationery', 300, 100, 500, 4.8],
  [4, 'Desk Chair', 'Furniture', 3500, 20, 80, 4.1],
  [5, 'Pen Drive', 'Electronics', 700, 150, 200, 4.0],
  [6, 'Water Bottle', 'Kitchen', 400, 200, 180, 4.3],
  [7, 'Monitor', 'Electronics', 12000, 5, 60, 4.6],
  [8, 'Notebook', 'Stationery', 80, 300, 1000, 4.9]
];

// 1. Find the product with the highest rating.
 j = product_data.reduce((max, current) => max[6] > current[6] ? max : current);
console.log(j);


// 2. List all products in the "Electronics" category
console.log(product_data.filter((product) => product[2] === 'Electronics'))
// 3. Sort products by price in descending order.
console.log(product_data.sort((a, b) => b[3] - a[3]))
// 4. Count how many products have stock less than 20.
 console.log(product_data.filter((product) => product[4] < 20).length)
// 5. Find total units sold across all products.
let sm = 0;
product_data.forEach((product) => {
    sm += product[5];
});
console.log(sm);


// 6. Check if any product has a rating below 4.
console.log(product_data.some((product) => product[6] < 4))
// 7. List products with more than 100 units sold.
console.log(product_data.filter((product) => product[5] > 100));

// 8. Find the cheapest product in the "Furniture" category.
console.log(product_data.filter((product) => product[2] === 'Furniture').sort((
    a, b) => a[3] - b[3])[0])
// 9. Create an array of [name, price] for all products.
console.log(product_data.map((product) => [product[1], product[3]]))
// 10. Sort products by sold_units in ascending order.
console.log(product_data.sort((a, b) => a[5] - b[5]))


// [vehicle_no, owner, model, year, km_run, last_service_km, fuel_type, insurance_valid]
console.log(".............................................................................................................");

const vehicle_data = [
  ['KL07AB1234', 'Rahul', 'Swift', 2018, 45000, 40000, 'Petrol', true],
  ['KL07CD5678', 'Meera', 'Baleno', 2020, 30000, 25000, 'Diesel', true],
  ['KL07EF9101', 'Arun', 'i20', 2017, 60000, 55000, 'Petrol', false],
  ['KL07GH1122', 'Sneha', 'Kwid', 2021, 15000, 10000, 'Petrol', true],
  ['KL07IJ3344', 'Vikram', 'Thar', 2019, 70000, 65000, 'Diesel', false],
  ['KL07KL5566', 'Anjali', 'Ciaz', 2022, 10000, 10000, 'Petrol', true]
];

// 1. List vehicles with more than 50,000 km run.
console.log(vehicle_data.filter((vehicle) => vehicle[3] > 50000))
// 2. Check if all vehicles have valid insurance.
console.log(vehicle_data.every((vehicle) => vehicle[7]))
// 3. Find vehicles due for service (km_run - last_service_km > 5000).
console.log(vehicle_data.filter((vehicle) => vehicle[3] - vehicle[4] >
5000))
// 4. Sort vehicles by year in ascending order.
console.log(vehicle_data.sort((a, b) => a[3] - b[3]));


// 5. Print the details of the vehicle owned by “Arun”.
console.log(vehicle_data.find((vehicle) => vehicle[1] === 'Arun'))
// 6. Count how many vehicles use Diesel.
console.log(vehicle_data.filter((vehicle) => vehicle[6] === 'Diesel').length)

// 7. List all models with km run less than 20,000.
console.log(vehicle_data.filter((vehicle) => vehicle[3] < 20000).map((
    vehicle) => vehicle[2]))
// 8. Find vehicle with the highest km_run.
console.log(vehicle_data.reduce((max, current) => max[3] > current[3]
? max : current, vehicle_data[0]))
// 9. Create an array of [owner, model] for Petrol vehicles.
console.log(vehicle_data.filter((vehicle) => vehicle[6] === 'Petrol').map((
    vehicle) => [vehicle[1], vehicle[2]]))
// 10. Check if any vehicle is brand new (year >= 2022).
console.log(vehicle_data.some((vehicle) => vehicle[3] >= 2022));