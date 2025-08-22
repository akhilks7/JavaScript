const employee = {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    salary: 60000,
    empDesgn: 3
};

console.log(employee);
console.log(employee['name']);
console.log(employee.name);
console.log('-------------------------------');

for( e in employee){
    console.log(`${e} : ${employee[e]}`);   
}
console.log('-------------------------------');

for( e in employee){
    console.log(employee[e]);   
}

console.log('-------------------------------');

employee['location']='kakkanad'
console.log(employee);

Object.assign(employee,{work:'Engineer'})
console.log(employee);

delete employee.salary;
console.log(employee);


// check whether employee experience (empexp) is present in the given object or not, if presnent print 'key is available' else add a new key value pair and empexp :3
        //  employe = {
        //     id: 1,
        //     name: "John Doe",
        //     position: "Software Engineer",
        //     salary: 60000
        // };

if ("position" in employee) {
    console.log("key is available");
} else {
    employee.empDesgn = "Software Engineer";
    console.log("key added:");
}
console.log(employee);

ispresent=false
for(emp in employee){
    if (emp == 'empexp') {
        ispresent = true;
    }
}
'empDesgn' in employee ? console.log("key is available") : (employee['empDesgn'] = 3, console.log("key added:"),console.log(employee));

