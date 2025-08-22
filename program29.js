//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

    for(i=0 ;i<=employee.length-1; i++){
        
        console.log(employee[i][1]); 
    }
console.log(`------------------------------------------`);

//print total numbers of employee

console.log(employee.length);

for(emp of employee){
    if (emp[2]==`developer`) {
        console.log(emp);
        
    }
}

console.log(`------------------------------------------`);



//print employee whose salary > 30000

for(emp of employee){
    if (emp[4] >= 30000) {
        console.log(emp);
        
    }
}

console.log(`------------------------------------------`);

// print details of employee Laisha

for(emp of employee){
    if (emp[1] == `Laisha`) {
        console.log(emp);
        
    }
}


console.log(`------------------------------------------`);
//arrange employee based on their salary in descending order

     
    employee.sort((x,y) => y[4] - x[4])
     console.log(employee);
     

console.log(`------------------------------------------`);

//arrange employee based on their experience in ascending order
    employee.sort((x,y) =>  x[5] - y[5]  )
     console.log(employee);
     

console.log(`------------------------------------------`);

// print the employ name whose have the higest salary

 employee.sort((x,y) => y[4] - x[4])
     console.log(employee[0]);


     console.log(`---------------------------------------------------------------`);
     
     // nested array
// [id, name, course, location, fees, duration_in_months]

students = [
    [2001, 'Arjun', 'Python', 'Kochi', 25000, 6],
    [2002, 'Diya', 'JavaScript', 'TVM', 20000, 5],
    [2003, 'Vikram', 'Java', 'Kochi', 30000, 7],
    [2004, 'Sneha', 'Python', 'Kochi', 28000, 6],
    [2005, 'Rahul', 'React', 'TVM', 35000, 4],
    [2006, 'Anaya', 'JavaScript', 'Kochi', 22000, 5],
    [2007, 'Kiran', 'Java', 'TVM', 32000, 7],
    [2008, 'Meera', 'Python', 'Kochi', 26000, 6]
]

// 1. Print all student names
// for (i = 0; i < students.length; i++) {
//     console.log(students[i][1]);
// }
for(nam of students){
    console.log(nam[1]);
}
     console.log(`---------------------------------------------------------------`);

// 2. Print total number of students
console.log(students.length);
     console.log(`---------------------------------------------------------------`);

// 3. Print details of students who enrolled in 'Python'
for(i=0;i<students.length;i++){
 if (students[i][2]==`Python`) {
    console.log(students[i]);
    
 }
}
     console.log(`---------------------------------------------------------------`);

// 4. Print students whose fees > 30000

for(i=0;i<students.length;i++){
 if (students[i][4]>=30000) {
    console.log(students[i]);
 }
}
     console.log(`---------------------------------------------------------------`);

// 5. Print details of student named 'Sneha'
for(i=0;i<students.length;i++){
 if (students[i][1]==`Sneha`) {
    console.log(students[i]);
    
 }
}
     console.log(`---------------------------------------------------------------`);

// 6. Arrange students based on fees in descending order
students.sort((x,y)=> y[4] - x[4])
console.log(students);
     console.log(`---------------------------------------------------------------`);


// 7. Arrange students based on course duration in ascending order
students.sort((x,y)=> x[5] - y[5])
console.log(students);
     console.log(`---------------------------------------------------------------`);

// 8. Print the student name with the highest fees
students.sort((x,y)=> y[4] - x[4])
console.log(students[0][1], students[0][4]  );
console.log(`---------------------------------------------------------------`);
