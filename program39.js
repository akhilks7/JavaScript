class employee {
    empname
    empid
    empdesi
    constructor(id, name, desi) {
        this.empid = id
        this.empname = name
        this.empdesi = desi
    }
    display() {
        console.log(`name : ${this.empname}`);

    }
}

const emp1 = new employee(1001, 'Akhil', 'developer')
emp1.display()

console.log('-------------------------------------------');


class student {
    rollno
    sname
    scourse
    constructor(rol, name, course) {
        this.rollno = rol
        this.sname = name
        this.scourse = course
        this.display()
    }
    display() {
        console.log(`${this.rollno}`);

    }
}

const stu1 = new student(21, 'Akhil', 'python')

stu1.display()

console.log('--------------------------------------------------------');

class Bank {
    // property
    accoundDetails = {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 5000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 10000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 6000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 2000 },
    }





    //w  a method to validate an acct

    vallidate(acno) {
        return acno in this.accoundDetails ? true : false
    }


    // w a method to aunthenticate an acct

    aunthenticate(acno, pasw) {
        if (this.vallidate) {
            if (this.accoundDetails[acno].password == pasw) {

                console.log(" aunthenticate sucessfull ");

            }
            else {
                console.log("password not correct");

            }
        }
        else {
            console.log("incorrect acct no");

        }
    }

    // w a method to check the balance of an acct

    accbalance(accno) {
        if (this.vallidate) {
            console.log("your balance is " + this.accoundDetails[accno].balance);
        }
    }

//     checkBalance(acno, pass) {
//         if (this.vallidate(acno)) {
//             if (this.aunthenticate(acno, pass)) {
//                 return `
// -----------------------------
// Account Number : ${this.accoundDetails[acno].acno}
// Account Holder Name : ${this.accoundDetails[acno].username}
// Balance : ${this.accoundDetails[acno].balance}`
//             }
//         }
//     }


    // w a method to transfer an amount from one acct to another

    transfer(fromaccno, toaccno, amount) {
        if (this.vallidate(fromaccno) && this.vallidate(toaccno)) {
            if (this.accoundDetails[fromaccno].balance >= amount) {
                this.accoundDetails[fromaccno].balance -= amount
                this.accoundDetails[toaccno].balance += amount
                console.log("transfer successful");
            }
            else {
                console.log("insufficient balance");
            }
        }
        else {
            console.log("invalid account number");
        }
    }


    display() {
        console.log(this.accoundDetails);
    }
}

const obj = new Bank()
console.log(obj.vallidate(10010) ? "found" : " not found")

obj.aunthenticate(1003, "userthree")

obj.accbalance(1001)
obj.transfer(1000, 1001, 2000)
obj.display()
// console.log(obj.checkBalance(1003, "userfour"));

