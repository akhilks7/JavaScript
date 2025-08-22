accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(accounts.length);
console.log('---------------------------------');

//2. print account number whose ac_type is savings
accounts.filter((pro)=>pro.ac_type=='savings').forEach((item)=> console.log(item.acno))
console.log('---------------------------------');

accounts.forEach((acc)=> acc['ac_type']=='savings' && console.log(acc['acno']));

console.log('---------------------------------');


//3.print the balance of accnount number 1000
console.log(accounts.find((item)=>item.acno==1000).balance);
console.log('---------------3------------------');

//4. print all gpay transactions
accounts.forEach((item)=>{
    item.transaction.filter((tran)=>tran.mode=='gpay').forEach((tranItem)=>console.log(tranItem));
});
console.log('----------------1-----------------');
accounts.map((item)=>item.transaction).flat().filter((item)=>item.mode=='gpay').forEach((item)=>console.log(item))
console.log('----------------2-----------------');

//5. print all transaction whose amount > 5000
accounts.forEach((item)=>{
    item.transaction.filter((tran)=>tran.amount>5000).forEach((tranItem)=>console.log(tranItem));
});
console.log('---------------------------------');

//6. print credit transaction of account 1002
console.log('---------------------------------');
accounts.map((item)=>item.transaction).flat().filter((item)=>item.to==1002).forEach((item)=>console.log(item))

//7. print debit transaction of account 1002
console.log('---------------------------------');
demo=accounts.find((item)=>item.acno==1002).transaction
console.log(demo);

//8. print transaction history of 1002
console.log('---------------------------------');
credi=accounts.map((item)=>item.transaction).flat().filter((item)=>item.to==1002)
tranhis={
    credit : credi,
    debit : demo
}
console.log(tranhis);

// accounts.map((item)=>item.transaction).flat().filter((item)=>item.to==1002 || item.from==1002).forEach((item)=>console.log(item))
console.log('-----------------spread operator----------------');

histo=[...credi,...demo]
console.log(histo);

console.log('---------------------------------');

//9. print highest balance account details

console.log(accounts.reduce((data1,data2)=> data1.balance>data2.balance ? data1 : data2) );
